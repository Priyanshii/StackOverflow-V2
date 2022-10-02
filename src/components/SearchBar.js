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
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  position: relative;
  display: flex;
`;

export default SearchBar;
