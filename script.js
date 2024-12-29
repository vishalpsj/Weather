let city = document.querySelector('.weather_city')
let date_time = document.querySelector('.date_time')
let weather_forcast = document.querySelector('.weather_forcast')
let weather_icon = document.querySelector('.weather_icon')
let weather_temprature = document.querySelector('.weather_temprature')
let min = document.querySelector('.min')
let max = document.querySelector('.max')



// trial purpose, remove it when coding
city.innerText = "Pune, India"
date_time.innerText = `${(new Date).toDateString()} - ${(new Date).toLocaleTimeString()}`
weather_forcast.innerText = "Cloudy"
weather_icon.innerHTML = `<i class="ri-cloudy-line"></i>`
weather_temprature.innerHTML = `32 <i class="ri-celsius-line"></i> ` 
min.innerHTML = `Min - 23 <i class="ri-celsius-line"></i>`
max.innerHTML = `Max - 28 <i class="ri-celsius-line"></i>`