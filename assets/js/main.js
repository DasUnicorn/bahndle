// Function by Wilson Lee (see credits)
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

// Fetching the data for the given train stations
async function fetchData() {
    try {
        const response = await fetch("https://v6.db.transport.rest/journeys?from=8000103&to=8000244&departure=2023-12-04T10%3A00%3A00%2B02%3A00&results=1&stopovers=false&transferTime=0&bike=false&startWithWalking=true&walkingSpeed=normal&tickets=false&polylines=false&remarks=true&scheduledDays=false&language=en&firstClass=false");
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const journeyList = await response.json();
        console.log(journeyList);

        console.log(getEnd(journeyList));

        let tripId = getTripId(journeyList.journeys[0].legs[0]);
        let LineName = getLineName(journeyList.journeys[0].legs[0]);
        console.log(getStops(tripId, LineName))

    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
}

// Function to calculate the time traveling
function getTravelTime(jsonData) {
    journeyList = jsonData;

    const toTimestamp = (strDate) => {
        const dt = new Date(strDate).getTime();
        return dt / 1000;
    };

    let endDate = journeyList.journeys[0].legs[transfers].arrival;
    let startDate = journeyList.journeys[0].legs[0].departure;
    let travelTime = Math.abs(toTimestamp(endDate) - toTimestamp(startDate));

    return secondsToHms(travelTime);
}

// Function to get the numbers of transfers in one journey
function getTransfers(jsonData) {
    journeyList = jsonData;

    const transfersArray = journeyList.journeys[0].legs;
    const transfers = transfersArray.length - 1;

    return transfers;
}

//function to get the start location
function getStart(jsonData) {
    journeyList = jsonData;

    const startStation = journeyList.journeys[0].legs[0].origin.name;

    return startStation;
}

// function returning the station where the journey ends
function getEnd(jsonData) {
    journeyList = jsonData;

    let transfers = getTransfers(jsonData);
    const endStation = journeyList.journeys[0].legs[transfers].destination.name;

    return endStation;
}

// returns the Trip ID of a dataset of train Line 
function getTripId(jsonDataLine) {
    let line = jsonDataLine;
    let id = line.tripId;
    return id;
}

// returns the lineName of a given dataset
function getLineName(jsonDataLine) {
    const lineData = jsonDataLine;
    const name = lineData.line.name;
    let cleanName = name.replace(/ /g, '%');
    return cleanName;

}

// function to get a list of all stopps on a line with the departure/arrival time of each station
async function getStops(id, lineName) {

    try {
        let link = "https://v6.db.transport.rest/trips/" + id + "?lineName=" + lineName + "&stopovers=true&remarks=false&polyline=false&language=en";
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const trip = await response.json();
        console.log(trip);

        let stopLength = trip.trip.stopovers.length - 1;
        let stopList = Array(stopLength+1);

        for (let i = 0; i < stopList.length; i++) {
            stopList[i] = new Array(2);
        }

        for (let step = 0; step <= stopLength; step++) {
            stopList[step][0] = trip.trip.stopovers[step].stop.name;
            stopList[step][1] = trip.trip.stopovers[step].arrival;
        }

        console.log(stopList);

    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
}