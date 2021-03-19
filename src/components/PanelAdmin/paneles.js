import React from "react";
//import { store } from "../Store/store";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import JTable from "../JTable";
import ModalCars from "../AdminCars/Modal";
import ModalUsers from "../AdminUsers/Modal";
import ModalParkings from "../AdminParkings/Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 360,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  //const { state } = useContext(store);
  const { users: myUsers, usersFields } = useSelector(
    (state) => state.usersReducer
  );
  const { cars: myCars, carsFields } = useSelector(
    (state) => state.carsReducer
  );
  const { parkings: myParkings, parkingsFields } = useSelector(
    (state) => state.parkingsReducer
  );
  const { logs: myLogs, logsFields } = useSelector(
    (state) => state.logsReducer
  );
  console.log("Se actualizo el STATE");

  const users = {
    title: "Usuarios",
    fields: usersFields,
    rows: myUsers,
    canAdd: true,
    modal: ModalUsers,
  };
  const parkings = {
    title: "Estacionamientos",
    fields: parkingsFields,
    rows: myParkings,
    canAdd: true,
    modal: ModalParkings,
  };
  const cars = {
    title: "Vehiculos",
    fields: carsFields,
    rows: myCars,
    canAdd: true,
    modal: ModalCars,
  };
  const logs = {
    title: "Bitacora",
    fields: logsFields,
    rows: myLogs,
    canAdd: false,
    modal: null,
  };

  return (
    <>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper elevation={5} className={fixedHeightPaper}>
            <JTable data={users} />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper elevation={5} className={fixedHeightPaper}>
            <JTable data={logs} />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper elevation={5} className={fixedHeightPaper}>
            <JTable data={parkings} />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper elevation={5} className={fixedHeightPaper}>
            <JTable data={cars} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
