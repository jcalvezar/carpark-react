import React, { useContext, useEffect } from "react";
//import { store } from "../Store/store";
import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import JTabla from "../JTable";
import ModalUsers from "./Modal";

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
  const { users: myUsers, usersFields } = useSelector(
    (state) => state.usersReducer
  );

  //const { state } = useContext(store);
  let users = {
    title: "Usuarios",
    fields: usersFields,
    rows: myUsers,
    canAdd: true,
    modal: ModalUsers,
  };
  /*
	useEffect(() => {
		users = {
			...users,
			fields: state.usersFields,
			rows: state.users
		};
	}, [state])
	*/

  return (
    <Container fixed style={{ paddingTop: "20px" }}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Administrador de Usuarios
      </Typography>
      <Paper elevation={5} className={fixedHeightPaper}>
        <JTabla data={users} />
      </Paper>
    </Container>
  );
}
