import React from "react";
import { IoMdHelpBuoy } from "react-icons/io";
// import { HiComputerDesktop } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import SearchBar from "./SearchBar";
import styled from "styled-components";
function Header() {
  return (
    <Container>
      <SearchBar />
      <IoMdHelpBuoy />
      <span>Help</span>
      {/* <HiComputerDesktop /> */}
      <span>Tour</span>
      <RiArrowDropDownLine />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0rem;
  right: 0rem;
  height: 3rem;
`;

export default Header;
