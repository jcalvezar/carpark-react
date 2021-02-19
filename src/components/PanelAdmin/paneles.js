import React, { useContext } from 'react';
import { store } from '../../store.js';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Orders from '../Table';

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
		height: 390,
	},
}));

export default function Dashboard() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	const { state } = useContext(store);

	const users = { fields: [{ name: 'id', width: '8%' }, { name: 'lastname', width: '21%' }, { name: 'firstname', width: '25%' }, { name: 'email', width: '26%' }, { name: 'acc', width: '10%' }], rows: state.users };
	const parkings = { fields: [{ name: 'id', width: '10%' }, { name: 'name', width: '10%' }, { name: 'from', width: '10%' }, { name: 'to', width: '10%' }, { name: 'acc', width: '10%' }], rows: state.parkings };
	const cars = { fields: [{ name: 'id', width: '5%' }, { name: 'datein', width: '50%' }, { name: 'vin', width: '30%' }, { name: 'place', width: '5%' }, { name: 'acc', width: '10%' }], rows: state.cars };
	const logs = { fields: [{ name: 'id', width: '8%' }, { name: 'time', width: '32%' }, { name: 'origen', width: '12%' }, { name: 'lastname', width: '19%' }, { name: 'firstname', width: '19%' }, { name: 'action', width: '10%' }], rows: state.logs };

	return (
		<>
			<Grid container spacing={3}>
				{/* Chart */}
				<Grid item xs={12} md={6} lg={6}>
					<Paper elevation={5} className={fixedHeightPaper}>
						<Orders title="Usuarios" datas={users} />
					</Paper>
				</Grid>
				{/* Recent Deposits */}
				<Grid item xs={12} md={6} lg={6}>
					<Paper elevation={5} className={fixedHeightPaper}>
						<Orders title="Bitacora" datas={logs} />
					</Paper>
				</Grid>
				{/* Recent Orders */}
				<Grid item xs={12} md={6} lg={6}>
					<Paper elevation={5} className={fixedHeightPaper}>
						<Orders title="Estacionamientos" datas={parkings} />
					</Paper>
				</Grid>
				{/* Recent Orders */}
				<Grid item xs={12} md={6} lg={6}>
					<Paper elevation={5} className={fixedHeightPaper}>
						<Orders title="Vehiculos" datas={cars} />
					</Paper>
				</Grid>
			</Grid>
		</>
	);
}