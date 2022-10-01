import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import QuestionsCategory from "../components/QuestionsCategory";
import Question from "../components/Question";

function QuestionsContainer() {
  const [questionsList, setQuestionsList] = useState([]);
  const params = useParams();

  useEffect(() => {
    getQuestions();
  }, [params.type]);

  const getQuestions = async () => {
    const api = await fetch(
      `https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow`
    );
    const data = await api.json();
    setQuestionsList(data.items);
  };

  return (
    <Container>
      <Header>Questions</Header>
      <QuestionsCategory />
      <QuestionCard>
        {questionsList.map((item) => {
          return <Question key={item.id} {...item} />;
        })}
      </QuestionCard>
      <footer>
        <h4>Looking for more?</h4>
        <p>
          Browse the complete list of questions, or popular tags.Help us answer
          unanswered questions.
        </p>
      </footer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
`;
const Header = styled.header`
  font-size: 20px;
  font-weight: 500;
  color: #9c9a9a;
  padding: 2rem;
`;

const QuestionCard = styled.div`
  display: flex;
`;
export default QuestionsContainer;
