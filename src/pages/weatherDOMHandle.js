const body = document.querySelector("body");
const section = document.createElement("section");

export function getInformation(
  city,
  temp,
  feelsTemp,
  humidity,
  description,
  conditions
) {
  section.innerHTML = "";

  section.innerHTML = `<h1>${city}</h1>
            <p>${temp}<span>&deg</span>F</p>
        <p>Feels like <span>${feelsTemp}</span><span>&deg</span>F</p>
        <p>Humidity <span>${humidity}</span></p>
        <p>${description}</p>`;

  body.append(section);
}
