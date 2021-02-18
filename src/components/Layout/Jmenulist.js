import React from 'react';
import Jmenu from "./Jmenu";

import MemoryIcon from '@material-ui/icons/Memory';
import PollIcon from '@material-ui/icons/Poll';

const menus = [
	{
		text: 'Menu',
		items: [
			{ icon: MemoryIcon, path: '/paneladmin', text: 'Panel de Admin' },
			{ icon: PollIcon, path: '/adminparkings', text: 'Admin de Estacionamientos' },
			{ icon: MemoryIcon, path: '/adminusers', text: 'Admin de Usuarios' },
			{ icon: PollIcon, path: '/admincars', text: 'Admin de Vehiculos' }
		]
	},
	{
		text: 'Listados',
		items: [
			{ icon: MemoryIcon, path: '/listavehiculos', text: 'Listado de Vehiculos' },
			{ icon: PollIcon, path: '/generabarcode', text: 'Generador de Codigos de Barra' }
		]
	},
	{
		text: 'Seguridad',
		items: [
			{ icon: MemoryIcon, path: '/bitacora', text: 'Bitacora' },
			{ icon: PollIcon, path: '/backup', text: 'Backups' },
		]
	},
];

export default function Jmenulist() {
	return (
		<>
			{ menus.map(x => (<Jmenu text={x.text} items={x.items} />))}
		</>
	)
}