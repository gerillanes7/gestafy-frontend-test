import { FC, useState, useEffect } from "react";
import MuiSnackbar from "@mui/material/Snackbar";
import { CustomAlert } from "./styles";


const Snackbar = ({
  severity = "error" || "warning" || "info" || "success",
  duration = 3000,
  message = "",
  open,
  onClose,
}) => {
  const [openLocal, setOpenLocal] = useState(open);
  const handleClose = (
    event,
    reason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    onClose?.();
    setOpenLocal(false);
  };

  useEffect(() => {
    setOpenLocal(open);
  }, [open]);

  return (
    <MuiSnackbar
      open={openLocal}
      autoHideDuration={duration}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <CustomAlert
        elevation={6}
        variant='filled'
        onClose={(event) => handleClose(event)}
        severity={severity}
      >
        {message}
      </CustomAlert>
    </MuiSnackbar>
  );
};

export default Snackbar;
