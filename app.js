function displayTemperature(response) {
  console.log(response);

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let conditionElement = document.querySelector("#currentWeatherCondition");
  let humidityElement = document.querySelector("#humidity");
  let feelsLikeElement = document.querySelector("#feelTemperature");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  conditionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "627863a58e36a8002df35a69076af8ab";

let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemperature);
