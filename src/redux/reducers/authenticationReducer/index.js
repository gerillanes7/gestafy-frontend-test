
import { createSlice } from '@reduxjs/toolkit'
import { login } from '../../actions/authenticationActions/'

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
      console.log(action.payload);
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    })
    .addCase(login.rejected, (state, action) => {
        state.errors = action.payload;
    })
  }
})

export default authenticationSlice.reducer