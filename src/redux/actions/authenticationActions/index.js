import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setAuthToken } from "../../../../utils/api";

export const login = createAsyncThunk(
    'authentication/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const body = JSON.stringify({ email, password })

            const res = await api.post('/api/auth', body)

            localStorage.setItem('token', res.data.token)

            return res.data;

        } catch (error) {
            const status = error?.response.status;
            const errors = error?.response?.data?.errors;
            return rejectWithValue({errors, status})
        }
    }
)

export const authUser = createAsyncThunk(
    'authentication/authUser',
    async (_, { rejectWithValue }) => {
        try {
            const res = await api.get(`/api/auth`)

            return res.data
        } catch (error) {
            const errors = error?.response?.data?.errors;
            return rejectWithValue(errors)
        }
    }
)

export const register = createAsyncThunk(
    'authentication/register',
    async ({ name, email, password }, { rejectWithValue }) => {

        try {
            const body = JSON.stringify({ name, email, password })
            const res = await api.post(`/api/users`, body)

            return res.data
        } catch (error) {
            const errors = error?.response?.data?.errors;
            return rejectWithValue(errors)
        }
    }
)