import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import { Settings } from "@mui/icons-material/SettingsApplications";
import StoreIcon from '@mui/icons-material/Store';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
export const routes = [
	{
		name: 'Dashboard',
		icon: <HomeIcon className='icon' />,
		to: '/',
		showInDrawer: false,
	},
	{
		name: 'Productos',
		icon: (
			<StoreIcon
				style={{
					fontSize: '18px',
					color: '#7451f8',
				}}
			/>
		),
		to: '/product',
		showInDrawer: false,
		items: [
			{
				name: 'Lista',
				icon: <PeopleAltIcon className='icon' />,
				to: '/product/list',
				showInDrawer: false,
			},
			{
				name: 'Nuevo',
				icon: <PersonOutlineIcon className='icon' />,
				to: '/product/create',
				showInDrawer: false,
			},
		],
	},
	{
		name: 'Configuración',
		icon: (
			<PowerSettingsNewIcon
				style={{
					fontSize: '18px',
					color: '#7451f8',
				}}
			/>
		),
		to: '/settings',
		showInDrawer: false,
		items: [
			{
				name: 'Roles',
				icon: <PeopleAltIcon className='icon' />,
				to: '/settings/roles',
				showInDrawer: false,
			},
			{
				name: 'Usuarios',
				icon: <PersonOutlineIcon className='icon' />,
				to: '/settings/users',
				showInDrawer: false,
			},
			{
				name: 'Permissions',
				icon: <PersonOutlineIcon className='icon' />,
				to: '/settings/permissions',
				showInDrawer: false,
			},
		],
	},
];
