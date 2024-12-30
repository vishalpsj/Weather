let searchicon = document.getElementById('searchicon')
let searchCity = document.getElementById('searchCity')
let city = document.querySelector('.weather_city')
let date_time = document.querySelector('.date_time')
let weather_forcast = document.querySelector('.weather_forcast')
let weather_icon = document.querySelector('.weather_icon')
let weather_temprature = document.querySelector('.weather_temprature')
let min = document.querySelector('.min')
let max = document.querySelector('.max')
let feelsLike = document.getElementById('feelsLike')
let humidity = document.getElementById('humidity')
let windSpeed = document.getElementById('wind')
let pressure = document.getElementById('pressure')



// trial purpose, remove it when coding
// date_time.innerText = `${(new Date).toDateString()} - ${(new Date).toLocaleTimeString()}`
// weather_forcast.innerText = "Cloudy"
// weather_icon.innerHTML = `<i class="ri-cloudy-line"></i>`
// weather_temprature.innerHTML = `32 <i class="ri-celsius-line"></i> ` 
// min.innerHTML = `Min - 23 <i class="ri-celsius-line"></i>`
// max.innerHTML = `Max - 28 <i class="ri-celsius-line"></i>`


//getting country full name from its code

const generateCountryName = (code) => {
    return new Intl.DisplayNames([code], { type: 'region' }).of(code);
}

// getting time 

const generateDateTime = (dt) => {

    const curDateTime = new Date(dt * 1000);

    const options = {
        weekdays: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    }

    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(curDateTime);
}

const cityName = searchCity.value;
console.log(cityName);


// api url
const weatherAPI_url = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&APPID=a5518e6d8640c09e4a18003b8e9d533d`;


const getWeatherData = async () => {
    try {
        const res = await fetch(weatherAPI_url)
        const data = await res.json()
        console.log(data);
        const { dt, main, name, sys, weather, wind } = data;

        city.innerText = `${name}, ${generateCountryName(sys.country)}`
        date_time.innerText = generateDateTime(dt)
        weather_forcast.innerHTML = weather[0].main
        weather_temprature.innerHTML = `${main.temp.toFixed()}&deg;`
        // weather_icon.innerHTML = weather[0].icon
        weather_icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png"></img>`
        min.innerHTML = `Min - ${main.temp_min.toFixed()}&deg;`;
        max.innerHTML = `Max - ${main.temp_max.toFixed()}&deg;`
        feelsLike.innerHTML = `${main.feels_like.toFixed()}&deg;`
        humidity.innerHTML = `${main.humidity}&percnt;`
        windSpeed.innerHTML = `${wind.speed} m/s`
        pressure.innerHTML = `${main.pressure} mbar`



    } catch (error) {
        console.log(error);
    }
}

document.body.addEventListener('load', getWeatherData())
// searchCity.addEventListener('keydown', (e) => {
//     if(e.key === "Enter"){
//         getWeatherData()
//     }
// })
// searchicon.addEventListener('click'. getWeatherData())
