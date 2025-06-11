
    const input=document.querySelector('#cityInput');
    
    async function getWeather(){
       const cityName=input.value;
       const apiKey = 'fd8f89ca864a1d6bb817ec99cf5faae2'; // Replace with your OpenWeatherMap API key
       const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    
    if(!cityName){
        alert("Please enter your city");
        return;
    }
     try{const response=await fetch(apiUrl);

//     if (!response.ok) {
//   alert("City not found or invalid. Please enter a valid city name.");
//   return;}
// This will work but still not good practice to handle error



     const data=await response.json();
const image=data.weather[0].main.toLowerCase();
     const weather_info=document.querySelector('.weather-container .weather-info');
     weather_info.innerHTML= `<div class="image"><img src="images/${image}.png" alt=""></div>
            <div class="cityName">${data.name} , ${data.sys.country}</div>
            <div class="temp">Temperature: ${data.main.temp}</div>
            <div class="weather">Weather: ${data.weather[0].description}</div>
            <div class="details">
                <div class="humidity">
                    <img src="images/humidity.png" alt="">
                    <div class="answer">
                        <p>${data.main.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="windSpeed">
                    <img src="images/wind.png" alt="">
                   <div class="answer">
                        <p>${data.wind.speed}km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>`
}
catch{
    alert("City not found or invalid. Please enter a valid city name.");
}
   }