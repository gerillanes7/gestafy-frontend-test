import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../../../../utils/api"

export const getAllQuestions = createAsyncThunk(
    'questions/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const questions = await api.get('api/mercadolibre/getAllQuestions')

            return questions.data;
        } catch (error) {
            const errors = error?.response?.data?.errors;
            return rejectWithValue(errors)
        }
    }
)

export const answerAQuestion = createAsyncThunk(
    'questions/answerQuestion',
    async (sellerId, questionId, answer, {rejectWithValue}) => {
        try {
            const body = JSON.parse({sellerId, questionId, answer})
            const res = await api.post('api/mercadolibre/answerQuestion', body)

            return res
        } catch (error) {
            const errors = error?.response?.data?.errors;
            return rejectWithValue(errors)
        }
    }
)