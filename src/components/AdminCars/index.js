import React from "react";
//import { store } from "../Store/store";
import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import JTabla from "../JTable";
import ModalCars from "./Modal";

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
  fixedHeight: {},
}));

export default function AdminCars() {
  console.log("Entre a AdminCars");

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  //const { state } = useContext(store);
  const { cars: myCars, carsFields } = useSelector(
    (state) => state.carsReducer
  );
  console.log("My Cars:", myCars);

  const cars = {
    title: "Vehiculos",
    fields: carsFields,
    rows: myCars,
    canAdd: true,
    modal: ModalCars,
  };

  return (
    <Container fixed style={{ paddingTop: "20px" }}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Administrador de Vehiculos
      </Typography>
      <Paper elevation={5} className={fixedHeightPaper}>
        <JTabla data={cars} />
      </Paper>
    </Container>
  );
}
