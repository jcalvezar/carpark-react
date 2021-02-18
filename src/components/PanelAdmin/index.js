import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Dashboard from './paneles'

export default function PanelAdmin() {

	return (
		<Container fixed style={{ paddingTop: "20px" }}>
			<Typography component="h2" variant="h6" color="primary" gutterBottom>
				Panel de Administrador
    </Typography>
			<Dashboard />
		</Container>
	)
}