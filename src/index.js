import { getCityName } from "./getCity.js";
import "./styles.css";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getCityName();
});