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
		console.log(row ? "UPDATE un User" : "ADD un User");
		addUser({ firstname: 'Xavier', lastname: 'Alvez', email: 'emilio' });
		//dispatch({ type: 'ADD_USER', payload: { firstname: 'Xavier', lastname: 'Alvez', email: 'emilio' } });
	}

	return (
		<Modal myRef={props.myRef} title={row ? "Editar un Usuario" : "Agregar un Usuario"} setRow={setRow} handleUpdate={handleUpdate}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="firstName"
						name="firstName"
						label="Nombre"
						defaultValue={row ? row.firstname : ""}
						fullWidth
						autoComplete="given-name"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="lastName"
						name="lastName"
						label="Apellido"
						defaultValue={row ? row.lastname : ""}
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
						defaultValue={row ? row.email : ""}
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

