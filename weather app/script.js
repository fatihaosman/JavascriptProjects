const apiKey="07f0d55c0e71538594e3610a671fee98";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
/*when user clicks on the search button it should send the info inside input to the function */

/*weather condtions-selects the image with the class weather-icon */
const weatherIcon = document.querySelector(".weather_icon")



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // “Please give me weather data for this city, and here’s my API key to prove I’m allowed.”, await is for waiting for the data which may take  while to retreive from the internet
//we have to check the response code is it error or a valid one
    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{

        var data = await response.json();
    /*this var will contain all the information  about the weather from the particular city*/
    console.log(data);
/*selects the element the display whats inside it..like the city or temp */
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + "°C" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr" ;
     document.querySelector(".pressure").innerHTML = data.main.pressure + "mb" ;
    
    /*weather conditions */
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "weather images/images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "weather images/images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "weather images/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "weather images/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "weather images/images/mist.png";
    }

    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display ="none";
    }   //else ends here
    
    
}

searchButton.addEventListener("click", ()=>{
    /*so this function will have the city info written in the input field */
    /*so to get the data inside the input field we add searchBox.value */
    checkWeather(searchBox.value);
    /*parameter passing */
})



/*async function
async = makes a function return a promise 
await= makes afunction wait for a promise
promises...same as async function
*/