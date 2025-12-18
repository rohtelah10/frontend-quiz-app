import styled from "styled-components"

export default function({quesDone}:{quesDone:number}) {

    const calcWidth = ({quesDone}:{quesDone: number}) => {
        return quesDone * 10;
    }
    return(
        <QuestionBar>
            <Progress quesDone={calcWidth({quesDone})}></Progress>
        </QuestionBar>
    )
}

const QuestionBar = styled.div`
    width: 100%;
    height: 16px;
    background-color: ${({theme}) => theme.colors["progress-total"]};
    border-radius: 999px;
    padding: 4px;
`;

const Progress = styled.div<{quesDone: number}>`
    border-radius: 104px;
    width: ${({quesDone}) => quesDone}%;
    height: 8px;
    background-color: ${({theme}) => theme.colors["progress-bar"]};
`;