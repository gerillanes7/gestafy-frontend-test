
import { createSlice } from '@reduxjs/toolkit'
import { connectMercadolibre } from '../../actions/mercadoLibreActions';


const initialState = {
    connectedAccount: null,
    loading: true,
    errors: null
}

export const mercadoLibreSlice = createSlice({
    name: 'mercadoLibre',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(connectMercadolibre.pending, (state) => {
            state.loading = true;
        })
        .addCase(connectMercadolibre.fulfilled, (state, action) => {
            state.loading = false;
            state.connectedAccount = action.payload;
        })
        .addCase(connectMercadolibre.rejected, (state, action) => {
            state.errors = action.payload;
        })
    }
})

export default mercadoLibreSlice.reducer