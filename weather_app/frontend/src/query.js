import axios from 'axios';
/**
 * this module contains a function that is used to query the weather api
 */
export default async function queryWeatherOfPlace(place) {
  return new Promise((resolve, reject) => {
    try {
      if (!place || place.length === 0) {
        place = 'Nairobi';
      }

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=278ed619f00f0b61b769cfc96676e8af`)
        .then(response => {
          if (response.status !== 200) {
            reject(new Error('Place not found'));
          }
          resolve(response.data);
        })
        .catch(error => {
          <div>Unable to resolve request</div>
        });
    } catch (error) {
      reject(error);
    }
  });
};

