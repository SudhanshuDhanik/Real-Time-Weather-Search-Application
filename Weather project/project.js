function getWeather() {
    let input = document.getElementById('inputbox');
    let cityName = input.value;
    if (!cityName) {
        alert("Please enter city!");
        return;
    }
    const apiKey = 'fd8f89ca864a1d6bb817ec99cf5faae2';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {

            //this is written to see whats the name is coming in console
            //so that we can change name according to them only
            //i.e.main.temp,wind.speed,etc.
            console.log(data);
            
            const weatherInfo = document.querySelector('.weatherInfo');
            weatherInfo.innerHTML = `     
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p>Temperature: ${data.main.temp} &#8451;</p>
                        <p>Weather: ${data.weather[0].description}</p></> ` ;
            let humidity = document.querySelector('.humidity');
            humidity.innerHTML = `<p>${data.main.humidity}%</p>
`;
            let wind = document.querySelector('.wind');
            wind.innerHTML = `<p>${data.wind.speed}km/h<p>`;

            let weathericon = document.querySelector('.weather-icon');
            if (data.weather[0].main == 'Clear') {
                weathericon.src = 'images/search.png';
            }
            document.querySelector('.weather').style.display = 'block';
        } )
        .catch(error => {
            document.querySelector('.weather').style.display = 'none';
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        })

}



