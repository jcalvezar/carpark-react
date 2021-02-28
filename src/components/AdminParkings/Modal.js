import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Modal from '../Modal';

export default function MiModal(props) {
	const [row, setRow] = useState(false);

	const handleUpdate = () => {
		console.log(row.id === '0' ? "UPDATE un Parking" : "ADD un Parking");
	}

	return (
		<Modal myRef={props.myRef} title={row.id === '0' ? "Editar un Estacionamiento" : "Agregar un Estacionamiento"} setRow={setRow} handleUpdate={handleUpdate}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<TextField
						required
						id="nombre"
						name="nombre"
						label="Estacionamiento"
						defaultValue={row.id === '0' ? row.name : ""}
						fullWidth
						autoComplete="email"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="desde"
						name="desde"
						label="Desde"
						defaultValue={row.id === '0' ? row.from : ""}
						fullWidth
						autoComplete="given-name"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="hasta"
						name="hasta"
						label="Hasta"
						defaultValue={row.id === '0' ? row.to : ""}
						fullWidth
						autoComplete="family-name"
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
						label="Activar o Desactivar Estacionamiento"
					/>
				</Grid>
			</Grid>
		</Modal>
	)
}