// Search input

import React from "react";

// Material UI
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

// Styles
import useStyles from "./style";

const SearchInput = ({ elevation, value, onChange }) => {
  const classes = useStyles();

  return (
    <Paper elevation={elevation} className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        // autoFocus
        className={classes.searchInput}
        value={value}
        onChange={onChange}
        placeholder="Search ..."
      />
    </Paper>
  );
};

export default SearchInput;
