// Main page

import React, { useState, useMemo } from "react";

// Material UI
import Box from "@material-ui/core/Box";

// Frappe chart
import FrappeChart from "../../components/FrappeChart";

// Components
import NameList from "../../components/NameLIst";
import ChakerCard from "../../components/ChakerCard";
import SearchInput from "../../components/SearchInput";

// Styles
import useStyles from "./style";

// Data context
import { useDataState } from "../../context/data-context";

// Lib
import { filterData } from "../../lib/filterData";

// Const variables
const elevation = 3;
const chartLabels = ["jibber", "jabber", "hallugah", "wazoon", "bopple"];

const Main = () => {
  const classes = useStyles();
  const data = useDataState();

  // Local state
  const [chars, setChars] = useState("");
  const [chaker, setChaker] = useState(data[0]);
  const [chartData, setChartData] = useState(Object.values(chaker.stats));

  // Handlers
  const handleInputChange = (e) => setChars(e.target.value);
  const handleListItemClick = (id) => {
    setChaker(data.find((el) => el.id === id));
    setChartData(Object.values(chaker.stats));
  };

  // Memoized result
  const filteredData = useMemo(() => filterData(data, chars), [data, chars]);

  return (
    <div className={classes.root}>
      {/* first item */}
      <div className={classes.firstItem}>
        <SearchInput
          elevation={elevation}
          value={chars}
          onChange={handleInputChange}
        />

        <NameList
          elevation={elevation}
          data={filteredData}
          chakerId={chaker.id}
          onClick={handleListItemClick}
        />
      </div>

      {/* second item */}
      <div className={classes.secondItem}>
        <Box mb={3}>
          <ChakerCard
            team={chaker.team}
            title={chaker.title}
            desc={chaker.desc}
          />
        </Box>
      </div>

      {/* third item */}
      <div className={classes.thirdItem}>
        <FrappeChart
          data={{
            labels: chartLabels,
            datasets: [{ values: chartData }],
          }}
        />
      </div>
    </div>
  );
};

export default Main;