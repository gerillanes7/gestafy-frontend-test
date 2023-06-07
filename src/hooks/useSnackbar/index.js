import { hideSnackbar, showSnackbar } from "@/src/redux/reducers/globalComponentsReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectSnackbar } from "@/src/redux/reducers/globalComponentsReducer";

const HIDE_TIME_SB = 4000;

const useSnackbar = () => {
  const snackbar = useSelector(selectSnackbar);
  const dispatch = useDispatch();

  const showMessage = (msg, types = "error", timeout = HIDE_TIME_SB) => {
    const sn= {
      message: msg,
      type: types,
    };
    dispatch(showSnackbar(sn));
    setTimeout(() => {
      dispatch(hideSnackbar());
    }, timeout);
  };

  const hideMessage = () => {
    dispatch(hideSnackbar());
  };

  return {
    snackbar,
    showMessage,
    hideMessage,
  };
};

export default useSnackbar;
