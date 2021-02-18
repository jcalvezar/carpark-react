import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
//import Container from '@material-ui/core/Container';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Barra from "./Barra";
import Pie from "./Pie";
import Jcontenido from "./Jcontenido";
import Jregistro from "./Jregistro";
import Jrecupero from "./Jrecupero";
import PageError from "./PageError";

// Portfolio
import PanelAdmin from "../PanelAdmin";
import AdminParkings from "../AdminParkings";
import AdminUsers from "../AdminUsers";
import AdminCars from "../AdminCars";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    backgroundColor: "#cfe8fc",
  },
}));

export default function Layout() {
  const classes = useStyles();
  const appName = "CarPark";

  return (
    <div className={classes.root}>
      <CssBaseline />

      <BrowserRouter>
        <Barra appname={appName} />

        <Redirect from="/" to="/home" />
        <Switch>
          <Route
            exact
            path="/home"
            render={() => <Jcontenido appname={appName} />}
          />
          <Route
            exact
            path="/registro"
            render={() => <Jregistro appname={appName} />}
          />
          <Route
            exact
            path="/recupero"
            render={() => <Jrecupero appname={appName} />}
          />
          <Route exact path="/paneladmin" render={() => <PanelAdmin />} />
          <Route exact path="/adminparkings" render={() => <AdminParkings />} />
          <Route exact path="/adminusers" render={() => <AdminUsers />} />
          <Route exact path="/admincars" render={() => <AdminCars />} />
          <Route component={PageError} />
        </Switch>
      </BrowserRouter>

      <Pie appname={appName} />
    </div>
  );
}
