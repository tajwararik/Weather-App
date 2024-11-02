import { weather } from "./getWeather.js";

const cityName = document.getElementById("city");

// Clear previous validity
cityName.addEventListener("input", () => {
  cityName.setCustomValidity("");
});

export function getCityName() {
  // Regex for city name
  const pattern = /^[A-Za-z\s]+$/;

  if (cityName.value === "" || !pattern.test(cityName.value)) {
    cityName.setCustomValidity("Please enter a valid city name.");
    cityName.reportValidity();
  } else {
    const city = cityName.value;
    weather(city.trim());
  }
}
