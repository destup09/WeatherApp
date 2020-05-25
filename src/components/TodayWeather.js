import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

const TodayWeatherWrapper = styled.div`
  display: flex;
  height: 350px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const InfoPanel = styled.div`
  text-align: left;
`;

const WeatherInfo = styled.div`
  text-align: left;
`;

const MainWeather = styled.div``;

const infoStyle = {
  marginTop: "10px",
  textTransform: "capitalize",
};

function TodayWeather(props) {
  const weather = props.data.weatherData;
  let currentDate = new Date();

  function getDayName(currentDate, locale) {
    var date = new Date(currentDate);
    return date.toLocaleDateString(locale, { weekday: "long" });
  }

  const dayName = getDayName(currentDate, "pl-PL");
  const dayNumeric = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });

  let main = weather.weather[0].main;
  let weatherDesc = null;
  let weatherIcon = null;

  if (main === "Thunderstorm") {
    weatherDesc = "Burza";
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (main === "Drizzle") {
    weatherDesc = "Mrzawka";
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (main === "Rain") {
    weatherDesc = "Deszcz";
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (main === "Snow") {
    weatherDesc = "Śnieg";
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (main === "Clear") {
    weatherDesc = "Słonecznie";
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (main === "Clouds") {
    weatherDesc = "Zachmurzenie";
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherDesc = "Mgła";
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }

  return (
    <TodayWeatherWrapper>
      <InfoPanel>
        <h1 style={infoStyle}>
          {weather.name}, {weather.sys.country}
        </h1>
        <h2 style={infoStyle}>{dayName}</h2>
        <h2 style={infoStyle}>
          {dayNumeric} {month}
        </h2>
      </InfoPanel>

      <MainWeather>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "80px" }}>{weatherIcon}</span>
          <h1
            style={{ textAlign: "center", fontSize: "60px", padding: "15px" }}
          >
            {Math.floor(weather.main.temp)}°
          </h1>
        </div>
        <h1>{weatherDesc}</h1>
      </MainWeather>

      <WeatherInfo>
        <h2>Wiatr: {weather.wind.speed} km/h</h2>
        <h2>Deszcz: {weather.main.humidity}%</h2>
        <h2>Ciśnienie: {weather.main.pressure} hpa</h2>
      </WeatherInfo>
    </TodayWeatherWrapper>
  );
}

export default TodayWeather;
