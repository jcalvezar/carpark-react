import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Modal from '../Modal';

export default function MiModal(props) {
	const [row, setRow] = useState(false);

	return (
		<Modal myRef={props.myRef} title={row ? "Editar un Usuario" : "Agregar un Usuario"} setRow={setRow}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="firstName"
						name="firstName"
						label="Nombre"
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

