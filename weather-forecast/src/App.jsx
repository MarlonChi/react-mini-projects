import { useState, useEffect } from "react";
import axios from "axios";

import ActualWeather from "./components/ActualWeather";
import Forecast from "./components/Forecast";
import Search from "./components/Search";

import * as S from "./AppStyles";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const apiKey = "9eae7e50927ac661bda09a1cdfb92265";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&units=metric&lang=pt_br`;
      const response = await axios.get(url);
      setCity(response.data.name);
      setWeather(response.data);
    });
  }, []);

  const getWeather = async () => {
    try {
      const responseWeather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      const responseForecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      setWeather(responseWeather.data);
      setForecast(responseForecast.data.list.slice(0, 5));
    } catch (err) {
      console.log("Erro ao buscar clima: ", err);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <S.WeatherContainer>
      <S.Title>Condições Climáticas</S.Title>
      <Search city={city} setCity={setCity} getWeather={getWeather} />
      {weather && <ActualWeather weather={weather} />}
      {forecast.length > 0 && <Forecast forecasts={forecast} />}
    </S.WeatherContainer>
  );
}

export default App;
