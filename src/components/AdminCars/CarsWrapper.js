import React from "react";
import { useSelector } from "react-redux";
import JTabla from "../JTable";
import Modal from "./Modal";

export default function AdminCars() {
  const { cars, carsFields } = useSelector((state) => state.carsReducer);

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
        title={"Vehiculos"}
        fields={carsFields}
        rows={cars}
        editable={true}
        handleAdd={handleAdd}
        handleDel={handleDel}
        handleEdit={handleEdit}
      />
      <Modal />
    </>
  );
}
