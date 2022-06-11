import React from 'react'
import './WeatherMain.css'
import axios from 'axios'
import { useState } from 'react' 

console.log(process.env);

const Weathermain = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data);
            })
        }
        
    }
  return (
    <div className='main'>
        <div className='search'>
            <input type="text"
             value={location}
             onChange={event => setLocation(event.target.value)}
             onKeyPress={searchLocation}
             placeholder='Enter Location' />
        </div>
        <div className='container'>
            <div className="top">
                <div className="location">
                    <p>{data.name}</p>
                </div>
                <div className="temp">
                    {data.main ? <h1>{data.main.temp.toFixed()}℉</h1> : null}
                    {/* <h1>{data.main.temp}</h1> */}
                </div>
                <div className="description">
                    {data.weather ? <p>{data.weather[0].main}</p> : null}
                    {/* <p>Clouds</p> */}
                </div>
            </div>

            {data.name !== undefined &&
                <div className="bottom">
                    <div className="feels">
                        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}℉</p> : null}
                        {/* <p className='bold'>65℉</p> */}
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                        {/* <p className='bold'>20%</p> */}
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
                        {/* <p className='bold'>12 MPH</p> */}
                        <p>Wind Speed</p>
                    </div>
                </div>
            }
            
        </div>
    </div>
  )
}

export default Weathermain