import React from "react";
import styled from "styled-components";
import FadeIn from "./FadeIn";

const CityNotFound = styled.div`
  font-size: 30px;
  margin-top: 200px;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  position: relative;
  top: 30px;
  animation: ${FadeIn} 0.7s forwards;
`;

const NotFound = () => {
  return <CityNotFound>Nie znaleziono podanej miejscowości</CityNotFound>;
};

export default NotFound;
