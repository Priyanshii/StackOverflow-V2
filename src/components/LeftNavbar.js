import React from "react";
import styled from "styled-components";
import { BiQuestionMark, BiBookmark } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import {
  HiOutlineTag,
  HiOutlineSpeakerphone,
  HiOutlineDocumentText,
} from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { FaStackExchange, FaInbox } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function LeftNavbar() {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo-stackoverflow.svg" alt="StackOverflow" />
      </Logo>
      <NavMenu>
        <SLink to={"/questions/interesting"}>
          <BiQuestionMark />
          <span>QUESTIONS</span>
        </SLink>

        <SLink to={"/"}>
          <IoBagOutline />
          <span>JOBS</span>
        </SLink>

        <SLink to={"/"}>
          <HiOutlineDocumentText />
          <span>
            DOCUMENTATION
            <sup>NEW</sup>
          </span>
        </SLink>

        <SLink to={"/"}>
          <HiOutlineTag />
          <span>TAGS</span>
        </SLink>

        <SLink to={"/"}>
          <AiOutlineUser />
          <span>USERS</span>
        </SLink>

        <SLink to={"/"}>
          <BiBookmark />
          <span>BADGES</span>
        </SLink>

        <SLink to={"/"}>
          <HiOutlineSpeakerphone />
          <span>ASK QUESTION</span>
        </SLink>

        <SLink to={"/"}>
          <FaStackExchange />
          <span>STACK EXCHANGE</span>
        </SLink>

        <SLink to={"/"}>
          <FaInbox />
          <span>INBOX</span>
        </SLink>
      </NavMenu>
    </Nav>
  );
}

const Nav = styled.nav`
  grid-area: leftNavBar;
  position: relative;
  top: 0;
  left: 0;
  /* width: fit-content; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  border-right: 1px solid transparent;
  box-shadow: 7px 0px 7px -4px rgba(0, 0, 0, 0.2);

  /* @media (max-width: 768px) {
    display: none;
  } */
`;
const Logo = styled.a`
  padding: 0;
  width: 9rem;
  height: auto;
  font-size: 0;
  text-decoration: none;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 1rem;
  padding-top: 1rem;
  width: 100%;
`;

const SLink = styled(NavLink)`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0.4rem;
  cursor: pointer;
  padding: 4px 4px;
  padding-left: 20px;
  border-left: 1px solid white;
  transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  svg {
    color: #7c7a7a;
    font-size: 0.8rem;
  }
  span {
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.6rem;
    color: #7c7a7a;
    padding-left: 10px;
    vertical-align: middle;
    letter-spacing: 0.1px;
    font-weight: 600;
    height: auto;

    sup {
      color: #df7008;
      font-size: 9px;
      font-weight: 500;
    }
  }

  &:hover {
    border-left: 2px solid #df7008;
    box-shadow: 4px 0px 4px -4px #df7008 inset;
    svg {
      color: #df7008;
    }
    span {
      font-weight: bolder;
      color: black;
    }
  }
`;
export default LeftNavbar;
