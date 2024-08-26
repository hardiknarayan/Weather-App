import React,{useState} from 'react'
import axios from 'axios'






const Weather = () => {
    const [city, setCity] = useState()
    const [weather,setWeather]=useState()
    const handlechange=(e)=>{
        setCity(e.target.value)
    }
    const handleclick =()=>{
        handleweather()
        
    }
    const handleweather=async ()=>{
        try {
            const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${'48c519f5127d7f45be1dd9ae8cff8b00'}`)
            console.log(response)
            setWeather(response)
        } catch (error) {
            console.log("error is ",error)
            
        }
    }

  return (
  <>
  
  
  <div className="container">
    <h1>WEATHER REPORT</h1>
    <input  type='text' placeholder='enter the city name' value={city} onChange={handlechange}/>
    <button onClick={handleclick}>Search</button>
    {
        weather &&<>
        <div className="info">
            <h2>{weather.data.name}</h2>
            <h2>Temperature :- {(weather.data.main.temp - 273.15).toFixed(2)}°C</h2>
            <h2>Humidity :- {weather.data.main.humidity}</h2>
            <h2>Country is:-{weather.data.sys.country}</h2>
            <h2>Infomation is:-{weather.data.weather[0].description}</h2>



        </div>
        </>
    }
  </div>
  

  </>
  
  )
}

export default Weather