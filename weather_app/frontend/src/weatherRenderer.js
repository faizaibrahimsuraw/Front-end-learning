/* eslint-disable no-lone-blocks */
import React from 'react';
import cloud from './imgs/cloud.png';
import rain from './imgs/rainy.png';
import sun from './imgs/sunny.png';

export default function WeatherRenderer({weather}) {
    {if (weather.toLowerCase().search('cloud') !== -1) {
        return (
            <div className='flex gap-4 mb-4'>
                <img src={cloud} alt="cloud" className="w-12 rounded-full" />
                <p>{weather}</p>
            </div>
                )} else if (weather.toLowerCase().search('rain') !== -1) {
                return (
                    <div className='flex gap-4 mb-4'>
                        <img src={rain} alt="rain" className="w-12 rounded-full" />
                        <p>{weather}</p>
                    </div>
                )} else {
                return (
                    <div className='flex gap-4 mb-4'>
                        <img src={sun} alt="sun" className="w-12 rounded-full" />
                        <p>{weather}</p>
                    </div>
                )
                }
            }
        }
