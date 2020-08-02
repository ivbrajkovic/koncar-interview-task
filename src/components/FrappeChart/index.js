// Frappe chart

import React, { useRef, useEffect } from "react";

// Frappe chart
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";

const FrappeChart = ({ data }) => {
  const ref = useRef(null);
  const chart = useRef(null);

  // Construct chart
  useEffect(() => {
    chart.current = new Chart(ref.current, {
      // title: "Chaker stats",
      data: data,
      type: "bar",
      height: 250,
      barOptions: {
        spaceRatio: 0.4,
      },
      axisOptions: {
        xAxisMode: "tick",
        yAxisMode: "tick",
        xIsSeries: 1,
      },
      colors: ["#7cd6fd", "#743ee2"],
    });
    // eslint-disable-next-line
  }, []);

  // Update data
  useEffect(() => {
    chart.current.update(data);
  }, [data]);

  return <div ref={ref} />;
};

export default FrappeChart;
