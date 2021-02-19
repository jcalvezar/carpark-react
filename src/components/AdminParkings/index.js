import React, { useContext } from 'react';
import { store } from '../../store.js';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import JTabla from '../Table';

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
	const parkings = { fields: [{ name: 'id', width: '10%' }, { name: 'name', width: '10%' }, { name: 'from', width: '10%' }, { name: 'to', width: '10%' }, { name: 'acc', width: '10%' }], rows: state.parkings };

	return (
		<Container fixed style={{ paddingTop: "20px" }}>
			<Typography component="h2" variant="h6" color="primary" gutterBottom>
				Administrador de Estacionamientos
    	</Typography>
			<Paper elevation={5} className={fixedHeightPaper}>
				<JTabla title="Estacionamientos" datas={parkings} />
			</Paper>
		</Container>
	)
}