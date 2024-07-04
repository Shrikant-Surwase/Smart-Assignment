// import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import {
  WbSunny as SunnyIcon,
  Cloud as CloudIcon,
  AcUnit as SnowIcon,
  Grain as RainIcon,
} from '@mui/icons-material';

const iconMap = {
  Clear: SunnyIcon,
  Clouds: CloudIcon,
  Snow: SnowIcon,
  Rain: RainIcon,
};

const ForecastCard = ({ forecast }) => {
  const WeatherIcon = iconMap[forecast.weatherMain] || CloudIcon;

  return (
    <Card sx={{ margin: 2, backgroundColor: '#f0f4f8' }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <WeatherIcon fontSize="large" style={{ marginRight: 10 }} />
          <Typography variant="h6" component="div">
            {forecast.date}
          </Typography>
        </Box>
        <Typography variant="body1" color="textSecondary">
          Temperature: {forecast.temperature} °C
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Conditions: {forecast.weatherDescription}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Precipitation: {forecast.precipitation} mm
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
