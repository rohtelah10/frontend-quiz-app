import styled from "styled-components";
import {
  TextPreset3,
  TextPreset4,
  TextPreset6,
} from "../components/Typography/Typography";
import { type SubjectType } from "../data";
import { useEffect, useState } from "react";
import QuestionBar from "../components/QuestionBar";
import AnswerRight from "../assets/images/icon-correct.svg";
import AnswerWrong from "../assets/images/icon-error.svg";

export default function ({
  quesData,
  subject,
  setSubject,
  score,
  setScore,
}: {
  quesData: any;
  subject: SubjectType | "Answer" | null;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setSubject: React.Dispatch<
    React.SetStateAction<SubjectType | "Answer" | null>
  >;
}) {
  const [quesNo, setQuesNo] = useState(0);
  const [question, setQuestion] = useState<any>(getQues());
  const [answers, setAnswers] = useState<any>(getAnswer());
  const [rightAnswer, setRightAnswer] = useState<boolean | null>(null);
  const [rightIdx, setRightIdx] = useState<number | null>(getRightIdx());
  const [choiceIdx, setChoiceIdx] = useState<number | null>(null);

  console.log("score : ", score);

  const handleSubmit = () => {
    if (choiceIdx === null) {
      return;
    }
    setChoiceIdx(null);
    setQuesNo((prev) => {
      const quesNumber = prev + 1;
      if (quesNumber >= 10) {
        setSubject("Answer");
        return 10;
      }
      return quesNumber;
    });
  };
  const handleChoice = ({ idx }: { idx: number }) => {
    if (choiceIdx != null) {
      return;
    }

    if (rightIdx == idx) {
      setScore((prev) => prev + 1);
    }

    setChoiceIdx(idx);

    setRightAnswer(() => {
      return question[quesNo].options[idx] == question[quesNo].answer;
    });
    console.log("question: ", question);
  };

  console.log("$choice : ", choiceIdx);
  function getQues(): void {
    const questions = quesData.quizzes.filter(
      (elem: any) => elem.title == subject
    );
    return questions[0].questions;
  }

  function getAnswer(): any {
    const answers = question?.[quesNo].options;
    return answers;
  }

  function getRightIdx(): any {
    const rightIndex = question[quesNo].options.findIndex(
      (elem: any) => elem === question[quesNo].answer
    );

    console.log("Right Index : ", rightIndex);
    return rightIndex;
  }

  useEffect(() => {
    setQuestion(getQues());
    setAnswers(getAnswer());
    setRightIdx(getRightIdx());
  }, [quesNo]);

  return (
    <QuestionPage>
      <QuestionBox>
        <QuestionText>
          <TextPreset6>
            Question {quesNo + 1} of {question.length}
          </TextPreset6>
          <TextPreset3>
            {question[quesNo].question}
          </TextPreset3>
        </QuestionText>

        <QuestionBar quesDone={quesNo + 1} />
      </QuestionBox>

      <AnswerBox>
        <Answers>
          {answers.map((elem: any, idx: any) => {
            return (
              <Answer
                key={idx}
                $choice={choiceIdx == idx}
                $ch={choiceIdx}
                $right={rightAnswer}
                $rightIdx={rightIdx == idx}
                onClick={() => handleChoice({ idx })}
              >
                <AnswerWrap>
                  <AnswerLi $ch={choiceIdx == idx} $rightIdx={rightIdx == idx}>
                    <TextPreset4>
                      {String.fromCharCode(idx + 65)}
                    </TextPreset4>
                  </AnswerLi>
                  <TextPreset4 $textAlign="start">
                    {elem}
                  </TextPreset4>
                </AnswerWrap>

                {choiceIdx != null && rightIdx == idx && (
                  <AnswerImg src={AnswerRight} alt="" />
                )}
                {choiceIdx == idx && rightIdx != idx && (
                  <AnswerImg src={AnswerWrong} alt="" />
                )}
              </Answer>
            );
          })}
        </Answers>

        <SubmitButton $choice={choiceIdx} onClick={handleSubmit}>
          <TextPreset4><p style={{color: "white"}}>Submit Button</p></TextPreset4>
        </SubmitButton>
      </AnswerBox>
    </QuestionPage>
  );
}

const QuestionPage = styled.main`
  display: flex;
  justify-content: space-between;

  @media (min-width: 650px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const QuestionBox = styled.section`
  width: clamp(380px, 38vw, 465px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  gap: 184px;

  @media (min-width: 650px) and (max-width: 1024px) {
    width: 100%;
    gap: 40px;
  }

  @media (max-width: 650px) {
    width: 100%;
    gap: 40px;
  }
`;

const QuestionText = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: clamp(420px, 42vw, 564px);

  @media (min-width: 650px) and (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Answers = styled.section`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 16px;

  @media (min-width: 650px) and (max-width: 1024px) {
    gap: 24px;
    width: 100%;
  }

  @media (max-width: 650px) {
    gap: 24px;
    width: 100%;
  }
`;

const AnswerWrap = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

const Answer = styled.button<{
  $choice: boolean | null;
  $right: boolean | null;
  $rightIdx: boolean | null;
  $ch: number | null;
}>`
  padding: 24px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.option};
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  border: none;
  cursor: pointer;

  outline: ${({ $choice, $right, theme }) =>
    $right == false && $choice && `2px solid ${theme.colors["ques-wrong"]}`};

  outline: ${({ $choice, theme, $right }) =>
    $choice && $right && `2px solid ${theme.colors["ques-right"]}`};

  outline: ${({ $ch, $rightIdx, theme }) =>
    $ch != null && $rightIdx ? `2px solid ${theme.colors["ques-right"]}` : ""};

  &:hover {
    outline: 3px solid ${({ theme }) => theme.colors["ques-hover"]};

    & > div > div {
      background-color: ${({ theme }) => theme.colors["ques-hover"]};
    }

    & > div > div > p {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  @media (min-width: 650px) and (max-width: 1024px) {
    padding: 24px;
  }

  @media (max-width: 1024px) {
    padding: 16px;
  }
`;

const AnswerImg = styled.img``;

const SubmitButton = styled.button<{ $choice: number | null }>`
  border-radius: 24px;
  padding: 32px;
  background-color: ${({ theme, $choice }) =>
    $choice != null ? theme.colors["button-active"] : theme.colors["button-hover"]};
  border: none;
  outline: none;
  cursor: pointer;

  @media (max-width: 650px) {
    padding: 16px;
    border-radius: 12px;
  }
`;

const AnswerLi = styled.div<{ $ch: boolean | null; $rightIdx: boolean | null }>`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background-color: ${({ theme, $ch, $rightIdx }) =>
    !$ch
      ? theme.colors.background
      : $rightIdx
      ? theme.colors["ques-right"]
      : theme.colors["ques-wrong"]};

  ${({ $ch, theme }) =>
    $ch &&
    ` > p {
      color: ${theme.colors.text};
      }
    `};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
