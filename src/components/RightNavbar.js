import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Joblist } from "../JobList";
import JobDetails from "./JobDetails";

function RightNavbar() {
  const [jobs, setJobs] = useState(Joblist);
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const api = await fetch(
      `https://api.stackexchange.com/2.3/questions?page=1&pagesize=5&order=desc&sort=activity&site=stackoverflow`
    );
    const data = await api.json();
    setQuestionsList(data.items);
  };

  return (
    <MainContainer>
      <JobSection>
        <h2>Looking out for</h2>
        <Jobs>
          {jobs.map((job) => {
            return (
              <React.Fragment key={job.id}>
                <JobDetails {...job} />
              </React.Fragment>
            );
          })}
        </Jobs>
        <SLink to={"/"}>View all jobs</SLink>
      </JobSection>
      <QuestionSection>
        <h2>Network Questions</h2>
      </QuestionSection>
      <QuestionList>
        {questionsList.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <SLink to={item.link}>{item.title}</SLink>
            </React.Fragment>
          );
        })}
      </QuestionList>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  grid-area: rightNavBar;
  height: auto;
  position: relative;
  right: 0rem;
  margin-right: 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0rem;
  background-color: rgba(236, 236, 236, 0.2);
  padding: 2.5rem;
  align-items: flex-start;
`;
const JobSection = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;

  h2 {
    color: #70706c;
    font-weight: 500;
    margin-top: 1rem;
  }
`;
const Jobs = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-top: 2.5rem;
  padding: 0rem;
  margin-bottom: 1rem;
`;
const SLink = styled(NavLink)`
  color: #24a6c7;
  font-size: 12px;
  margin-left: 2.5rem;
  text-decoration: none;
  padding: 4px;
`;

const QuestionSection = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;

  h2 {
    color: #70706c;
    font-weight: 500;
    margin-top: 3rem;
  }
`;
const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
export default RightNavbar;
