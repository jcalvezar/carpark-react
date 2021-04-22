import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import JTabla from "../JTable";
import ModalCars from "../AdminCars/Modal";
import ModalUsers from "../AdminUsers/Modal";
import ModalParkings from "../AdminParkings/Modal";

export default function Dashboard() {
  const { users: myUsers, usersFields } = useSelector(
    (state) => state.usersReducer
  );
  const { cars: myCars, carsFields } = useSelector(
    (state) => state.carsReducer
  );
  const { parkings: myParkings, parkingsFields } = useSelector(
    (state) => state.parkingsReducer
  );
  const { logs: myLogs, logsFields } = useSelector(
    (state) => state.logsReducer
  );

  return (
    <>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={6} lg={6}>
          <JTabla
            title={"Usuarios"}
            fields={usersFields}
            rows={myUsers}
            canAdd={true}
            modal={ModalUsers}
          />
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={6}>
          <JTabla
            title={"Logs"}
            fields={logsFields}
            rows={myLogs}
            canAdd={false}
            modal={null}
          />
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12} md={6} lg={6}>
          <JTabla
            title={"Estacionamientos"}
            fields={parkingsFields}
            rows={myParkings}
            canAdd={true}
            modal={ModalParkings}
          />
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12} md={6} lg={6}>
          <JTabla
            title={"Vehiculos"}
            fields={carsFields}
            rows={myCars}
            canAdd={true}
            modal={ModalCars}
          />
        </Grid>
      </Grid>
    </>
  );
}
