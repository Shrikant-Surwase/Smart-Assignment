import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CurrentWeatherCard = ({ weather }) => {

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Current Weather in {weather.name}
        </Typography>
        <Typography variant="body1">
          Temperature: {weather.temp} °C
        </Typography>
        <Typography variant="body1">
          Humidity: {weather.humidity} %
        </Typography>
        <Typography variant="body1">
          Wind Speed: <span className='text-green-500'>{weather.wind.speed} </span>m/s
        </Typography>
        <Typography variant="body1">
          Conditions: {weather.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeatherCard;
