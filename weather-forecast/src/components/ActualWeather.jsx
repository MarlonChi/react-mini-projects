import * as S from "../AppStyles";

const ActualWeather = ({ weather }) => {
  return (
    <S.ActualWeatherContainer>
      <h3>{weather?.name}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
        alt={weather?.weather[0].description}
      />
      <p>{weather?.main.temp}°C</p>
      <p>{weather?.weather[0].description}</p>
    </S.ActualWeatherContainer>
  );
};

export default ActualWeather;
