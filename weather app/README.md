# 🌦️ Weather App

A sleek and simple weather application that allows users to search for any city and view its current weather information in real time. Built with HTML, CSS (with glassmorphism UI), and JavaScript using the OpenWeatherMap API.
---
## 🔥 Features
- 🔍 Search weather by city name
- 🌡️ Real-time temperature in °C
- 💨 Wind speed
- 💧 Humidity levels
- 🌬️ Atmospheric pressure
- ❄️ Clean, responsive UI with a blurred glass effect
- 🧠 Error handling for invalid city names
---
## 🛠️ Technologies Used
- **HTML** – Markup structure
- **CSS** – Styling with Flexbox & Glassmorphism
- **JavaScript** – Logic and API calls
- **OpenWeatherMap API** – Fetching live weather data
---
## 📡 How the API Works
📡 OpenWeatherMap API Integration
- Created an account on OpenWeatherMap.
- Retrieved my API key after signing in.
- Navigated to Current Weather Data section on OpenWeather.
- Used the API endpoint for searching by city name:
    https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=YourAPIKey
- To show temperature in °C, I added the units parameter like this:
    &units=metric
- Tested the URL directly in the browser first to confirm it returns the correct data.
-Plugged the URL into my JavaScript code using fetch() and async/await

## Next Steps & Planned Features
- Add sunrise and sunset times.
- Add date and time display.
- Improve mobile responsiveness.
- Further enhance UI design.
- Add loading animation while data is fetching
