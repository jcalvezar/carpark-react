import React, { useContext } from 'react';
import { store } from '../../store.js';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
//import JTabla from '../Table';
import JTabla from '../Table2';
import ModalParkings from './Modal';

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

	const { state } = useContext(store);
	const parkings = {
		title: 'Estacionamientos',
		fields: state.parkingsFields,
		rows: state.parkings,
		canAdd: true,
		modal: ModalParkings
	};

	return (
		<Container fixed style={{ paddingTop: "20px" }}>
			<Typography component="h2" variant="h6" color="primary" gutterBottom>
				Administrador de Estacionamientos
    	</Typography>
			<Paper elevation={5} className={fixedHeightPaper}>
				<JTabla data={parkings} />
			</Paper>
		</Container>
	)
}