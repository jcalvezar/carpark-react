import React, { useState, useContext } from 'react';
import { store } from '../../store.js';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Modal from '../Modal';

export default function MiModal(props) {
	const { addUser } = useContext(store);
	const [row, setRow] = useState(false);

	const handleUpdate = () => {
		console.log(row.id === '0' ? "UPDATE un User: " + JSON.stringify(row) : "ADD un User: " + JSON.stringify(row));
		addUser(row);
	}
	/*
		const initialState = {
			email: row ? row.email : "",
			firstname: row ? row.firstname : "",
			lastname: row ? row.lastname : ""
		};
		const [data, setData] = React.useState(initialState);
		*/
	const handleInputChange = event => {
		setRow({
			...row,
			[event.target.name]: event.target.value
		});
	};

	return (
		<Modal myRef={props.myRef} title={row.id === '0' ? "Editar un Usuario" : "Agregar un Usuario"} setRow={setRow} handleUpdate={handleUpdate}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="firstname"
						name="firstname"
						label="Nombre"
						defaultValue={row.id === '0' ? row.firstname : ""}
						onChange={handleInputChange}
						fullWidth
						autoComplete="given-name"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="lastname"
						name="lastname"
						label="Apellido"
						defaultValue={row.id === '0' ? row.lastname : ""}
						onChange={handleInputChange}
						fullWidth
						autoComplete="family-name"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						id="email"
						name="email"
						label="Email"
						defaultValue={row.id === '0' ? row.email : ""}
						onChange={handleInputChange}
						fullWidth
						autoComplete="email"
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
						label="Activar o Desactivar Usuario"
					/>
				</Grid>
			</Grid>
		</Modal>
	)
}

