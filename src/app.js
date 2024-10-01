function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let speedElement = document.querySelector("#speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  console.log(response.data);

  iconElement.innerHTML = `<img class="temperature-icon" src="${response.data.condition.icon_url}">`;
  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  speedElement.innerHTML = `${response.data.wind.speed}km/h`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  descriptionElement.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [,];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
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

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="weather-forecast-day">
            <div class="name-of-day">${day}</div>
            <div class="day-icon">🌤️</div>
            <div class="day-temperatures">
              <div class="day-temperature"><strong>19°</strong></div>
              <div class="day-temperature">15°</div>
            </div>
          </div>`;
  });
  forecastElement.innerHTML = forecastHtml;
}

displayForecast();
