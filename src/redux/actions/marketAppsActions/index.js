import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../utils/api";

// Get accounts data by marketplace
export const getMarketplaceAccounts = createAsyncThunk(
    'marketApps/getMarketplaceAccounts', 
    async (marketplace, {rejectWithValue}) => {
        try {
            const res = await api.get(`api/marketapps/accounts/${marketplace}`)
    
            return res.data
            
        } catch (error) {
    
            const errors = error?.response?.data?.errors;

            return rejectWithValue(errors)
        }
    }

)
