async function fetchData() {
  try {
    const response = await fetch("https://v6.db.transport.rest/journeys?from=8000103&to=8000244&departure=2023-12-04T10%3A00%3A00%2B02%3A00&results=1&stopovers=false&transferTime=0&bike=false&startWithWalking=true&walkingSpeed=normal&tickets=false&polylines=false&remarks=true&scheduledDays=false&language=en&firstClass=false");
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const journeyList = await response.json();
    console.log(journeyList);


    const transfers = journeyList.journeys[0].legs;
    console.log(transfers.length-1);

    
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

