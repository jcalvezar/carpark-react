import React from "react";
import { useSelector } from "react-redux";
import JTabla from "../JTable";
import Modal from "./Modal";

export default function AdminCars() {
  const { parkings, parkingsFields } = useSelector(
    (state) => state.parkingsReducer
  );

  const handleAdd = () => {
    console.log("Add...");
  };

  const handleDel = () => {
    console.log("Del...");
  };

  const handleEdit = () => {
    console.log("Edit...");
  };

  return (
    <>
      <JTabla
        title={"Estacionamientos"}
        fields={parkingsFields}
        rows={parkings}
        editable={true}
        handleAdd={handleAdd}
        handleDel={handleDel}
        handleEdit={handleEdit}
      />
      <Modal />
    </>
  );
}
