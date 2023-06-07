import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../utils/api";
// Connect a mercadolibre account with the app
export const connectMercadolibre = createAsyncThunk(
    'mercadoLibre/connectAccount',
    async (refreshToken, {rejectWithValue}) => {
        
        try {
            const body = JSON.stringify({refreshToken})
            const res = await api.post(`api/mercadolibre/connect`, body)
    
            return res.data
        } catch (error) {
    
            const errors = error?.response?.data?.errors;

            return rejectWithValue(errors)
        }
    }
)
