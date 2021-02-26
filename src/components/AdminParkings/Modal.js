import React, { useState } from 'react';
import Modal from '../Modal';

export default function MiModal(props) {
    const [row, setRow] = useState(false);

    return (
        <Modal myRef={props.myRef} title="Editar Estacionamientos" setRow={setRow}>
            prueba de JCA de Estacionamientos
        </Modal>
    )
}