import styled from "styled-components";
import {
  TextPreset1,
  TextPreset2Light,
  TextPreset2Medium,
  TextPreset4,
  TextPreset5Regular,
} from "../components/Typography/Typography";
import { type SubjectType } from "../data";

interface AnswerProps {
  score: number;
  subject: SubjectType | "Answer" | null;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setSubject: React.Dispatch<
    React.SetStateAction<SubjectType | "Answer" | null>
  >;
}

export default function ({
  score,
  setScore,
  subject,
  setSubject,
}: AnswerProps) {
  const handleAction = () => {
    setScore(0);
    setSubject(null);
  };
  return (
    <AnswerPage>
      <ScoreContainer>
        <TextPreset2Light>Quiz completed</TextPreset2Light>
        <TextPreset2Medium>You scored...</TextPreset2Medium>
      </ScoreContainer>

      <ResultContainer>
        <ResultContent>
          <ResultHeader>
            <TextPreset4>{subject}</TextPreset4>
          </ResultHeader>
          <ScoreDetail>
            <TextPreset1>{score}</TextPreset1>
            <TextPreset5Regular><p style={{color: "#626c7f"}}></p>out of 10</TextPreset5Regular>
          </ScoreDetail>
        </ResultContent>

        <ActionButton onClick={handleAction}>
          <TextPreset4>Play Again</TextPreset4>
        </ActionButton>
      </ResultContainer>
    </AnswerPage>
  );
}

const AnswerPage = styled.main`
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media (min-width: 650px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 64px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 564px;

  @media (min-width: 650px) and (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const ResultContent = styled.div`
  padding: 48px;
  display: flex;
  border-radius: 24px;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.option};
  box-shadow: ${({theme}) => theme.colors["drop-shadow"]};
`;

const ResultHeader = styled.div``;

const ScoreDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const ActionButton = styled.button`
  border: none;
  padding: 32px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors["button-active"]};
  cursor: pointer;

  @media (max-width: 650px) {
    padding: 16px;
    border-radius: 12px;
  }
`;
