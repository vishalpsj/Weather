let errorShowing = document.getElementById('errorShowing')
let inputs = document.querySelector('.inputs')
let searchicon = document.getElementById('searchicon')
let searchCity = document.getElementById('searchCity')
let reportBox = document.querySelector('.weather_report')
let moreInfo = document.querySelector('.moreInfo')
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

let theCityName = "new delhi"

const getWeatherData = async () => {
    // api url
    const weatherAPI_url = `https://api.openweathermap.org/data/2.5/weather?q=${theCityName}&units=metric&APPID=a5518e6d8640c09e4a18003b8e9d533d`;
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
        min.innerHTML = `Min: ${main.temp_min.toFixed()}&deg;`;
        max.innerHTML = `Max: ${main.temp_max.toFixed()}&deg;`
        feelsLike.innerHTML = `${main.feels_like.toFixed()}&deg;`
        humidity.innerHTML = `${main.humidity}&percnt;`
        windSpeed.innerHTML = `${wind.speed} m/s`
        pressure.innerHTML = `${main.pressure} mbar`



    } catch (error) {
        // console.log(error);
        reportBox.style.display = "none"
        moreInfo.style.display = "none"
        document.querySelector('.errorMsgbox').style.display = "flex"
        errorShowing.innerHTML = `We couldn't locate '${theCityName}', Try another.`

    }
}

document.body.addEventListener('load', getWeatherData())
inputs.addEventListener('submit', (e) => {
    e.preventDefault()
    let searchCity = document.getElementById('searchCity')
    theCityName = searchCity.value
    reportBox.style.display = "flex"
    moreInfo.style.display = "flex"
    document.querySelector('.errorMsgbox').style.display = "none"
    getWeatherData()

    searchCity.value = ""
})

searchicon.addEventListener('click', (e) => {
    e.preventDefault()
    let searchCity = document.getElementById('searchCity')
    theCityName = searchCity.value
    reportBox.style.display = "flex"
    moreInfo.style.display = "flex"
    document.querySelector('.errorMsgbox').style.display = "none"
    getWeatherData()

    searchCity.value = ""
})
