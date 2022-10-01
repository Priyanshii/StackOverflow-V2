import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const QuestionsCategory = () => {
  return (
    <List>
      <SLink to={"/questions/interesting"}>interesting</SLink>
      <SLink to={"/questions/featured"}>featured</SLink>
      <SLink to={"/questions/hot"}>hot</SLink>
      <SLink to={"/questions/week"}>week</SLink>
      <SLink to={"/questions/month"}>month</SLink>
    </List>
  );
};
const List = styled.section`
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
  padding: 2rem;
  height: auto;
`;
const SLink = styled(NavLink)`
  padding: 4px 6px 4px 6px;
  border: 1px solid transparent;
  border-radius: 15px;
  text-decoration: none;
  font-size: 14px;
  color: #9c9a9a;
  margin: 2px 12px;
  height: auto;

  &.active {
    background-color: orange;
    color: white;
  }
`;
export default QuestionsCategory;
