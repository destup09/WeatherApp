import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TopSection = styled.div`
  padding: 50px 0 15px 0;
  text-align: center;
`;

const SearchInput = styled.input`
  width: 450px;
  height: 55px;
  border-radius: 50px;
  border: 2px solid white;
  padding-left: 20px;
  margin-top: 80px;
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
