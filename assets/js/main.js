async function fetchData() {
  const response = await fetch("https://v5.db.transport.rest/journeys?from=8000103&to=8000244");
  const journeys = await response.json();
  console.log(journeys);
}