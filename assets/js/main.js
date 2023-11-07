// Function by Wilson Lee (see credits)
function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return hDisplay + mDisplay + sDisplay;
}

async function fetchData() {
  try {
    const response = await fetch("https://v6.db.transport.rest/journeys?from=8000103&to=8000244&departure=2023-12-04T10%3A00%3A00%2B02%3A00&results=1&stopovers=false&transferTime=0&bike=false&startWithWalking=true&walkingSpeed=normal&tickets=false&polylines=false&remarks=true&scheduledDays=false&language=en&firstClass=false");
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const journeyList = await response.json();
    console.log(journeyList);

    console.log(getEnd(journeyList));


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

  var endDate = journeyList.journeys[0].legs[transfers].arrival;
  var startDate = journeyList.journeys[0].legs[0].departure;
  var travelTime = Math.abs(toTimestamp(endDate) - toTimestamp(startDate));

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

function getEnd(jsonData) {
  journeyList = jsonData;

  var transfers = getTransfers(jsonData);
  const endStation = journeyList.journeys[0].legs[transfers].destination.name;

  return endStation;
}