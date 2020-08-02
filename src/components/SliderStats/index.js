// Slider stats

import React from "react";

// Material UI
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const SliderStats = ({ label, name, dispatch }) => {
  const handleSliderChange = (event, value) => {
    dispatch({
      type: "SET_STATS",
      payload: { name, value },
    });
  };

  return (
    <Box display="flex">
      {/* label */}
      <Box mr={3} minWidth={80}>
        <Typography variant="body1">{label}</Typography>
      </Box>

      {/* slider */}
      <Box width="100%">
        <Box maxWidth={250}>
          <Slider
            defaultValue={0}
            aria-labelledby="stats-slider"
            valueLabelDisplay="auto"
            step={1}
            // marks
            min={0}
            max={10}
            onChange={handleSliderChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SliderStats;
