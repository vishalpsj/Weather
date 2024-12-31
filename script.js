let errorShowing = document.getElementById('errorShowing')
let inputs = document.querySelector('.inputs')
let searchicon = document.getElementById('searchicon')
let searchCity = document.getElementById('searchCity')
let reportBox = document.querySelector('.weather_report')
let moreInfo = document.querySelector('.moreInfo')
let city = document.querySelector('.weather_city')
let weather_forcast = document.querySelector('.weather_forcast')
let weather_icon = document.querySelector('.weather_icon')
let weather_temprature = document.querySelector('.weather_temprature')
let min = document.querySelector('.min')
let max = document.querySelector('.max')
let feelsLike = document.getElementById('feelsLike')
let humidity = document.getElementById('humidity')
let windSpeed = document.getElementById('wind')
let pressure = document.getElementById('pressure')
let theCityNameis
let theme = document.querySelector('.theme')
let dark = document.querySelector('.dark')
let light = document.querySelector('.light')

//getting country full name from its code

const generateCountryName = (code) => {
    return new Intl.DisplayNames([code], { type: 'region' }).of(code);
}

const getwindspeed = (s) => {
    return s * 3.6
}

let theCityName = "mumbai"

const getWeatherData = async () => {
    // api url
    const weatherAPI_url = `https://api.openweathermap.org/data/2.5/weather?q=${theCityName}&units=metric&appid=a5518e6d8640c09e4a18003b8e9d533d`;


    try {
        const res = await fetch(weatherAPI_url)
        const data = await res.json()
        // console.log(data);
        const { main, name, sys, weather, wind } = data;

        city.innerText = `${name}, ${generateCountryName(sys.country)}`
        weather_forcast.innerHTML = weather[0].main
        weather_temprature.innerHTML = `${main.temp.toFixed()}&deg<sup>c</sup>`
        weather_icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png"></img>`
        min.innerHTML = `<b>Min: ${main.temp_min.toFixed()}&deg;</b>`;
        max.innerHTML = `<b>Max: ${main.temp_max.toFixed()}&deg;</b>`
        feelsLike.innerHTML = `${main.feels_like.toFixed()}&deg;`
        humidity.innerHTML = `${main.humidity}&percnt;`
        const speedofWind = wind.speed
        windSpeed.innerHTML = `${getwindspeed(speedofWind).toFixed(2)} km/h`
        pressure.innerHTML = `${main.pressure} hPa`

    } catch (error) {
        console.log(error);
        reportBox.style.display = "none"
        moreInfo.style.display = "none"
        document.querySelector('.errorMsgbox').style.display = "flex"
        errorShowing.innerHTML = `We couldn't locate <b>'${theCityName}'</b>, Try another`
    }
}

document.body.addEventListener('load', getWeatherData())
inputs.addEventListener('submit', (e) => {
    e.preventDefault()
    let searchCity = document.getElementById('searchCity')
    theCityNameis = searchCity.value
    theCityName = theCityNameis.trim()
    reportBox.style.display = "flex"
    moreInfo.style.display = "flex"
    document.querySelector('.errorMsgbox').style.display = "none"
    getWeatherData()

    searchCity.value = ""
})

searchicon.addEventListener('click', (e) => {
    e.preventDefault()
    let searchCity = document.getElementById('searchCity')
    theCityNameis = searchCity.value
    theCityName = theCityNameis.trim()
    reportBox.style.display = "flex"
    moreInfo.style.display = "flex"
    document.querySelector('.errorMsgbox').style.display = "none"
    getWeatherData()

    searchCity.value = ""
})







// theme functionings
let mode = 1

const handleThmeclick = (icon) => {
    if(mode === 1){
        dark.style.display = 'none'
        light.style.display = 'flex'
        document.body.className = 'darkTheme'
        mode = 0   
    }else if(mode === 0){
        dark.style.display = 'flex'
        light.style.display = 'none'
        document.body.className = 'lightTheme'
        mode = 1
    }
} 


theme.addEventListener('click', handleThmeclick)