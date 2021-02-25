import React from 'react';
import Modal from '../Modal';

export default function miModal(props) {
    console.log('MyModal de Cars');

    return (
        <Modal myRef={props.myRef} title="Editar Vehiculos">
            prueba de JCA de Vehiculos
        </Modal>
    )
}