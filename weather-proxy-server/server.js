const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const PORT = 3000;

app.get('/api/weather', async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: 'City parameter is required' });
    }

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
