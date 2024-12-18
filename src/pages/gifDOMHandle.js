import { section } from "./weatherDOMHandle";

export function showGIF(icon) {
  const img = document.createElement("img");
  img.classList.add("gif");

  // Fetching GIF
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=SvtRDqf5VO6YEOJNKOtlrlMsGOG5XLj8&s=${icon}`,
    { mode: "cors" }
  )
    .then(function (response) {
      // Converting to jason
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;

      section.append(img);
    })
    .catch(function (err) {
      console.log(err);
    });
}
