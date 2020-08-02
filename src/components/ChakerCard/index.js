// Chaker card

import React from "react";

// Material UI
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Custom style
import makeStyles from "./style";

const ChakerCard = ({ team, title, desc }) => {
  const classes = makeStyles();

  return (
    <div className={classes.root}>
      <Box display="block" mr={3}>
        <img src={`/img/team-${team}.PNG`} alt="Chaker team" />
      </Box>

      <Box>
        <Box mb={2}>
          <Typography variant="h4">{title}</Typography>
        </Box>
        <Typography variant="body1">{desc}</Typography>
      </Box>
    </div>
  );
};

export default ChakerCard;
