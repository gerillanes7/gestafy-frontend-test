import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setAuthToken } from "../../../../utils/api";

export const login = createAsyncThunk(
    'authentication/login',
    async ({ email, password }) => {
        try {
            const body = JSON.stringify({ email, password })

            const res = await api.post('/api/auth', body)

            return res.data;

        } catch (e) {
            const errors = error?.response?.data?.errors;
            return errors
        }

    }
)