# Weather Webpage

This is a simple weather webpage that uses the OpenWeatherMap API to display real-time weather information based on the search query.

## Features

- **Current Weather**: Displays the current temperature, humidity, and weather conditions.
- **Search by City**: Allows the user to search for weather information by entering a city name.
- **Temperature Unit Toggle**: Celcius.
- **Fully responsive**

## Demo

URL : https://vishalpsj.github.io/Weather

## Technologies Used

- **HTML**: For the webpage structure.
- **CSS**: For styling the webpage and making it responsive.
- **JavaScript**: For handling user interactions, making API calls, and updating the UI dynamically.
- **OpenWeatherMap API**: Provides weather data based on user input or geolocation.

## Setup Instructions

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/vishalpsj/Weather.git
   ```

2. Navigate to the project folder:
   ```bash
   cd Weather
   ```

3. Open the `index.html` file in your browser to see the webpage in action.

## API Key

To use the OpenWeatherMap API, you will need an API key.
The API is totally free so you can create your own

1. Go to [OpenWeatherMap](https://openweathermap.org/).
2. Sign up for an account and get your API key.
3. Replace the api key in the JavaScript code with your actual API key.

## Example of API call
```javascript
const apiKey = 'YOUR_API_KEY';
const city = 'London';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
```

## Contribution

Feel free to fork this repository and contribute to it. You can submit a pull request if you have any suggestions or improvements.

