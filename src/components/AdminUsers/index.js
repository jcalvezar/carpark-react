import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import UsersWrapper from "./UsersWrapper";

export default function AdminEstacionamientos() {
  return (
    <Container fixed style={{ paddingTop: "20px" }}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Administrador de Usuarios
      </Typography>
      <UsersWrapper />
    </Container>
  );
}
