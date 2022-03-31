export const items = [
	{
		name: 'Inventario',
		isActive: true,
		moduls: [
			{
				name: 'Departamentos',
				to: '/inventory/shop',
				icon: <img src={require('../../img/departamentos.png')} />,
				isActive: true,
			},
			{
				name: 'Depósitos',
				to: '/inventory/warehouse',
				icon: <img src={require('../../img/tienda.png')} />,
				isActive: true,
			},
			{
				name: 'Ubicación por Productos',
				to: '/inventory/warehouse-location',
				icon: <img src={require('../../img/mapa.png')} />,
				isActive: true,
			},
			{
				name: 'Unidades de Medidas',
				to: '/inventory/unit-of-measurement',
				icon: <img src={require('../../img/unidad-medida.png')} />,
				isActive: true,
			},
			{
				name: 'Marcas',
				to: '/inventory/brand',
				icon: <img src={require('../../img/marca.png')} />,
				isActive: true,
			},
		],
	},
	{
		name: 'Ventas',
		isActive: true,
		moduls: [],
	},
	{
		name: 'Cuentas x Cobrar',
		isActive: true,
		moduls: [],
	},
	{
		name: 'Configuración',
		isActive: true,
		moduls: [
			{
				name: 'Usuarios',
				to: '/settings/users',
				icon: <img src={require('../../img/users.png')} />,
				isActive: true,
			},
			{
				name: 'Roles',
				to: '/settings/roles',
				icon: <img src={require('../../img/roles.png')} />,
				isActive: true,
			},
			{
				name: 'Permisos',
				to: '/settings/permissions',
				icon: <img src={require('../../img/permisos.png')} />,
				isActive: true,
			},
		],
	},
];
