function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  //make api call and update UI
  let apiKey = "a1bo4439ac5fc07t02d36e4b34aa3665";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=a1bo4439ac5fc07t02d36e4b34aa3665&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar-input");

  searchCity(searchInput.value);
}

let formElement = document.querySelector("#search-bar");
formElement.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg");
