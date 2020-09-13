import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { NavLink, useLocation } from "react-router-dom";

import { useStyles } from "./styles";

const Header = () => {
  const location = useLocation();
  const path = location.path;
  const classes = useStyles();
  return (
    <header position="static" className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>
          <img src="https://www.spacexwiki.com/static/media/spacex-logo.9250222f.svg" />
        </div>
        <div className={classes.links}>
          <NavLink
            exact
            color="inherit"
            to="/"
            activeClassName={classes.active}
          >
            Home
          </NavLink>
          <NavLink
            exact
            color="inherit"
            to="/history"
            activeClassName={classes.active}
          >
            History
          </NavLink>
          <NavLink
            exact
            color="inherit"
            to="/payload"
            activeClassName={classes.active}
          >
            Payload
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
