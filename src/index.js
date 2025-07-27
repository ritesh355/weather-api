// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Route: GET /weather?city=cityname
app.get('/weather', async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: 'City name is required as ?city=delhi' });
  }

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    const data = response.data;

    const weather = {
      city: data.name,
      temperature: data.main.temp + '°C',
      description: data.weather[0].description,
      humidity: data.main.humidity + '%',
      wind: data.wind.speed + ' m/s',
    };

    res.json(weather);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data. Check city name or API key.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

