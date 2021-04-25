import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Modal from "../Modal";

export default function MiModal(props) {
  const { open, setOpen, title, row } = props;

  const d = new Date();
  const datestring = (
    d.getFullYear() +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2) +
    "T" +
    ("0" + d.getHours()).slice(-2) +
    ":" +
    ("0" + d.getMinutes()).slice(-2) +
    ":" +
    ("0" + d.getSeconds()).slice(-2)
  ).replace("T", " ");

  return (
    <Modal title={title} open={open} setOpen={setOpen}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="ingreso"
            label="Ingreso"
            defaultValue={row && row.datein !== "" ? row.datein : datestring}
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
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Activar o Desactivar"
          />
        </Grid>
      </Grid>
    </Modal>
  );
}
