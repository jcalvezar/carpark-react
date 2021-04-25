import React from "react";
import { useSelector } from "react-redux";
import JTabla from "../JTable";

export default function AdminCars() {
  const { logs, logsFields } = useSelector((state) => state.logsReducer);

  return (
    <>
      <JTabla
        title={"Bitacora"}
        fields={logsFields}
        rows={logs}
        editable={false}
        handleAdd={null}
        handleDel={null}
        handleEdit={null}
      />
    </>
  );
}
