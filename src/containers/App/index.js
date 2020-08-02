// App

import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Material UI
import Box from "@material-ui/core/Box";

// Compponents
import Topbar from "../Topbar";
import Routes from "../../routes";

// Data context provider
import { DataProvider } from "../../context/data-context";

const App = () => (
  <Box p={3}>
    <Router>
      <Topbar />
      <Box position="relative">
        <DataProvider>
          <Switch>
            <Routes />
          </Switch>
        </DataProvider>
      </Box>
    </Router>
  </Box>
);

export default App;
