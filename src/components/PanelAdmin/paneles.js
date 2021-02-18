import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Orders from './Orders';

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

	return (
		<>
			<Grid container spacing={3}>
				{/* Chart */}
				<Grid item xs={12} md={6} lg={6}>
					<Paper elevation={5} className={fixedHeightPaper}>
						<Orders title="Usuarios" />
					</Paper>
				</Grid>
				{/* Recent Deposits */}
				<Grid item xs={12} md={6} lg={6}>
					<Paper elevation={5} className={fixedHeightPaper}>
						<Orders title="Bitacora" />
					</Paper>
				</Grid>
				{/* Recent Orders */}
				<Grid item xs={12} md={6} lg={6}>
					<Paper elevation={5} className={fixedHeightPaper}>
						<Orders title="Estacionamientos" />
					</Paper>
				</Grid>
				{/* Recent Orders */}
				<Grid item xs={12} md={6} lg={6}>
					<Paper elevation={5} className={fixedHeightPaper}>
						<Orders title="Vehiculos" />
					</Paper>
				</Grid>
			</Grid>
		</>
	);
}