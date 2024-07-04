import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import ForecastCard from './components/ForecastCard';
import WeatherChart from './components/WeatherChart';
import './App.css'
import axios from 'axios'
import {
  WbSunny as SunnyIcon,
  Cloud as CloudIcon,
  AcUnit as SnowIcon,
  Grain as RainIcon,
} from '@mui/icons-material';


const App = () => {
  const iconMap = {
    Clear: SunnyIcon,
    Clouds: CloudIcon,
    Snow: SnowIcon,
    Rain: RainIcon,
  };
  const [weather, setWeather] = useState({
    name: "",
    main: {
      temp: "",
      humidity: "",
      pressure: "",
      
    },
    weather: {
      description: "",
    },
    wind: {
      speed: "",
    }
   
  });
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const [input,setInput]  =useState("")

  const search = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      
      setWeather({ ...weather});
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const url1 = 'https://api.openweathermap.org/data/2.5/forecast';
      const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
      await axios
        .get(url, {
          params: {
            q: input,
            units: 'metric',
            appid: api_key,
          },
        })
        .then((res) => {
          console.log('res:', res.data);
          setWeather({
            ...weather,
            name: res.data.name,
            
              temp: res.data.main.temp,
              humidity: res.data.main.humidity,
              pressure: res.data.main.pressure,
              
            
           
              description: res.data.weather[0].description,
            
            wind: {
              speed: res.data.wind.speed,
            }
          });
        })
        .catch((error) => {
          setWeather({ data: {} });
          setInput('');
          console.log('error', error);
        });
      await axios.get(url1, {
        params: {
          q: input,
          units: 'metric',
          appid: api_key,
        },
      }).then((res) => {
        console.log('res1:', res.data);

        
        const forecastData = res.data.list.map(item => ({
          
          // date: new Date().toLocaleString(),
          date: new Date(item.dt * 1500).toLocaleDateString(),
          temperature: item.main.temp,
          weatherDescription: item.weather[0].description,
          precipitation: item.rain ? item.rain['3h'] : 0
        })).filter((item, index) => index % 5 === 0);
        setForecast(forecastData);
      })
        .catch((error) => {
          setWeather({ data: {} });
          setInput('');
          console.log('error', error);
        });
    }
  };




  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Weather Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <input
            type="text"
            className="city-search"
            placeholder="Enter City Name.."
            name="query"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyPress={search}
          />
        </Grid>
        <Grid item xs={12}>
          {error && <Typography variant="body2" color="error">{error}</Typography>}
          {weather && <CurrentWeatherCard weather={weather} />}
        </Grid>
        <Grid item xs={12}>
          {forecast.length > 0 && (
            <>
              <WeatherChart data={forecast} />
              <Grid container spacing={3}>
                {forecast.map((day, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ForecastCard forecast={day} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Grid>
        
        
      </Grid>
    </Container>
  );
};

export default App;
