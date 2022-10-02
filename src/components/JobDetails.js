import React from "react";
import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import { GoGlobe } from "react-icons/go";
const JobDetails = ({
  Role,
  CompanyName,
  Location,
  SalaryEstimate,
  type,
  tags,
}) => {
  return (
    <Card>
      <h4>{Role}</h4>
      <h5>{CompanyName}</h5>
      <p>{SalaryEstimate}</p>
      <JobLocation>
        <City>
          <IoLocationSharp />
          <span>{Location}</span>
        </City>
        <JobType>
          <GoGlobe />
          <span>{type}</span>
        </JobType>
      </JobLocation>
      <TagSection>
        {tags.map((item) => {
          return (
            <>
              <span>{item}</span>
            </>
          );
        })}
      </TagSection>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  h4 {
    font-weight: 500;
    color: #24a6c7;
    font-size: 14px;
    padding: 2px;
  }
  h5 {
    font-weight: 500;
    color: #868585;
    padding: 2px;
    font-size: 13px;
  }
  p {
    font-size: 12px;
    padding: 2px;
    color: #868585;
  }

  ::after {
    content: "";
    width: 100%;
    height: 0px;
    border: 0.1px solid #e6e0e0;
    margin: 20px 0px;
  }

  :last-child:after {
    content: "";
    width: 100%;
    height: 0px;
    border: 0px solid #e6e0e0;
  }
`;
const JobLocation = styled.section`
  display: flex;
  align-items: flex-start;
  color: #9c9b9b;
`;

const City = styled.div`
  font-size: 12px;
  padding: 2px;
  display: flex;
  align-items: center;

  svg {
    font-size: 12px;
  }
  span {
    padding-left: 2px;
  }
`;

const JobType = styled.div`
  font-size: 12px;
  padding: 2px;
  padding-left: 8px;
  display: flex;
  align-items: center;
  svg {
    font-size: 12px;
  }
  span {
    padding-left: 2px;
  }
`;
const TagSection = styled.section`
  padding: 2px;
  span {
    font-size: 12px;
    border: 1px solid #9c9b9b;
    border-radius: 10px;
    padding: 1px 4px;
    padding-bottom: 1px;
    margin: 4px;
    background-color: white;
    color: #9c9b9b;
  }
`;
export default JobDetails;
