import React from "react";
import WeatherApp from "./WeatherApp";
import styled from "styled-components";
import device from "../responsive/Responsive";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("background.png");
  padding: 0 8rem 0 8rem;
  background-size: cover;
  background-repeat: no-repeat;

  @media${device.laptopL}{
    overflow-y: scroll;
    padding: 0 4rem 0 4rem;
  }


  @media ${device.mobileL} {
    text-align: center;
    padding: 1rem;
    
  }

  @media ${device.mobileS} {
    text-align: center;
    padding: 0;
  }

`;

function App() {
  return (
    <Wrapper>
      <WeatherApp />
    </Wrapper>
  );
}

export default App;
