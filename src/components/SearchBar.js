import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        value={input}
        placeholder="Search"
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  position: relative;
  display: flex;
  justify-content: flex-start;
  color: #9c9a9a;
  margin: 1rem;
  padding: 4px;
  svg {
    font-size: 20px;
    padding: 4px;
  }

  input {
    border: none;
    font-size: 12px;
    padding: 4px;
    text-decoration: none;
    outline: none;
  }
`;

export default SearchBar;
