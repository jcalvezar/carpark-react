import React, { useContext } from 'react';
import { store } from '../../store.js';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import JTable from '../Table2';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 360,
	},
}));

export default function Dashboard() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	const { state } = useContext(store);

	const users = { title: 'Usuarios', fields: state.usersFields, rows: state.users };
	const parkings = { title: 'Estacionamientos', fields: state.parkingsFields, rows: state.parkings };
	const cars = { title: 'Vehiculos', fields: state.carsFields, rows: state.cars };
	const logs = { title: 'Bitacora', fields: state.logsFields, rows: state.logs };

	return (
		<>
			<Grid container spacing={3}>
				{/* Chart */}
				<Grid item xs={12} md={6} lg={6}>
					<Paper elevation={5} className={fixedHeightPaper}>
						<JTable data={users} />
					</Paper>
				</Grid>
				{/* Recent Deposits */}
				<Grid item xs={12} md={6} lg={6}>
					<Paper elevation={5} className={fixedHeightPaper}>
						<JTable data={logs} />
					</Paper>
				</Grid>
				{/* Recent Orders */}
				<Grid item xs={12} md={6} lg={6}>
					<Paper elevation={5} className={fixedHeightPaper}>
						<JTable data={parkings} />
					</Paper>
				</Grid>
				{/* Recent Orders */}
				<Grid item xs={12} md={6} lg={6}>
					<Paper elevation={5} className={fixedHeightPaper}>
						<JTable data={cars} />
					</Paper>
				</Grid>
			</Grid>
		</>
	);
}