// Serach input - custom style

import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export default makeStyles((theme) => ({
  search: {
    position: "relative",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: grey[500],
  },
  searchInput: {
    "& input": {
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    },
  },
}));
