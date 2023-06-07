
import { createSlice } from '@reduxjs/toolkit'
import { login, authUser, register } from '../../actions/authenticationActions/'

const initialState = {
  token: null,
  isAuthenticated: false,
  loading: true,
  user: null,
  errors: null
}

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    })
      .addCase(login.fulfilled, (state, action) => {
        const { user, token } = action.payload
        state.loading = false;
        state.user = user;
        state.token = token;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.errors = action.payload;
      })
      .addCase(authUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        const { user, token } = action.payload
        state.loading = false;
        state.user = user;
        state.token = token;
        state.isAuthenticated = true;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.errors = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.errors = action.payload;
      })
  }
})

export default authenticationSlice.reducer