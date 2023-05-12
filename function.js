function cityWeather(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityName.innerHTML = cityInput.value;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let searchedCity = `${cityInput.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showSearchedweather);
}

let searchCity = document.querySelector(".btn.btn-primary");
searchCity.addEventListener("click", cityWeather);

function showcurrentWeather(response) {
  console.log(response);
  let currentCity = response.data.name;
  let currentWeatherSituation = response.data.weather[0].main;
  let currentTemperature = Math.round(response.data.main.temp);
  let currentHumidity = response.data.main.humidity;
  let currrentWind = Math.round(response.data.wind.speed);
  let cC = document.querySelector("#city");
  cC.innerHTML = `${currentCity}`;
  let cW = document.querySelector("h3");
  cW.innerHTML = `${currentWeatherSituation}`;
  let cH = document.querySelector("#humidity");
  cH.innerHTML = `Humidity ${currentHumidity}%`;
  let cWind = document.querySelector("#wind");
  cWind.innerHTML = `Wind ${currrentWind}km/h`;
}

function currentWeather(position) {
  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showcurrentWeather);
}

navigator.geolocation.getCurrentPosition(currentWeather);

let currentButton = document.querySelector(".btn.btn-success");
currentButton.addEventListener("submit", function (event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentWeather);
});
