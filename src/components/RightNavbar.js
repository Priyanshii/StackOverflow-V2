import React, { useState } from "react";
import styled from "styled-components";
import { Joblist } from "../JobList";
import JobDetails from "./JobDetails";

function RightNavbar() {
  const [jobs, setJobs] = useState(Joblist);
  return (
    <MainContainer>
      <JobSection>
        <h2>Looking out for</h2>
        <Jobs>
          {jobs.map((job) => {
            return (
              <>
                <JobDetails key={job.id} {...job} />
              </>
            );
          })}
        </Jobs>
      </JobSection>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 30rem;
  height: auto;
  position: absolute;
  top: 4rem;
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
const JobSection = styled.div`
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
  padding: 1rem;
`;
export default RightNavbar;
