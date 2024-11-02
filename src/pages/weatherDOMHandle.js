const body = document.querySelector("body");
export const section = document.createElement("section");

export function getInformation(city, temp, feelsTemp, humidity, description) {
  section.innerHTML = "";

  section.innerHTML = `<h1>${city}</h1>
        <button class="celsius-btn"><span>&deg</span>C</button>
        <button class="fahrenheit-btn"><span>&deg</span>F</button>
        <p>${temp}<span>&deg</span>F</p>
        <p>Feels like <span>${feelsTemp}</span><span>&deg</span>F</p>
        <p>Humidity <span>${humidity}%</span></p>
        <p>${description}</p>`;

  body.append(section);
}
