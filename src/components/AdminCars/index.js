import React from "react";
import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import JTabla from "../JTable";
import ModalCars from "./Modal";

export default function AdminCars() {
  const { cars, carsFields } = useSelector((state) => state.carsReducer);

  return (
    <Container fixed style={{ paddingTop: "20px" }}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Administrador de Vehiculos
      </Typography>
      <JTabla
        title={"Vehiculos"}
        fields={carsFields}
        rows={cars}
        canAdd={true}
        modal={ModalCars}
      />
    </Container>
  );
}
