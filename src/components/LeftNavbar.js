import React from "react";
import styled from "styled-components";
import { BiQuestionMark, BiBookmark } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { HiOutlineTag, HiOutlineSpeakerphone } from "react-icons/hi";
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
        <SLink to={"/"}>
          <BiQuestionMark />
          <span>QUESTIONS</span>
        </SLink>

        <SLink to={"/"}>
          <IoBagOutline />
          <span>JOBS</span>
        </SLink>

        <SLink to={"/"}>
          <GrDocumentText />
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
  position: relative;
  top: 0;
  left: 0;
  width: 6rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  border-right: 1px solid transparent;
  box-shadow: 3px 0px 2px -2px rgba(0, 0, 0, 0.2);
`;
const Logo = styled.a`
  padding: 0;
  width: 6rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 5px;
  cursor: pointer;
  padding: 2px 2px;
  padding-left: 12px;
  text-align: center;
  border-left: 1px solid white;
  transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  svg {
    color: black;
    font-size: 0.4rem;
  }
  span {
    text-transform: uppercase;
    text-decoration: none;
    font-size: 6px;
    font-family: "Joan", serif;
    color: black;
    padding-left: 6px;
    text-align: center;
    letter-spacing: 0.1px;
    font-weight: 400;

    sup {
      color: #f8aa19;
      font-size: 4px;
      font-weight: bold;
    }
  }

  &:hover {
    border-left: 1px solid #f8aa19;
    box-shadow: 4px 0px 3px -3px #f8aa19 inset;
    svg {
      color: orange;
    }
    span {
      font-weight: bold;
    }
  }
`;
export default LeftNavbar;
