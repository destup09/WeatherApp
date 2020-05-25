import React from "react";
import Search from "./Search";
import TodayWeather from "./TodayWeather";
import WeatherCard from "./WeatherCard";

class WeatherApp extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "lomza",
      weatherData: null,
      forecastData: [],
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleSearch();
    }
  };

  handleSearch() {
    let APIkey = "c2eab743b22a08aa8f5890940cc984a8";
    let forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&APPID=${APIkey}&units=metric`;
    let weather = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${APIkey}&units=metric`;

    fetch(forecast)
      .then((response1) => {
        if (response1.ok) {
          return response1.json();
        }
        throw Error(response1.statusText);
      })
      .then((response1) => {
        const { list } = response1;
        console.log(response1);

        this.setState({
          forecastData: list,
          error: false,
        });

        console.log(this.state.error);
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });

    //////////////////////////////

    fetch(weather)
      .then((response2) => {
        if (response2.ok) {
          return response2.json();
        }
        throw Error(response2.statusText);
      })
      .then((response2) => {
        this.setState({
          weatherData: response2,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <Search
            handleSearch={this.handleSearch}
            handleKeyPress={this.handleKeyPress}
            handleChange={this.handleChange}
            data={this.state}
          />
          <h2 style={{ textAlign: "center", marginTop: "150px" }}>
            Nie znaleziono takiej miejscowości
          </h2>
        </div>
      );
    }

    return (
      <div>
        <Search
          handleSearch={this.handleSearch}
          handleKeyPress={this.handleKeyPress}
          handleChange={this.handleChange}
          data={this.state}
        />

        {this.state.weatherData !== null ? (
          <TodayWeather data={this.state} />
        ) : null}

        <div
          style={{
            visibility: this.state.weatherData === null ? "hidden" : "visible",
          }}
          className="weather-cards-wrapper"
        >
          <WeatherCard data={this.state} />
        </div>
      </div>
    );
  }
}

export default WeatherApp;
