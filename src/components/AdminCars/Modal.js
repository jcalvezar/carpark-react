import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Modal from '../Modal';

export default function MiModal(props) {
    const [row, setRow] = useState(false);

    const d = new Date();
    const datestring = (d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
        ("0" + d.getDate()).slice(-2)) + "T" + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

    const handleUpdate = () => {
        console.log(row.id === '0' ? "UPDATE un Vehiculo" : "ADD un Vehiculo");
    }

    return (
        <Modal myRef={props.myRef} title={row.id === '0' ? "Editar un Vehiculo" : "Agregar un Vehiculo"} setRow={setRow} handleUpdate={handleUpdate}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="ingreso"
                        label="Ingreso"
                        type="datetime-local"
                        defaultValue={row.id === '0' ? row.datein.replace(' ', 'T') : datestring}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="vin"
                        name="vin"
                        label="VIN"
                        defaultValue={row ? row.vin : ""}
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lugar"
                        name="lugar"
                        label="Lugar"
                        defaultValue={row ? row.place : ""}
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Activar o Desactivar"
                    />
                </Grid>
            </Grid>
        </Modal>
    )
}