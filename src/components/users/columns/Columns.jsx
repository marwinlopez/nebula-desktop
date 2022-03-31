import ColumnsAction from './ColumnsAction';

export const Columns = [
	{
		field: 'id',
		headerName: 'id',
		headerClassName: 'super-app-theme--header',
		minWidth: 150,
		hide: true,
		flex: 1,
	},
	{
		field: 'firstName',
		headerName: 'Nombre',
		headerClassName: 'super-app-theme--header',
		minWidth: 150,
		flex: 1,
		editable: true,
	},
	{
		field: 'lastName',
		headerName: 'Apellido',
		headerClassName: 'super-app-theme--header',
		minWidth: 150,
		flex: 1,
		editable: true,
	},
	{
		field: 'userName',
		headerName: 'Usuario',
		headerClassName: 'super-app-theme--header',
		minWidth: 150,
		flex: 1,
		editable: false,
	},
	{
		field: 'email',
		headerName: 'Correo Electrónico',
		headerClassName: 'super-app-theme--header',
		minWidth: 150,
		flex: 1,
	},
	{
		field: 'rol',
		headerName: 'Rol',
		headerClassName: 'super-app-theme--header',
		headerAlign: 'center',
		minWidth: 50,
		flex: 0.5,
		align: 'center',
		editable: false,
	},
	{
		field: 'action',
		headerName: 'Acciones',
		headerClassName: 'super-app-theme--header',
		headerAlign: 'center',
		minWidth: 150,
		flex: 1,
		align: 'center',
		disableClickEventBubbling: true,
		renderCell: params => {
			return <ColumnsAction params={params} />;
		},
		// editable: false,
	},
];
