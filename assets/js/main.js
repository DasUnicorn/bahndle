// All possible ICE station IDs
const stations = [8000774, 8000055, 8000077, 8000107, 8000156, 8000191, 8003184, 8003400, 8000244, 8000290, 8000302, 8000880, 8000073, 8005644, 8000096, 8000170, 8006053, 8000366, 8000377, 8006421, 8000010, 8000013, 8000025, 8001338, 8000078, 8001844, 8000108, 8002187, 8000139, 8000183, 8000228, 8003693, 8004185, 8000261, 8004158, 8000262, 8000284, 8000298, 8000301, 8000309, 8000320, 8000116, 8000122, 8005927, 8000220, 8000260, 8011160, 8010255, 8011102, 8010404, 8011113, 8011162, 8010405, 8010004, 8013470, 8010093, 8010282, 8000020, 8000031, 8000068, 8000105, 8002041, 8070003, 8002042, 8000111, 8000115, 8000124, 8000150, 8003200, 8003680, 8000337, 8000129, 8000368, 8000250, 8011044, 8010033, 8011191, 8010066, 8010139, 8010216, 8012763, 8010304, 8010268, 8010324, 8010338, 8010355, 8010396, 8000049, 8000050, 8000064, 8001768, 8000128, 8000152, 8003487, 8000169, 8000225, 8003701, 8000238, 8003866, 8003978, 8000800, 8000294, 8004751, 8000168, 8006552, 8000001, 8000036, 8000041, 8000044, 8000080, 8000085, 8000082, 8000098, 8002206, 8000118, 8002461, 8000149, 8000162, 8002806, 8000207, 8003368, 8003330, 8000211, 8000252, 8000253, 8000263, 8000286, 8000307, 8000316, 8005556, 8000087, 8000192, 8000266, 8000331, 8000176, 8000189, 8000206, 8000240, 8000667, 8000275, 8000310, 8000323, 8000257, 8010022, 8010085, 8010089, 8010205, 8012183, 8010297, 8010050, 8010159, 8010195, 8010222, 8010224, 8010240, 8002549, 8002553, 8002548, 8000147, 8002554, 8000199, 8000237, 8000271, 8010097, 8010101, 8010136, 8011956, 8010366];

// Global Variables:
let journeyList;
let transfers = 0;
let startStation = "";
let endStation = "";
let stops = [];
let startDate;
let endDate;
let tryNumber = 0;

/* Eventlistener that fetches a random train station when the site finished loading and sets up the main infos for the game*/
window.addEventListener("load", async () => {
    const from = randomStationID();
    const to = randomStationID();
    let link = "https://v6.db.transport.rest/journeys?from=" + from + "&to=" + to + "&departure=2023-12-04T10%3A00%3A00%2B02%3A00&results=1&stopovers=false&transferTime=0&bike=false&startWithWalking=true&walkingSpeed=normal&tickets=false&polylines=false&remarks=true&scheduledDays=false&language=en&firstClass=false";

    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        journeyList = await response.json();

        //Set up the main info with the loaded journey
        setStart(journeyList);
        setTransfers(journeyList);
        setEnd(journeyList);

        const start = document.getElementById("start");
        start.innerHTML = startStation;

        console.log("start: " + startStation);
        console.log("end: " + endStation);

        const time = document.getElementById("time");
        time.innerHTML = getTravelTime(journeyList);

        const transferNumber = document.getElementById("transfer");
        transferNumber.innerHTML = transfers;

        // Get a list of all stops
        stops = await setStops(journeyList);

    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
});

/* Returns a random station */
function randomStationID() {
    let position = Math.floor(Math.random() * stations.length - 1);
    return stations[position];
}

/* Execute guess function when guess button is pressed*/
let button = document.getElementById("buttonGuess");
button.addEventListener("click", () => {
    let input = document.getElementById("station-choice").value;
    makeGuess(input);
});

/* Functions to close the Modal*/
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

/* Close modal on button click*/
closeModal.addEventListener("click", () => {
    modal.close();
});

/* function to display the modal */
function openModal() {
    modal.showModal();
}

/* Function by Wilson Lee (see credits), to turn a date into h, min, sec. */
function secondsToHms(d) {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    let mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}

/**
 * Function to calculate the time traveling
 * @param {JSON} journeyList - A JSON containing the journey.
 */
function getTravelTime(journeyList) {

    const toTimestamp = (strDate) => {
        const dt = new Date(strDate).getTime();
        return dt / 1000;
    };

    let transfers = getTransfers(journeyList);
    endDate = journeyList.journeys[0].legs[transfers].arrival;
    startDate = journeyList.journeys[0].legs[0].departure;
    let travelTime = Math.abs(toTimestamp(endDate) - toTimestamp(startDate));

    return secondsToHms(travelTime);
}

/**
 * Function to calculate the amount of transfers a given journey
 * @param {JSON} journeyList - A JSON containing the journey.
 */
function setTransfers(journeyList) {
    const transfersArray = journeyList.journeys[0].legs;
    transfers = transfersArray.length - 1;
}

/* Function to get the numbers of transfers in one journey */
function getTransfers() {
    return transfers;
}

/**
 * Function to set the start of a given journey.
 * @param {JSON} journeyList - A JASON containing the journey.
 */
function setStart(journeyList) {
    startStation = journeyList.journeys[0].legs[0].origin.name;
}

/**
 * Function to set the end of a given journey.
 * @param {JSON} journeyList - A JASON containing the journey.
 */
function setEnd(journeyList) {
    endStation = journeyList.journeys[0].legs[transfers].destination.name;
}

/**
 * Function to return the Trip ID of a given train Line.
 * @param {JSON} journeyList - A JASON containing the train Line.
 */
function getTripId(line) {
    return line.tripId;
}

/**
 * Function to return the lineName of a given dataset.
 * @param {JSON} journeyList - A JASON containing the train Line.
 */
function getLineName(lineData) {
    const name = lineData.line.name;
    let cleanName = name.replace(/ /g, '%');
    return cleanName;

}

/**
 * Function to set the stops on a given journey.
 * @param {JSON} journeyList - A JASON containing the journey.
 */
async function setStops(journeyList) {
    // For each train we took, we need to fetch all stopps and put them into a link
    let allStops = [];
    let currentStation = startStation;
    for (let i = 0; i < transfers + 1; i++) {
        // To fetch each train we need the id and line name
        let id = getTripId(journeyList.journeys[0].legs[i]);
        let lineName = getLineName(journeyList.journeys[0].legs[i]);

        try {
            let link = "https://v6.db.transport.rest/trips/" + id + "?lineName=" + lineName + "&stopovers=true&remarks=false&polyline=false&language=en";

            let response = await fetch(link, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json' //expects JSON
                }
            });

            let result = await response.json();
            let stopLength = result.trip.stopovers.length - 1;
            let stopList = Array(stopLength + 1);

            for (let i = 0; i < stopList.length; i++) {
                stopList[i] = new Array(2);
            }

            let step = 0;

            while (currentStation != result.trip.stopovers[step].stop.name) {
                step += 1;
            }

            for (step + 1; step <= stopLength; step++) {
                stopList[step][0] = result.trip.stopovers[step].stop.name;
                if (result.trip.stopovers[step].departure != null) {
                    stopList[step][1] = result.trip.stopovers[step].departure;
                } else {
                    stopList[step][1] = result.trip.stopovers[step].arrival;
                }
                if (result.trip.stopovers[step].stop.id == journeyList.journeys[0].legs[i].destination.id) {
                    currentStation = journeyList.journeys[0].legs[i].destination.name;
                    break;
                }
            }

            allStops = allStops.concat(stopList);

        } catch (error) {
            console.error("There has been a problem with your fetch operation:", error);
        }
    }

    return allStops;
}


/**
 * function that takes the input, checks if it is valid, and displays the result
 * @param {string} input - a valid ICE train station.
 */
function makeGuess(input) {
    tryNumber += 1;
    checkGuess(input);
}

/**
 * function that takes the input, checks if it is valid, and open a modal in case the user won.
 * @param {string} input - a valid ICE train station.
 */
function checkGuess(input) {
    if (input == endStation) {
        addElementWin(input);
        openModal();
    } else if (!checkForStop(input)) {
        addElementWrong(input);
    }
}

/**
 * function that takes the input and  checks if it is stopp on the journey
 * @param {string} input - a valid ICE train station.
 */
function checkForStop(input) {
    console.log("Check for stop: ");
    console.log(stops);
    let length = stops.length;

    for (let i = 0; i < length - 1; i++) {
        console.log("Current stop to check : " + stops[i][0]);
        if (stops[i][0] == input) {
            addElementStop(input, stops[i]);
            return true;
        }
    }
    return false;
}

/**
 * function that takes the input and  displays the guess as a win, as well as open a modal.
 * @param {string} input - a valid ICE train station.
 */
function addElementWin(input) {
    // Insert the trys needed into html
    const trys = document.getElementById("trys");
    trys.innerHTML = tryNumber;
    // create a new div element
    const newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode("🟩 " + input);

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

/**
 * Function that takes the input and  displays the guess as a stop with the time needed to reach the destination.
 * @param {string} input - a valid ICE train station.
 */ 
function addElementStop(input, stop) {
    // create a new div element
    const newDiv = document.createElement("div");

    const toTimestamp = (strDate) => {
        const dt = new Date(strDate).getTime();
        return dt / 1000;
    };
    let timeStop = stop[1];
    let time = Math.abs(toTimestamp(endDate) - toTimestamp(timeStop));
    let cleanTime = secondsToHms(time);

    // and give it some content
    const newContent = document.createTextNode("🟨 " + input + " - Time Left: " + cleanTime);

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

/**
 * Function that takes the input and  displays the guess as a win.
 * @param {string} input - a valid ICE train station.
 */ 
function addElementWrong(input) {
    // create a new div element
    const newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode("🟥 " + input);

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}