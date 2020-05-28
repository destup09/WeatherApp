import React from "react";
import styled from "styled-components";
import device from "../responsive/Responsive";
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
  height: auto;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  font-size: 1rem;
  padding: 4.5rem 0 4.5rem 0;

  @media ${device.laptopL} {
    padding: 3rem 0 3rem 0;
  }

  @media ${device.mobileL} {
    padding: 1rem 0 1rem 0;
    font-size: 10px;
  }
`;

const InfoPanel = styled.div`
  text-align: left;

  @media ${device.laptop} {
    font-size: 0.8rem;
  }

  @media ${device.mobileL} {
    width: 50%;
    padding-bottom: 20px;
  }
`;

const MainWeather = styled.div`
  text-align: center;
  display: flex;

  @media ${device.laptop} {
    font-size: 0.8rem;
  }

  @media ${device.mobileL} {
    width: auto;
    text-align: right;
    padding-bottom: 20px;
  }
`;

const Desc = styled.div`
  padding: 1rem;

  @media ${device.mobileL} {
    padding: 0.3rem;
  }
`;

const TempWrapper = styled.div`
  display: flex;
  align-content: flex-end;
  align-items: center;
  margin: 0;
  font-size: 26px;

  @media ${device.mobileL} {
    font-size: 16px;
  }
`;

const WeatherInfo = styled.div`
  text-align: left;

  @media ${device.laptop} {
    font-size: 0.8rem;
  }

  @media ${device.mobileL} {
    font-size: 0.7rem;
    padding: 1rem 0 3rem 0.5rem;
    width: 100%;
    border-top: 2px solid white;
  }
`;

const MainIcon = styled.span`
  font-size: 80px;
  padding-right: 25px;

  @media ${device.laptop} {
    font-size: 3.5rem;
  }

  @media ${device.mobileL} {
    font-size: 40px;
    padding-right: 10px;
  }
`;

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
        <Desc>
          <TempWrapper>
            <MainIcon>{weatherIcon}</MainIcon>
            <h1>{Math.floor(weather.main.temp)}°</h1>
          </TempWrapper>

          <h1>{weatherDesc}</h1>
        </Desc>
      </MainWeather>

      <WeatherInfo>
        <h2 style={infoStyle}>Wiatr: {weather.wind.speed} km/h</h2>
        <h2 style={infoStyle}>Deszcz: {weather.main.humidity}%</h2>
        <h2 style={infoStyle}>Ciśnienie: {weather.main.pressure} hpa</h2>
      </WeatherInfo>
    </TodayWeatherWrapper>
  );
}

export default TodayWeather;
