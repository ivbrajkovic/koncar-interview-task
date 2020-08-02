// Editor page

import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";

// Material UI
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

// Components
import SliderStats from "../../components/SliderStats";

// Styles
import useStyles from "./style";

// Data context
import { useDataDispatch } from "../../context/data-context";

// Reducer
import { reducer, init } from "./reducer";

// Paper elevation
const elevation = 3;

const Main = () => {
  const classes = useStyles();
  const history = useHistory();
  const dataDispatch = useDataDispatch();

  // Local state
  const [state, dispatch] = useReducer(reducer, init);

  const handleValueChange = (e) =>
    dispatch({
      type: "SET_VALUE",
      payload: { name: e.target.name, value: e.target.value },
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    dataDispatch({ type: "ADD_CHAKER", payload: state });
    history.push("/");
  };

  return (
    <form
      className={classes.left}
      onSubmit={handleSubmit}
      // noValidate
      autoComplete="off"
    >
      <div className={classes.root}>
        {/* title */}
        <div className={classes.firstItem}>
          <Paper elevation={elevation}>
            <TextField
              size="small"
              name="title"
              placeholder="Title"
              variant="outlined"
              required
              fullWidth
              autoFocus
              value={state.title}
              onChange={handleValueChange}
            />
          </Paper>

          {/* team */}
          <Paper elevation={elevation}>
            <FormControl size="small" fullWidth variant="outlined">
              <Select
                name="team"
                value={state.team}
                onChange={handleValueChange}
              >
                {[1, 2, 3].map((el, i) => (
                  <MenuItem key={i} value={i + 1}>
                    Team {el}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>

          {/* desc */}
          <Paper elevation={elevation}>
            <TextField
              size="small"
              name="desc"
              placeholder="Description"
              variant="outlined"
              multiline
              rows={8}
              rowsMax={12}
              fullWidth
              required
              value={state.desc}
              onChange={handleValueChange}
            />
          </Paper>
        </div>

        {/* stats */}
        <div className={classes.secondItem}>
          {["jibber", "jabber", "hallugah", "wazoon", "bopple"].map((el, i) => (
            <SliderStats
              key={el}
              label={`Stat ${i + 1}`}
              name={el}
              dispatch={dispatch}
            />
          ))}
        </div>

        {/* submit button */}
        <Button type="submit" variant="contained" className={classes.thirdItem}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Main;
