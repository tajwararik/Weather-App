const body = document.querySelector("body");
export const section = document.createElement("section");

export function getInformation(city, temp, feelsTemp, humidity, description) {
  section.innerHTML = "";

  section.innerHTML = `<h1>${city}</h1>
        <button class="btn">Switch to °C</button>
        <p class = "temp">${temp}°F</p>
        <p class = feels-temp>Feels like ${feelsTemp}°F</p>
        <p>Humidity ${humidity}%</p>
        <p>${description}</p>`;

  body.append(section);

  section.querySelector(".btn").addEventListener("click", function () {
    const fahrenheit = temp;
    const feelsFahrenheit = feelsTemp;

    const celsius = ((fahrenheit - 32) / 9) * 5;
    const feelCelsius = ((feelsFahrenheit - 32) / 9) * 5;

    this.textContent =
      this.textContent === "Switch to °F" ? "Switch to °C" : "Switch to °F";

    if (this.textContent === "Switch to °C") {
      displayInFahrenheit();
    } else {
      displayInCelsius();
    }

    function displayInFahrenheit() {
      section.querySelector(".temp").innerHTML = `${fahrenheit}°F`;

      section.querySelector(
        ".feels-temp"
      ).innerHTML = `Feels like ${feelsFahrenheit}°F`;
    }

    function displayInCelsius() {
      section.querySelector(".temp").innerHTML = `${celsius.toFixed(
        1
      )}<span>&deg</span>C`;

      section.querySelector(
        ".feels-temp"
      ).innerHTML = `Feels like ${feelCelsius.toFixed(1)}<span>&deg</span>C`;
    }
  });
}
