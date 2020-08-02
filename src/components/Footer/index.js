// Footer

import React from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

// Styles
import useStyles from "./style";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Ivan Brajković
      </Typography>
      <a
        href="mailto:ivan.brajkovic@icloud.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MailIcon />
      </a>
      <a
        href="https://github.com/ivbrajkovic/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/ivan-brajkovi%C4%87-5b9883143/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>
    </footer>
  );
};

export default Footer;
