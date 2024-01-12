import React from 'react';

export default function WeatherCard({ weatherData }) {

    return (
        <div className="weather-card flex w-full md:w-3/4 m-auto gap-4 justify-center items-center">
            <div className=' p-4 m-4 border border-gray-400 rounded-xl flex flex-row'>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`} alt="" className=' h-40 w-40' />
                </div>
                <div className=' w-28 flex flex-col justify-center items-center'>
                    <h2>{weatherData.city}</h2>
                    <p>{weatherData.temperature.toFixed(1)}°C</p>
                    <p>{weatherData.condition}</p>
                </div>
            </div>
        </div>
    )
}
