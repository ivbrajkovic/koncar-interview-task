// Chaker card - custom style

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "block",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));
