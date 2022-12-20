document.addEventListener('DOMContentLoaded', function() {
    // Handle login form submission
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = loginForm.querySelector('input[name="username"]').value;
      const password = loginForm.querySelector('input[name="password"]').value;
      // Validate username and password
      if (username === 'admin' && password === 'password') {
        // Show success message
        document.querySelector('#login-success-msg').innerText = 'Login successful';
        document.querySelector('#login-success-msg-holder').style.display = 'block';
        // Hide error message
        document.querySelector('#login-error-msg-holder').style.display = 'none';
      } else {
        // Show error message
        document.querySelector('#login-error-msg').innerText = 'Invalid username or password';
        document.querySelector('#login-error-msg-holder').style.display = 'block';
        // Hide success message
        document.querySelector('#login-success-msg-holder').style.display = 'none';
      }
    });
})
// Fetch weather data from OpenWeatherMap API
const input = document.querySelector('.inputValue');
const button = document.querySelector('.button');
button.addEventListener('click', function() {
  const city = input.value;
  const apiKey = 'f8bb770c3c3f41f518d1d8ff65a1a3b5';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(apiUrl)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(function(data) {
        console.log(data);
        // Convert temperature to Celsius
        const tempCelsius = data.main.temp - 273.15;
        // Display weather data on the page
        const cityEl = document.querySelector('.city');
        cityEl.innerText = data.name;
        const tempEl = document.querySelector('.temp');
        tempEl.innerText = `Temperature: ${tempCelsius.toFixed(1)}°C`;
        const descEl = document.querySelector('.desc');
        descEl.innerText = data.weather[0].description;
        // Display weather icon
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const iconEl = document.createElement('img');
        iconEl.src = iconUrl;
        iconEl.alt = data.weather[0].description;
        document.querySelector('.display').appendChild(iconEl);
      })