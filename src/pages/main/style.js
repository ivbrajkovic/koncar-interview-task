// Main page - custom styles

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    // minHeight: 550,

    display: "grid",
    gridGap: theme.spacing(3),
    margin: theme.spacing(3, 0, 6, 0),

    gridTemplateColumns: "minmax(200px, 1fr)",
    gridTemplateAreas: `
      "first" 
      "second" 
      "third"
    `,

    [theme.breakpoints.up("sm")]: {
      gridGap: theme.spacing(4),
      marginTop: theme.spacing(4),

      // gridTemplateColumns: "minmax(200px, 3fr) minmax(200px, 8fr)",
      gridTemplateColumns: "minmax(250px, 3fr) minmax(250px, 9fr)",
      gridTemplateAreas: `
        "first second"
        "third third"
      `,
    },

    [theme.breakpoints.up("md")]: {
      gridGap: theme.spacing(6),
      marginTop: theme.spacing(6),

      // gridTemplateColumns: "minmax(250px, 3fr) minmax(250px, 9fr)",
      gridTemplateAreas: `
        "first second"
        "first third"
      `,
    },
  },

  firstItem: {
    gridArea: "first",
    display: "grid",
    gridTemplateRows: "auto 1fr",
    gridGap: theme.spacing(3),
  },

  secondItem: {
    minHeight: 210,
    gridArea: "second",
  },

  thirdItem: {
    gridArea: "third",
  },
}));
