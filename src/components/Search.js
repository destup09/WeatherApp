import React from "react";
import styled from "styled-components";
import device from "../responsive/Responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TopSection = styled.div`
  padding: 2rem 0 0 0;
  text-align: center;

  @media ${device.mobileL} {
    padding-top: 1rem;
  }
`;

const SearchInput = styled.input`
  width: 450px;
  height: 55px;
  border-radius: 50px;
  border: 2px solid white;
  padding-left: 20px;
  margin-top: 3rem;
  margin-left: -15px;
  font-size: 20px;
  background: none;
  font-weight: bold;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: white;
    font-weight: bold;
  }

  @media ${device.mobileL} {
    width: 90%;
    height: 45px;
    font-size: 16px;
    margin: 30px auto;
    margin-left: -20px;
  }
`;

const SearchIcon = styled.span`
  margin-left: -40px;
  font-size: 22px;
  cursor: pointer;
`;

function Search(props) {
  let searchIcon = (
    <FontAwesomeIcon
      onClick={props.handleSearch}
      className="search-icon"
      icon={faSearch}
    />
  );

  return (
    <TopSection>
      <h2>weather prophercy</h2>
      <SearchInput
        name="city"
        value={props.data.city}
        onChange={props.handleChange}
        onKeyUp={props.handleKeyPress}
        placeholder="Podaj nazwę miasta"
      />
      <SearchIcon>{searchIcon}</SearchIcon>
    </TopSection>
  );
}

export default Search;
