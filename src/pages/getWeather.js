export function weather(cityName) {
  const city = cityName;

  fetchData(city);
}

async function fetchData(cityName) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=SXBT5JT6F5USTW2XYTH4YNYCD`,
      { mode: "cors" }
    );
    const getData = await response.json();
    console.log(getData);
  } catch (err) {
    alert(err);
  }
}
