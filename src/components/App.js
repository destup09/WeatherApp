import React from "react";
import WeatherApp from "./WeatherApp";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("background.png");
  padding: 0 170px 0 170px;
`;

function App() {
  return (
    <Wrapper>
      <WeatherApp />
    </Wrapper>
  );
}

export default App;
