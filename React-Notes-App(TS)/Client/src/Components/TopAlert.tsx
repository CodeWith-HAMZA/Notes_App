import * as React from "react";
import Alert, { AlertColor } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

interface Props {
  AlertType: AlertColor;
  ShowAlert: boolean;
}
const TopAlert: React.FC<Props> = ({
  AlertType,
  ShowAlert,
}: Props): JSX.Element => {
  return ShowAlert ? (
    <Alert severity={AlertType }>
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
  ) : (
    <></>
  );
};

export default TopAlert;
