import React from "react";
import { useSelector } from "react-redux";
import JTabla from "../JTable";
import Modal from "./Modal";

export default function AdminCars() {
  const { users, usersFields } = useSelector((state) => state.usersReducer);

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
        title={"Usuarios"}
        fields={usersFields}
        rows={users}
        editable={true}
        handleAdd={handleAdd}
        handleDel={handleDel}
        handleEdit={handleEdit}
      />
      <Modal />
    </>
  );
}
