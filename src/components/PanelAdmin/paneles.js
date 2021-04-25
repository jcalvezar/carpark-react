import React from "react";
import Grid from "@material-ui/core/Grid";
import CarsWrapper from "../AdminCars/CarsWrapper";
import UsersWrapper from "../AdminUsers/UsersWrapper";
import ParkingsWrapper from "../AdminParkings/ParkingsWrapper";
import LogsWrapper from "../AdminLogs/LogsWrapper";

export default function Dashboard() {
  return (
    <>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={6} lg={6}>
          <UsersWrapper />
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={6}>
          <LogsWrapper />
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12} md={6} lg={6}>
          <ParkingsWrapper />
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12} md={6} lg={6}>
          <CarsWrapper />
        </Grid>
      </Grid>
    </>
  );
}
