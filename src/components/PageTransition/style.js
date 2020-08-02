// Page transition - custom style

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  page: {
    width: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    // left: 15,
    // right: 15,
  },
  pageEnter: {
    opacity: 0,
    transform: "scale(1.1)",
  },
  pageEnterActive: (props) => ({
    opacity: 1,
    transform: "scale(1)",
    transition: `opacity ${props.timeout.enter}ms, transform ${props.timeout.enter}ms`,
  }),
  pageExit: {
    opacity: 1,
    transform: "scale(1)",
  },
  pageExitActive: (props) => ({
    opacity: 0,
    transform: "scale(0.9)",
    transition: `opacity ${props.timeout.exit}ms, transform ${props.timeout.exit}ms`,
  }),
}));
