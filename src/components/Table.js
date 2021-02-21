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

function preventDefault(event) {
	event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
	seeMore: {
		marginTop: theme.spacing(3),
		display: 'flex', justifyContent: 'flex-end'
	},
}));

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Orders(props) {
	const classes = useStyles();
	const headers = props.datas.fields;
	const rows = props.datas.rows;

	const thePadding = 'default';

	return (
		<React.Fragment>
			<Title>{props.title}</Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						{headers && headers.map((item, key) => (
							item.name === 'acc' ? <TableCell padding={thePadding} key={key} width={item.width} align="right">Acc</TableCell> : <TableCell padding={thePadding} key={key} width={item.width}>{capitalizeFirstLetter(item.name)}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows && rows.map((row) => (
						<TableRow key={row.id} style={{ height: 46 }}>
							{headers && headers.map((item, key) => (
								item.name === 'acc' ? (
									<TableCell padding={thePadding} key={key} align="right">
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
								)
									: <TableCell padding={thePadding} key={key}>{row[item.name]}</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className={classes.seeMore}>
				<Link color="primary" href="#" onClick={preventDefault}>
					Agregar un Registro Nuevo
        </Link>
			</div>
		</React.Fragment >
	);
}