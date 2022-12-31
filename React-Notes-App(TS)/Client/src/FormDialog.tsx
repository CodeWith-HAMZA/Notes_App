import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Add from "@mui/icons-material/Add";
import { Box, Stack } from "@mui/system";
import { Paper } from "@mui/material";
import DialogBody from "./DialogBody";
import { Todo } from "./Model";
import ContextStore from "./Context/ContextStore";
interface Props {}
const FormDialog: React.FC<Props> = ({}: Props): JSX.Element => {
  const { handleClickOpen } = React.useContext(ContextStore);

  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Button
        variant="contained"
        color="secondary"
        sx={{ borderRadius: "0.8rem", mt: 4 }}
        // * 'null' means We're Opening The 'Modal' For Adding A [New Note]
        onClick={() => handleClickOpen(null)}
      >
        <Add sx={{ fontSize: "4rem" }} />
      </Button>

      {/* * Modal-Screen(PoppUp-Content)  */}
      <DialogBody />
    </Stack>
  );
};

export default FormDialog;
