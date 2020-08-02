// Editor page - custom styles

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "grid",
    marginTop: theme.spacing(3),
    gridTemplateColumns: "minmax(200px, 1fr)",

    gridRowGap: theme.spacing(3),
    gridColumnGap: theme.spacing(3),

    [theme.breakpoints.up("sm")]: {
      gridRowGap: theme.spacing(4),
      gridColumnGap: theme.spacing(4),

      marginTop: theme.spacing(4),
      gridTemplateColumns: "minmax(200px, 3fr) minmax(200px, 9fr)",
    },

    [theme.breakpoints.up("md")]: {
      gridColumnGap: theme.spacing(6),
      marginTop: theme.spacing(6),
    },
  },

  firstItem: {
    display: "grid",
    gridTemplateRows: "auto auto 1fr",
    gridGap: theme.spacing(3),
  },

  secondItem: {
    display: "grid",
    gridGap: theme.spacing(2),
    alignItems: "center",
    alignContent: "start",
    padding: theme.spacing(1, 4, 0, 4),

    [theme.breakpoints.up("sm")]: {
      gridGap: theme.spacing(4),
    },
  },

  thirdItem: {
    justifySelf: "center",
    padding: "8px 22px",
    fontSize: "0.9375rem",

    [theme.breakpoints.up("sm")]: {
      justifySelf: "start",
      padding: "6px 16px",
      fontSize: "0.875rem",
    },
  },
}));
