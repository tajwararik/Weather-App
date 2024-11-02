const body = document.querySelector("body");
export const section = document.createElement("section");

export function getInformation(city, temp, feelsTemp, humidity, description) {
  section.innerHTML = "";

  section.innerHTML = `<h1>${city}</h1>
        <button class="celsius-btn"><span>&deg</span>C</button>
        <button class="fahrenheit-btn"><span>&deg</span>F</button>
        <p class = "temp">${temp}<span>&deg</span>F</p>
        <p class = feels-temp>Feels like ${feelsTemp}<span>&deg</span>F</p>
        <p>Humidity <span>${humidity}%</span></p>
        <p>${description}</p>`;

  body.append(section);

  section.querySelector(".celsius-btn").addEventListener("click", () => {
    const fahrenheit = temp;
    const feelsFahrenheit = feelsTemp;

    const celsius = ((fahrenheit - 32) / 9) * 5;
    const feelCelsius = ((feelsFahrenheit - 32) / 9) * 5;

    section.querySelector(".temp").innerHTML = `${celsius.toFixed(
      1
    )}<span>&deg</span>C`;

    section.querySelector(
      ".feels-temp"
    ).innerHTML = `Feels like ${feelCelsius.toFixed(1)}<span>&deg</span>C`;
  }); 
}
