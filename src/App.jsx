// App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import axios from 'axios';

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState('');

  const API_KEY = '14f9d93fa622f1edaa23787ad18e8a64';

  const handleSearch = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      const { main, weather, name } = response.data;

      const weatherInfo = {
        city: name,
        temperature: main.temp - 273.15,
        condition: weather[0].description,
        icon: weather[0].icon
      };

      setWeatherData(weatherInfo);
      setError('');
    } catch (error) {
      setWeatherData({});
      setError('City not found. Please try again.');
    }
  };

  return (
    <div className="app max-w-5xl m-auto">
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error-message">{error}</p>}
      <main className=' w-full'>
        {Object.keys(weatherData).length > 0 && <WeatherCard weatherData={weatherData} />}
      </main>
    </div>
  );
};

export default App;
