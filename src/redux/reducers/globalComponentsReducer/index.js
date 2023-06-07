import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  snackbar: {
    show: false,
    message: "",
    type: "error",
  },
  modal: {
    entity: null,
    data: null,
  },
  session: {
    data_access: null,
  },
};

export const globalComponentsSlide = createSlice({
  name: "globalComponents",
  initialState: initialState,
  reducers: {
    showSnackbar: (state, action) => {
      const { message, type } = action.payload;
      state.snackbar.message = message;
      state.snackbar.type = type;
      state.snackbar.show = true;
    },
    hideSnackbar: (state) => {
      state.snackbar.show = false;
    },
    setEntityModal: (state, action) => {
      state.modal = action.payload;
    },
    setDataAccess: (state, action) => {
      state.session.data_access = action.payload;
    },
  },
});

export const { showSnackbar, hideSnackbar, setEntityModal, setDataAccess } =
globalComponentsSlide.actions;
export const selectSnackbar = (state) => state?.globalComponents?.snackbar;
export const selectModalApp = (state) => state?.globalComponents?.modal;
export const selectDataAccess = (state) => state?.globalComponents?.session?.data_access;

export default globalComponentsSlide.reducer;
