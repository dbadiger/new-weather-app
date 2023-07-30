const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2f4e1434famsh919746abf5ad34ap15af9ejsnd86ff4eb88d6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const weatherIcon = document.querySelector(".weather-icon");
const weatherData = (city) => {
  cityName.innerHTML = city;
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      (temp.innerHTML = response.temp),
        (humidity.innerHTML = response.humidity),
        (wind_speed.innerHTML = response.wind_speed),
        (max_temp.innerHTML = response.max_temp),
        (min_temp.innerHTML = response.min_temp),
        console.log(response);

      if (response.temp <= 25) {
        weatherIcon.src = "clouds-and-sun.png";
      } else {
        weatherIcon.src = "sun.png";
      }
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  weatherData(citySearch.value);
});

weatherData("Bengaluru");
