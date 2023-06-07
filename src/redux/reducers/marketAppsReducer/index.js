
import { createSlice } from '@reduxjs/toolkit'
import { getMarketplaceAccounts } from '../../actions/marketAppsActions'

const initialState = {
    accounts: null,
    loading: false,
    errors: null
}

export const marketAppsSlice = createSlice({
    name: 'marketApps',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMarketplaceAccounts.pending, (state) => {
            state.loading = true;
        })
        .addCase(getMarketplaceAccounts.fulfilled, (state, action) => {
            state.loading = false;
            state.accounts = action.payload;
        })
        .addCase(getMarketplaceAccounts.rejected, (state, action) => {
            state.errors = action.payload;
        })
    }
})

export default marketAppsSlice.reducer