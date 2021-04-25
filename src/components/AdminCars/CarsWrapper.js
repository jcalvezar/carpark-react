import React, { useState } from "react";
import { useSelector } from "react-redux";
import JTabla from "../JTable";
import Modal from "./Modal";

export default function AdminCars() {
  const { cars, carsFields } = useSelector((state) => state.carsReducer);
  const [row, setRow] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handleAdd = () => {
    console.log("Add...");
    setRow({ id: "0", datein: "", vin: "", puesto: "" });
    setModalTitle("Agregar Vehiculo");
    setOpenModal(true);
  };

  const handleEdit = (selectedRow) => {
    console.log("Edit...");
    setRow(selectedRow);
    setModalTitle("Editar Vehiculo");
    setOpenModal(true);
  };

  const handleDel = () => {
    console.log("Del...");
  };

  return (
    <>
      <JTabla
        title={"Vehiculos"}
        fields={carsFields}
        rows={cars}
        editable={true}
        handleAdd={handleAdd}
        handleDel={handleDel}
        handleEdit={handleEdit}
      />
      <Modal
        title={modalTitle}
        open={openModal}
        row={row}
        setOpen={setOpenModal}
      />
    </>
  );
}
