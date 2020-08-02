// Router

import React from "react";
import { Route } from "react-router-dom";

// Material UI
import Container from "@material-ui/core/Container";

// Application pages
import pages from "../pages";

// Components
import PageTransition from "../components/PageTransition";

const Routes = () =>
  // create routes from array
  pages.map(({ path, Component, privateRoute }, i) => (
    <Route key={i} exact path={path}>
      {({ match }) => (
        <PageTransition match={match}>
          <Container>
            <Component />
          </Container>
        </PageTransition>
      )}
    </Route>
  ));

export default Routes;
