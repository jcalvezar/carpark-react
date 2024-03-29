import React, { useState } from "react";
//import { store } from "../Store/store";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/users/actions";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Modal from "../Modal";

export default function MiModal(props) {
  const [row, setRow] = useState(false);
  const [idx, setIdx] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    if (idx >= 0) {
      console.log("UPDATE un User: " + JSON.stringify(row));
    } else {
      console.log("ADD un User: " + JSON.stringify(row));
      dispatch(addUser(row));
    }
  };

  const handleInputChange = (event) => {
    setRow({
      ...row,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Modal
      myRef={props.myRef}
      //guardar={props.guardar}
      title={row.id === "0" ? "Editar un Usuario" : "Agregar un Usuario"}
      setRow={setRow}
      setIdx={setIdx}
      handleUpdate={handleUpdate}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstname"
            name="firstname"
            label="Nombre"
            defaultValue={row.id === "0" ? row.firstname : ""}
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
            defaultValue={row.id === "0" ? row.lastname : ""}
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
            defaultValue={row.id === "0" ? row.email : ""}
            onChange={handleInputChange}
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Activar o Desactivar Usuario"
          />
        </Grid>
      </Grid>
    </Modal>
  );
}
