import { makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';

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
	{ field: 'col1', headerName: 'Column 1', minWidth: 150, flex: 1 },
	{ field: 'col2', headerName: 'Column 2', minWidth: 150, flex: 1 },
	{ field: 'col3', headerName: 'Column 3', minWidth: 150, flex: 1 },
];
const useStyles = makeStyles({
	root: {
		border: 0,
		'& .MuiDataGrid-root': { borderRadius: '15px !important' },
		'& .MuiDataGrid-main': {
			// '& .MuiDataGrid-iconSeparator': {
			// 	display: 'none',
			// },
			// '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
			// 	borderRight: '1px solid #f0f0f0',
			// 	backgroundColor: '#e6e9ef',
			// },
			// '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
			// 	borderBottom: '1px solid #f0f0f0',
			// 	backgroundColor: '#f4f4f5',
			// },
			// '& .MuiDataGrid-cell--editable': {
			// 	backgroundColor: '#fff',
			// },
			// '& .Mui-error': {
			// 	backgroundColor: '#ffe6e6',
			// 	color: '#ff4343',
			// },
			'& .MuiDataGrid-columnsContainer': {
				borderTopLeftRadius: 15,
				borderTopRightRadius: 15,
				backgroundColor: '#571057',
				color: '#fff',
				fontSize: 12,
				'& .MuiDataGrid-columnHeader': {
					fontSize: 15,
					width: 50,
				},
				'& span': {
					color: '#fff',
				},
			},
		},
	},
});
const Roles = () => {
	const classes = useStyles();
	return (
		<div className='main'>
			<div className='container'>
				<div className={classes.root} style={{ height: 300, width: '100%' }}>
					<DataGrid
						rows={rows}
						columns={columns}
						classes={{ columnHeader: classes.root }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Roles;
