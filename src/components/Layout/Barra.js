import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import { fade, makeStyles } from "@material-ui/core/styles";

import DriveEtaIcon from "@material-ui/icons/DriveEta";

import Jlogin from "./Jlogin";
import Jmenulist from "./Jmenulist";
import Usermenu from "./Usermenu";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    paddingRight: "60px",
  },
  separador: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  barra: {
    padding: 0,
  },
  olvide: {
    paddingTop: 12,
    paddingBottom: 0,
  },
}));

function Barra(props) {
  const classes = useStyles();
  const { loggedIn } = useSelector((state) => state.authReducer);

  return (
    <AppBar position="sticky">
      <Container fixed>
        <Toolbar className={classes.barra}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            component={RouterLink}
            to="/home"
          >
            <DriveEtaIcon fontSize="large" />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {props.appname}
          </Typography>

          {loggedIn ? (
            <React.Fragment>
              <Jmenulist />
              <div className={classes.separador}></div>
              <Usermenu />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className={classes.separador}></div>
              <Jlogin />
            </React.Fragment>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Barra;
