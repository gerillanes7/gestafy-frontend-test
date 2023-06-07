import { useMemo, useState } from "react"
import { ANSWERED, UNANSWERED } from "./constants"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { answerAQuestion, getAllQuestions } from "@/src/redux/actions/questionsActions"

export const useQuestions = () => {
    const dispatch = useDispatch()
    const allQuestionsSelector = useSelector(state => state?.questions?.questions)
    const isLoading = useSelector(state => state?.questions?.loading)

    const questionsAnswered = useMemo(() =>
        allQuestionsSelector?.filter(question => question.status === ANSWERED).reverse() || []
        , [allQuestionsSelector])

    const questionsUnanswered = useMemo(() =>
        allQuestionsSelector?.filter(question => question.status === UNANSWERED).reverse() || []
        , [allQuestionsSelector])

    const asnwerQuestion = (sellerId, questionId, answer) => {
        dispatch(answerAQuestion({sellerId, questionId, answer}))
    }

    useEffect(() => {
        dispatch(getAllQuestions())
    }, [dispatch])

    return {
        questionsAnswered,
        questionsUnanswered,
        isLoading,
        asnwerQuestion,
    }
}