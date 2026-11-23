const url =
  "https://api.open-meteo.com/v1/forecast?latitude=39.3209&longitude=-74.511724&hourly=temperature_2m&current=temperature_2m,is_day,wind_speed_10m,precipitation,weather_code&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch";
const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");
async function getWeather() {
  weatherArea.textContent = "";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  // I am saving this for later hense why it is commented out below
  //   const icon = document.createElement("p");
  //   icon.className = "fs-4";
  //   icon.textContent = getIcon(data.current.weather_code);
  //   weatherArea.appendChild(icon);

  //Temp (day 3)
  const temp = document.createElement("p");
  temp.className = "fs-4";
  temp.textContent =
    "Temperature: " +
    data.current.temperature_2m +
    " " +
    data.current_units.temperature_2m;

  weatherArea.appendChild(temp);

  //Wind Speed (day 3)
  const wind = document.createElement("p");
  wind.className = "fs-4";
  wind.textContent =
    "Wind Speed:  " +
    data.current.wind_speed_10m +
    " " +
    data.current_units.wind_speed_10m;

  weatherArea.appendChild(wind);
  //Time (day 3)
  const time = document.createElement("p");
  time.className = "fs-4";
  time.textContent =
    "Date and Time: " +
    new Date(data.current.time).toLocaleString() +
    "(" +
    data.timezone +
    ")";

  weatherArea.appendChild(time);
}
button.addEventListener("click", getWeather);
