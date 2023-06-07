import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeDir: 'ltr',
    activeNavbarBg: '#0b70fb', // This can be any color,
    activeSidebarBg: '#ffffff', // This can be any color
    activeMode: 'light', // This can be light or dark
    activeTheme: 'ORANGE_THEME', // BLUE_THEME, GREEN_THEME, RED_THEME, BLACK_THEME, PURPLE_THEME, INDIGO_THEME
    SidebarWidth: 240,
};


export const customizerSlice = createSlice({
    name: 'customizer',
    initialState,
    reducers: {
        setActiveDir: (state, action) => {
            state.activeDir = action.payload;
        },
        setActiveNavbarBg: (state, action) => {
            state.activeNavbarBg = action.payload;
        },
        setActiveSidebarBg: (state, action) => {
            state.activeNavbarBg = action.payload;
        },
        setActiveMode: (state, action) => {
            state.activeMode = action.payload;
        },
        setActiveTheme: (state, action) => {
            state.activeTheme = action.payload;
        },
        setSidebarWidth: (state, action) => {
            state.SidebarWidth = action.payload;
        }
    },
})

export const { setActiveDir, setActiveNavbarBg, setActiveSidebarBg, setActiveMode, setActiveTheme, setSidebarWidth } = customizerSlice.actions;

export const selectActiveDir = (state) => state.customizer.activeDir;
export const selectActiveNavbarBg = (state) => state.customizer.activeNavbarBg
export const selectActiveSidebarBg = (state) => state.customizer.activeSidebarBg
export const selectActiveMode = (state) => state.customizer.activeMode
export const selectActiveTheme = (state) => state.customizer.activeTheme
export const selectSidebarWidth = (state) => state.customizer.SidebarWidth


export default customizerSlice.reducer