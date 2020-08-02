// Slider stats

import React from "react";

// Material UI
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const SliderStats = ({ label, name, dispatch }) => {
  const handleSliderChange = (_, value) => {
    dispatch({
      type: "SET_STATS",
      payload: { name, value },
    });
  };

  return (
    <Box display="flex" alignItems="center">
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
      <Box width="100%">
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
      </Box>
    </Box>
  );
};

export default SliderStats;
