import React from "react";
import { IoMdHelpBuoy } from "react-icons/io";
import { BiDesktop } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import SearchBar from "./SearchBar";
import styled from "styled-components";
function Header() {
  return (
    <HeaderContainer>
      <SearchBar />
      <HeaderRight>
        <IoMdHelpBuoy />
        <span>Help</span>
        <BiDesktop />
        <span>Tour</span>
        <RiArrowDropDownLine />
      </HeaderRight>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  grid-area: headerArea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0rem;
  height: 3rem;
  width: 100%;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  font-size: 14px;
  color: #9c9a9a;
  svg {
    margin-left: 12px;
  }
  span {
    margin-left: 2px;
    height: auto;
  }
`;

export default Header;
