import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";

type Props = {
  type: any;
  message: string;
};

export default function AlertMessage({ type, message }: Props) {
  const [openAlert, setOpenAlert] = useState(true);
  return (
    <Snackbar
      open={openAlert}
      autoHideDuration={3000}
      onClose={() => setOpenAlert(false)}
    >
      <Alert onClose={() => setOpenAlert(false)} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}
