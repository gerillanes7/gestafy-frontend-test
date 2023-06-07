import { createSlice } from '@reduxjs/toolkit'
import { getAllQuestions, answerAQuestion } from '../../actions/questionsActions'

const initialState = {
  questions: [],
  loading: false,
  errors: null,
}

export const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllQuestions.pending, (state) => {
      state.loading = true;
    })
    .addCase(getAllQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.questions = action.payload;
    })
    .addCase(getAllQuestions.rejected, (state) => {
      state.errors = 'error';
    })
    .addCase(answerAQuestion.pending, (state) => {
      state.loading = true;
    })
    .addCase(answerAQuestion.fulfilled, (state, action) => {
      state.loading = false;
    })
    .addCase(answerAQuestion.rejected, (state) => {
      state.errors = 'error';
    })
  }
})

export default questionSlice.reducer