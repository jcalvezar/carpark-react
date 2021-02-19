import React from 'react';
import Jmenu from "./Jmenu";

//import MemoryIcon from '@material-ui/icons/Memory';
import PollIcon from '@material-ui/icons/Poll';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CommuteIcon from '@material-ui/icons/Commute';
import CropFreeIcon from '@material-ui/icons/CropFree';
import BookIcon from '@material-ui/icons/Book';
import BackupIcon from '@material-ui/icons/Backup';

const menus = [
	{
		text: 'Menu',
		items: [
			{ icon: PollIcon, path: '/paneladmin', text: 'Panel de Admin' },
			{ icon: EmojiTransportationIcon, path: '/adminparkings', text: 'Admin de Estacionamientos' },
			{ icon: PeopleAltIcon, path: '/adminusers', text: 'Admin de Usuarios' },
			{ icon: CommuteIcon, path: '/admincars', text: 'Admin de Vehiculos' }
		]
	},
	{
		text: 'Listados',
		items: [
			{ icon: CommuteIcon, path: '/listavehiculos', text: 'Listado de Vehiculos' },
			{ icon: CropFreeIcon, path: '/generabarcode', text: 'Generador de Codigos de Barra' }
		]
	},
	{
		text: 'Seguridad',
		items: [
			{ icon: BookIcon, path: '/bitacora', text: 'Bitacora' },
			{ icon: BackupIcon, path: '/backup', text: 'Backups' },
		]
	},
];

export default function Jmenulist() {
	return (
		<>
			{ menus.map((x, key) => (<Jmenu key={key} text={x.text} items={x.items} />))}
		</>
	)
}