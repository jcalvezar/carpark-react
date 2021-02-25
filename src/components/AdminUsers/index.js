import React, { useContext } from 'react';
import { store } from '../../store.js';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import JTabla from '../Table2';

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
	const users = {
		title: 'Usuarios',
		fields: state.usersFields,
		rows: state.users,
		canAdd: true
	};

	return (
		<Container fixed style={{ paddingTop: "20px" }}>
			<Typography component="h2" variant="h6" color="primary" gutterBottom>
				Administrador de Usuarios
    	</Typography>
			<Paper elevation={5} className={fixedHeightPaper}>
				<JTabla data={users} />
			</Paper>
		</Container>
	)
}