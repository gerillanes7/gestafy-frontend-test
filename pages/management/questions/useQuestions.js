import { useState, useMemo } from "react"
import { ANSWERED, UNANSWERED } from "./constants"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllQuestions } from "../../../src/state/actions/questionsActions"

export const useQuestions = () => {
    const dispatch = useDispatch()
    const allQuestionsSelector = useSelector(state => state?.questionsReducer?.questions)
    const isLoading = useSelector(state => state?.questionsReducer?.loading)


    const questionsAnswered = useMemo(() =>
        allQuestionsSelector?.filter(question => question.status === ANSWERED) || []
        , [allQuestionsSelector])

    const questionsUnanswered = useMemo(() =>
        allQuestionsSelector?.filter(question => question.status === UNANSWERED).sort((a, b) => a - b) || []
        , [allQuestionsSelector])

    useEffect(() => {
        dispatch(getAllQuestions())
    }, [dispatch])

    return {
        questionsAnswered,
        questionsUnanswered,
        isLoading
    }
}