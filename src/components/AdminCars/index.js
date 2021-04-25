import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CarsWrapper from "./CarsWrapper";

export default function AdminCars() {
  return (
    <Container fixed style={{ paddingTop: "20px" }}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Administrador de Vehiculos
      </Typography>
      <CarsWrapper />
    </Container>
  );
}
