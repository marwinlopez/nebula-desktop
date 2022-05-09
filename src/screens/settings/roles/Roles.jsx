import { Typography } from '@mui/material';
import './roles.scss';
import { makeStyles } from '@mui/styles';
import { DataGrid, esES } from '@mui/x-data-grid';
import GridSimple from '../../../components/table/GridSimple';

const useStyles = makeStyles({
	root: {
		'& .super-app-theme--header': {
			backgroundColor: '#571057',
			color: '#fff',
			fontSize: 10,
			'& span': {
				color: '#fff',
			},
		},
		'& .MuiDataGrid-root': { borderRadius: '5px !important' },
		'& .MuiDataGrid-main': {
			'& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
				borderBottom: '1px solid #f0f0f0',
				fontSize: 12,
			},

			'& .MuiDataGrid-columnsContainer': {
				borderTopLeftRadius: 5,
				borderTopRightRadius: 5,
				backgroundColor: '#571057',
				color: '#fff',
				fontSize: 10,
				'& .MuiDataGrid-columnHeader': {
					fontSize: 12,
					width: 50,
				},
				'& span': {
					color: '#fff',
				},
			},
		},
	},
});

const rows = [
	{ id: 1, col1: 'Hello', col2: 'World', col3: 'World' },
	{ id: 2, col1: 'XGrid', col2: 'is Awesome', col3: 'World' },
	{ id: 3, col1: 'Material-UI', col2: 'is Amazing', col3: 'World' },
	{ id: 4, col1: 'Hello', col2: 'World', col3: 'World' },
	{ id: 5, col1: 'XGrid', col2: 'is Awesome', col3: 'World' },
	{ id: 6, col1: 'Material-UI', col2: 'is Amazing', col3: 'World' },
];

const columns = [
	{ field: 'id', hide: true },
	{
		field: 'col1',
		headerName: 'Column 1',
		headerClassName: 'super-app-theme--header',
		minWidth: 150,
		flex: 1,
	},
	{
		field: 'col2',
		headerName: 'Column 2',
		headerClassName: 'super-app-theme--header',
		minWidth: 150,
		flex: 1,
	},
	{
		field: 'col3',
		headerName: 'Column 3',
		headerClassName: 'super-app-theme--header',
		minWidth: 150,
		flex: 1,
	},
];

const Roles = () => {
	const classes = useStyles();
	return (
		<div className='main roles'>
			<div className='title'>
				<Typography>Lista de Roles</Typography>
			</div>
			<div className='lista' style={{ height: '90%', width: '100%' }}>
				<GridSimple rows={rows} columns={columns} />
				{/* <DataGrid
					className={classes.root}
					disableColumnMenu
					headerHeight={30}
					disableDensitySelector
					rows={rows}
					columns={columns}
					pageSize={5}
					disableSelectionOnClick
					localeText={esES.components.MuiDataGrid.defaultProps.localeText}
				/> */}
			</div>
		</div>
	);
};

export default Roles;
