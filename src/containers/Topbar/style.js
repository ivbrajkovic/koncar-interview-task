// Toolbar - custom styles

import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export default makeStyles((theme) => ({
  navLink: {
    color: grey[500],
    textDecoration: "inherit",
    margin: "5px 10px",
    "&.active": {
      color: grey[50],
    },
    "&:hover": {
      color: grey[50],
    },
    transition: theme.transitions.create(["color"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    }),
  },
}));
