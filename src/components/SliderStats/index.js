// Slider stats

import React from "react";

// Material UI
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

// Styles
import useStyles from "./style";

const SliderStats = ({ label, name, dispatch }) => {
  const classes = useStyles();

  const handleSliderChange = (_, value) => {
    dispatch({
      type: "SET_STATS",
      payload: { name, value },
    });
  };

  return (
    <div className={classes.root}>
      {/* label */}
      <Typography
        variant="body1"
        style={{
          minWidth: 80,
          marginRight: 24,
        }}
      >
        {label}
      </Typography>

      {/* slider */}
      <Slider
        defaultValue={0}
        aria-labelledby="stats-slider"
        valueLabelDisplay="auto"
        step={1}
        // marks
        min={0}
        max={10}
        onChange={handleSliderChange}
        style={{ maxWidth: 250 }}
      />
    </div>
  );
};

export default SliderStats;
