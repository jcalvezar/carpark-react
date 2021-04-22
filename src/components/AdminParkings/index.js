import React from "react";
import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import JTabla from "../JTable";
import ModalParkings from "./Modal";

export default function AdminEstacionamientos() {
  const { parkings, parkingsFields } = useSelector(
    (state) => state.parkingsReducer
  );

  return (
    <Container fixed style={{ paddingTop: "20px" }}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Administrador de Estacionamientos
      </Typography>
      <JTabla
        title={"Estacionamientos"}
        fields={parkingsFields}
        rows={parkings}
        canAdd={true}
        modal={ModalParkings}
      />
    </Container>
  );
}
