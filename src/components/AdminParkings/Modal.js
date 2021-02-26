import React, { useState } from 'react';
import Modal from '../Modal';

export default function MiModal(props) {
    const [row, setRow] = useState(false);

    return (
        <Modal myRef={props.myRef} title={row ? "Editar un Estacionamiento" : "Agregar un Estacionamiento"} setRow={setRow}>
            prueba de JCA de Estacionamientos
        </Modal>
    )
}