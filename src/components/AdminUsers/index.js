import React from "react";
import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import JTabla from "../JTable";
import ModalUsers from "./Modal";

export default function AdminEstacionamientos() {
  const { users, usersFields } = useSelector((state) => state.usersReducer);

  return (
    <Container fixed style={{ paddingTop: "20px" }}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Administrador de Usuarios
      </Typography>
      <JTabla
        title={"Usuarios"}
        fields={usersFields}
        rows={users}
        canAdd={true}
        modal={ModalUsers}
      />
    </Container>
  );
}
