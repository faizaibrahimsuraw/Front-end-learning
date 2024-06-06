import React from "react";
import location from './imgs/location.png';
import visibility from './imgs/visibility.png'
import humidity from './imgs/humidity.png'
import temperature from './imgs/temperature.jpeg';
import wind from './imgs/wind.jpeg'
import airPressure from './imgs/air_pressure.jpeg'
import WeatherRenderer from './weatherRenderer';

export default function WeatherComponents (props) {
    const data = props.props;
    return (
    <div className='w-5/6 mx-auto items-start justify-start flex-wrap grid  flex-grow sm:grid-cols-2 md:grid-cols-3  mt-3 gap-5 overflow-scroll text-blue-400 font-semibold italic'>
       <div>
        <WeatherRenderer weather={data.weather[0].main} />
       </div>
       <div className="location flex gap-4 mb-4">
        <img src={location} alt="location" className="w-12 rounded-full" />
        <p>lon: {data.coord.lon} <br /> lat: {data.coord.lat}</p>
       </div>
       <div className="location flex gap-4 mb-4">
        <img src={temperature} alt="temperature" className="w-12 rounded-full" />
        <p>{data.main.temp} F</p>
       </div>
       <div className="location flex gap-4 mb-4">
        <img src={wind} alt="wind" className="w-12 rounded-full" />
        <p>{data.wind.speed}m/s</p>
       </div>
       <div className="location flex gap-4 mb-4">
        <img src={airPressure} alt="airPressure" className="w-12 rounded-full" />
        <p>{data.main.pressure} Pa</p>
       </div>
       <div className="location flex gap-4 mb-4">
        <img src={humidity} alt="humidity" className="w-12 rounded-full" />
        <p>{data.main.humidity}%</p>
       </div>
       <div className="location flex gap-4 mb-4">
        <img src={visibility} alt="visibility" className="w-12 rounded-full" />
        <p>{data.visibility}m</p>
       </div>
    </div>
    );
}