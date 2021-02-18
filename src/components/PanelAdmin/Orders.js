import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

// Generate Order Data
function createData(id, lastname, firstname, email) {
	return { id, lastname, firstname, email };
}

const rows = [
	createData(0, 'Pardo', 'Gabriel', 'gpardo@hotmail.com'),
	createData(1, 'Mendez', 'Erica', 'emendez@hotmail.com'),
	createData(2, 'Malgor', 'Patricia', 'pmalgor@hotmail.com'),
	createData(3, 'Alvez', 'Juan Carlos', 'jalvez@hotmail.com'),
	createData(4, 'Perez', 'Juan', 'jperez@hotmail.com'),
];

function preventDefault(event) {
	event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
	seeMore: {
		marginTop: theme.spacing(3),
	},
}));

export default function Orders(props) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Title>{props.title}</Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Lastname</TableCell>
						<TableCell>Firstname</TableCell>
						<TableCell>Email</TableCell>
						<TableCell align="right">Acc</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.id}</TableCell>
							<TableCell>{row.lastname}</TableCell>
							<TableCell>{row.firstname}</TableCell>
							<TableCell>{row.email}</TableCell>
							<TableCell align="right">
								<ButtonGroup size="small" color="primary" aria-label="contained primary small button group">
									<Tooltip title="Editar">
										<IconButton aria-label="Editar">
											<EditIcon />
										</IconButton>
									</Tooltip>
									<Tooltip title="Borrar">
										<IconButton color="secondary" aria-label="Borrar">
											<DeleteIcon />
										</IconButton>
									</Tooltip>
								</ButtonGroup>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className={classes.seeMore}>
				<Link color="primary" href="#" onClick={preventDefault}>
					See more orders
        </Link>
			</div>
		</React.Fragment >
	);
}