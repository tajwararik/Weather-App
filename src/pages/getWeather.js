import { getInformation } from "./weatherDOMHandle";
import { showGIF } from "./gifDOMHandle";

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
    const city = getData.resolvedAddress;
    const temp = getData.days[0].temp;
    const feelsTemp = getData.days[0].feelslike;
    const humidity = getData.days[0].humidity;
    const description = getData.days[0].description;
    const icon = getData.days[0].icon;

    getInformation(city, temp, feelsTemp, humidity, description);
    showGIF(icon);
  } catch (err) {
    console.log(err);
  }
}
