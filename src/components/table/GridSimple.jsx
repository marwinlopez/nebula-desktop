import { DataGrid, esES } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';

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
const GridSimple = ({ rows, columns, classGrdiSimple }) => {
	const classes = useStyles();
	return (
		<div
			className={`${classes.root} lista`}
			style={{ height: '90%', width: '100%' }}
		>
			<DataGrid
				disableColumnMenu
				headerHeight={30}
				disableDensitySelector
				className={classGrdiSimple || null}
				rows={rows}
				columns={columns}
				pageSize={5}
				disableSelectionOnClick
				localeText={esES.components.MuiDataGrid.defaultProps.localeText}
			/>
		</div>
	);
};

export default GridSimple;
