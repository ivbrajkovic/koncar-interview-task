// Name list

import React from "react";

// Material UI
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const NameList = ({ elevation, data, chakerId, onClick }) => (
  <Paper elevation={elevation} className="paperBorder">
    <List component="nav" aria-label="">
      {data.map((el) => (
        <ListItem
          key={el.id}
          button
          selected={el.id === chakerId}
          onClick={() => onClick(el.id)}
        >
          <ListItemText primary={el.title} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default NameList;
