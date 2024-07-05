import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CurrentWeatherCard = ({ weather }) => {

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Current Weather in <span className='text-bold text-3xl font-serif text-blue-500'>{weather.name}</span>
        </Typography>
        <Typography variant="body1">
          Temperature: <span className='text-bold font-serif'>{weather.temp}</span> °C
        </Typography>
        <Typography variant="body1">
          Humidity: <span className='font-mono'>{weather.humidity }</span> %
        </Typography>
        <Typography variant="body1">
          Wind Speed: <span className='text-fold font-mono'>{weather.speed} </span>m/s
        </Typography>
        <Typography variant="body1">
          Conditions: <span className='text-bold font-mono'>{weather.description}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeatherCard;
