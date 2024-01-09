const form = document.getElementById('weatherForm');
const apiKey = "084781f04d29b5b023a6818f54d17cbb";

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const cityName = document.getElementById('cityInput').value;

  try {
    const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`);
    const geoData = await geoResponse.json();

    const { lat, lon } = geoData[0];
    const weatherDetails = await getWeatherDetails(lat, lon);

    printWeatherDetails(weatherDetails);
  } catch (error) {
    console.error('Error:', error);
  }
});

async function getWeatherDetails(lat, lon) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
  return response.json();
}

function printWeatherDetails(data) {
  console.log(data);
  const { main, wind } = data;

  document.querySelector('.current-temp').innerHTML = `${main.temp}°C`;
  document.querySelector('.min-temp').innerHTML = `${main.temp_min}°C`;
  document.querySelector('.max-temp').innerHTML = `${main.temp_max}°C`;
  document.querySelector('.wind-speed').innerHTML = `${wind.speed}km/h`;
  document.querySelector('.humidity').innerHTML = `${main.humidity}%`;
  document.querySelector('.pressure').innerHTML = `${main.pressure}hPa`;
}
