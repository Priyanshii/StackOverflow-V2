import React from "react";
import styled from "styled-components";
const Question = ({
  question_id,
  is_answered,
  view_count,
  answer_count,
  score,
  creation_date,
  last_activity_date,
  tags,
  title,
  owner,
  link,
}) => {
  return (
    <Wrapper>
      <LeftSection>
        <Title>{title}</Title>
        <Tags>
          {tags.map((tag) => {
            return <span>{tag}</span>;
          })}
        </Tags>

        <Owner>
          <span>{owner.display_name}</span>
          <span>{owner.reputation}</span>
        </Owner>
      </LeftSection>
      <RightSection>
        <span>{score}</span>
        <span>{answer_count}</span>
        <span>{view_count}</span>

        <div></div>
        <div></div>
      </RightSection>
    </Wrapper>
  );
};

const Title = styled.div``;
const LeftSection = styled.div``;
const Wrapper = styled.div``;
const RightSection = styled.div``;
const Tags = styled.div``;
const Owner = styled.div``;
export default Question;
