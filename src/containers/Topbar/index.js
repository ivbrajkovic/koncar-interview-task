// Topbar

import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// Styles
import useStyle from "./style";

const Topbar = () => {
  const classes = useStyle();

  return (
    <>
      <AppBar position="static" color="primary">
        <Container>
          <Toolbar disableGutters>
            <RouterLink exact to="/" className={classes.navLink}>
              <Typography variant="h6">Main</Typography>
            </RouterLink>

            <RouterLink to="/editor" className={classes.navLink}>
              <Typography variant="h6">Editor</Typography>
            </RouterLink>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Toolbar /> */}
    </>
  );
};

export default Topbar;
