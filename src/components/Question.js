import React from "react";
import styled from "styled-components";
import { BiLike, BiComment } from "react-icons/bi";
import { FaRegEye, FaTransgender } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Question = ({
  question_id,
  is_answered,
  view_count,
  answer_count,
  score,
  creation_date,
  tags,
  title,
  owner,
  link,
}) => {
  const d = new Date();
  let time = d.getTime();

  const CreationTime = time / 1000 - creation_date;
  console.log(is_answered);
  return (
    <Wrapper>
      <LeftSection>
        <Slink to={{ pathname: link, target: "_blank" }}>{title}</Slink>
        <TagSection>
          {tags.map((item) => {
            return (
              <>
                <span>{item}</span>
              </>
            );
          })}
        </TagSection>
        <BasicInfo>
          <p>asked {Math.floor(CreationTime / 1000)}secs ago</p>
          <div>
            <span>{owner.display_name}</span>
            <span>{owner.reputation}</span>
          </div>
        </BasicInfo>
      </LeftSection>
      <RightSection>
        <Info>
          <span>{score}</span>
          <span>votes</span>
          <BiLike />
        </Info>
        <AnswerInfo className={is_answered ? "active" : ""}>
          <span>{answer_count}</span>
          <span>answers</span>
          <BiComment />
        </AnswerInfo>
        <Info>
          <span>{view_count}</span>
          <span>views</span>
          <FaRegEye />
        </Info>
      </RightSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;
const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
`;
const Slink = styled(NavLink)`
  font-weight: 500;
  color: #24a6c7;
  font-size: 14px;
  padding: 2px;
  margin-bottom: 0.4rem;
  text-decoration: none;
`;
const TagSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.4rem;
  max-height: fit-content;
  padding: 2px;
  span {
    font-size: 12px;
    border: 1px solid #9c9b9b;
    border-radius: 10px;
    padding: 1px 4px 1px;
    margin: 4px;
    background-color: white;
    color: #9c9b9b;
    height: fit-content;
    vertical-align: middle;
  }
`;
const BasicInfo = styled.div`
  font-size: 12px;
  margin-bottom: 0.4rem;
  display: flex;
  padding: 2px;
  vertical-align: bottom;
  margin: 4px;
  p {
    color: #9c9b9b;
  }
  div {
    margin-left: 4px;
  }
  span {
    margin-left: 2px;
  }
`;
const RightSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 2px;
  height: fit-content;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  padding: 10px;
  margin: 4px;
  color: #7c7c7c;
  span {
    padding-bottom: 10px;
  }
  svg {
    padding-bottom: 10px;
  }
`;
const AnswerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  padding: 10px;
  margin: 4px;
  color: #7c7c7c;
  span {
    padding-bottom: 10px;
  }
  svg {
    padding-bottom: 10px;
  }
  &.active {
    color: green;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
export default Question;
