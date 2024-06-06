import React from 'react';
import './App.css';
import queryWeatherOfPlace from "./query";
import WeatherComponents from './weatherComponents';
import backgroundImage from './imgs/background_2.jpg';

function App() {
  let [query, setQuery] = React.useState('')
  let [data, setData] = React.useState(null)
  let [placeError, setPlaceError] = React.useState(null)

  function handleChange(e) {
    setQuery(e.target.value)
  }

  async function parseData(event) {
    if (event.type !== 'click'){
      if (event.key !== 'Enter') {
        return;
      }
  }
    try{
      setData(await queryWeatherOfPlace(query));
    }
    catch (error) {
      setPlaceError(error.message);
    }
  }
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh'
  };

  return (
    <div className="bg-center bg-cover h-screen flex justify-center overflow-scroll" style={styles}>
      <div className='h-10'>
        <h1 className='px-12 py-24 md:p-32 font-semibold text-2xl md:text-5xl text-pretty text-blue-300'>HELLO THERE 👋,  WELCOME 👻</h1>
        <div className='flex gap-4  flex-col md:flex-row'>
          <div className='flex bg-white rounded-full w-5/6 mx-auto h-12 justify-center items-center overflow-scroll flex-wrap flex-grow'>
            <input value={query} onChange={handleChange} placeholder='enter place to search' onKeyPress={parseData} className='w-11/12 pl-8 border-spacing-0 h-6 outline-none whitespace-pre-line'></input>
          </div>
          <button className='bg-gradient-to-tr from-blue-400 to-blue-700 text-white rounded-full lg:w-1/6 mx-auto w-3/6 h-12 font-semibold hover:bg-gradient-to-tr hover:from-blue-700 hover:to-blue-400 hover:border' onClick={parseData}>Search</button>
        </div>
        {data && <div className='mt-3 font-bold italic text-4xl text-blue-600 mb-6 ml-4'>{data.name}</div>}
        {data && <WeatherComponents props={data} />}
        {placeError && <div className='mt-3 font-bold italic text-4xl text-red-900 mb-6 ml-4'>{placeError}</div>}
      </div>
    </div>
  );
}

export default App;
