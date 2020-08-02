// Footer - custom styles

import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export default makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    paddingBottom: theme.spacing(3),
    textAlign: "center",
    color: grey[500],

    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(8, 0, 3, 0),
    },

    "& a": {
      margin: theme.spacing(0, 1),
      transition: theme.transitions.create(["color"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.short,
      }),
    },

    "& a:hover": {
      color: grey[700],
    },
  },
}));
