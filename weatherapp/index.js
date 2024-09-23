const apikey = "d73295099732339b0739636f977b2be2";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherlogo = document.querySelector(".weather img");
const weatherdetails = document.querySelector('.weatherdetails')

async function getcityname(cityname) {
  try {
    let response = await fetch(apiUrl + cityname + `&appid=${apikey}`);

    if (!response.ok) {
      throw new Error("invalid details");
    }
    let data = await response.json();
    console.log(data);

    temp.innerHTML = Math.round(data.main.temp) + "°C";
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";

    weatherdetails.style.display = "block";

   

    switch (data.weather[0].main) {
      case "Clouds":
        weatherlogo.src = "weather-app-img/clouds.png";
        break;
      case "clear":
        weatherlogo.src = "weather-app-img/clear.png";
        break;
      case "drizzle":
        weatherlogo.src = "weather-app-img/drizzle.png";
        break;
      case "humidity":
        weatherlogo.src = "weather-app-img/humidity.png";
        break;
      case "Mist":
        weatherlogo.src = "weather-app-img/mist.png";
        break;
      case "rain":
        weatherlogo.src = "weather-app-img/rain.png";
        break;
      case "snow":
        weatherlogo.src = "weather-app-img/snow.png";
        break;
    }
  } catch (error) {
    alert('wrong details or data not available')
  }
}
searchbtn.addEventListener("click", () => {
  getcityname(inputbox.value);
});
