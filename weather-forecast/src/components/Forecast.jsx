import * as S from "../AppStyles";

const Forecast = ({ forecasts }) => {
  return (
    <S.ForecastContainer>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {forecasts.map((forecast) => (
          <li key={forecast?.dt}>
            <img
              src={`http://openweathermap.org/img/wn/${forecast?.weather[0].icon}.png`}
              alt={forecast?.weather[0].description}
            />
            {forecast?.main.temp} °C - {forecast?.weather[0].description}
          </li>
        ))}
      </ul>
    </S.ForecastContainer>
  );
};

export default Forecast;
