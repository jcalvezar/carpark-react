import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Cars from './Cars';

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

	},
}));

export default function AdminEstacionamientos() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<Container fixed style={{ paddingTop: "20px" }}>
			<Typography component="h2" variant="h6" color="primary" gutterBottom>
				Administrador de Vehiculos
    	</Typography>
			<Paper elevation={5} className={fixedHeightPaper}>
				<Cars />
			</Paper>
		</Container>
	)
}