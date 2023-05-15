// apikey of openweather
const apiKey = ".eve.letter";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// async function with city as parameter
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  // if statement used if any error 404 display then it will block the response and show invalid city name
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "&#176C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    // this statements is used to show the correct image according to temperature
    if (data.weather[0].main == "clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "snow") {
      weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

// callback function
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
