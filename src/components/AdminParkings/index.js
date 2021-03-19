import React from "react";
//import { store } from "../Store/store";
import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
//import JTabla from '../Table';
import JTabla from "../JTable";
import ModalParkings from "./Modal";

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

export default function AdminEstacionamientos() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  //const { state } = useContext(store);
  const { parkings: myParkings, parkingsFields } = useSelector(
    (state) => state.parkingsReducer
  );

  const parkings = {
    title: "Estacionamientos",
    fields: parkingsFields,
    rows: myParkings,
    canAdd: true,
    modal: ModalParkings,
  };

  return (
    <Container fixed style={{ paddingTop: "20px" }}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Administrador de Estacionamientos
      </Typography>
      <Paper elevation={5} className={fixedHeightPaper}>
        <JTabla data={parkings} />
      </Paper>
    </Container>
  );
}
