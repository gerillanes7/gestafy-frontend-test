import { useQuestions } from "./useQuestions";
import QuestionsTab from "../../../src/components/questions/QuestionsTab";
import CircularProgress from '@mui/material/CircularProgress';

const Questions = () => {

    const { questionsAnswered, questionsUnanswered, isLoading, asnwerQuestion } = useQuestions()

    if (isLoading) {
        return <div style={{display: 'flex', justifyContent: 'center'}}>
            <CircularProgress />
        </div>
    }

    return (
        <>
            <QuestionsTab
                answered={questionsAnswered}
                unanswered={questionsUnanswered}
                asnwerQuestion={asnwerQuestion}
            />
        </>
    )
}

export default Questions;