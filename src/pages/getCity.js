const cityName = document.getElementById("city");

cityName.addEventListener("input", () => {
  cityName.setCustomValidity("");
});

export function getCityName() {
  const pattern = /^[A-Za-z\s]+$/;

  if (cityName.value === "" || !pattern.test(cityName.value)) {
    cityName.setCustomValidity("Please enter a valid city name.");
    cityName.reportValidity();
  } else {
    const city = cityName.value;
  }
}
