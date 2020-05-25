import React from "react";
import styled from "styled-components";

const WeatherCards = styled.div`
  margin: 15px;
  height: 180px;
  min-width: 140px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  text-align: center;
`;

function WeatherCard(props) {
  return props.data.forecastData.map((i) => {
    let time = i.dt_txt.slice(11, 16);
    let dateApi = i.dt_txt.split(" ")[0];
    let dateArr = [];
    let dayNumeric;
    let monthNumeric;
    let day = getDayName(dateApi, "pl-PL");
    let img = `https://openweathermap.org/img/w/${i.weather[0].icon}.png`;
    let temp = Math.floor(i.main.temp);

    function toNormalDate() {
      dateArr = dateApi.split("-");
      dayNumeric = dateArr[2];
      monthNumeric = dateArr[1];
    }
    toNormalDate();

    function getDayName(dateApi, locale) {
      const dateDay = new Date(dateApi);
      return dateDay.toLocaleDateString(locale, { weekday: "long" });
    }

    return (
      <WeatherCards>
        <h3 style={{ padding: "10px 0 5px 0" }}>{day}</h3>
        <p style={{ fontSize: "20px", padding: "0 0 5px 0" }}>
          {dayNumeric}.{monthNumeric}
        </p>
        <p>{time}</p>
        <img src={img} alt={i.weather[0].main} />
        <h3 style={{ fontSize: "20px" }}>{temp}°</h3>
      </WeatherCards>
    );
  });
}

export default WeatherCard;
