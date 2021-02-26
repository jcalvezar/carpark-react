import React, { useState } from 'react';
import Modal from '../Modal';

export default function MiModal(props) {
    const [row, setRow] = useState(false);

    return (
        <Modal myRef={props.myRef} title="Editar Vehiculos" setRow={setRow}>
            prueba de JCA de Vehiculos
        </Modal>
    )
}