import { DataGrid } from '@mui/x-data-grid';

const columns = [
	{ field: 'id', headerName: 'Nro', width: 120 },
	{
		field: 'description',
		headerName: 'Descripción',
		width: 250,
		editable: true,
	},
	{
		field: 'cant',
		headerName: 'Cantidad',
		width: 150,
		editable: false,
	},
	{
		field: 'price',
		headerName: 'Precio',
		type: 'number',
		width: 150,
		editable: true,
	},
];

const rows = [
	{ id: 1, description: 'Snow', cant: 45, price: 35 },
	{ id: 2, description: 'Lannister', cant: 45, price: 42 },
	{ id: 3, description: 'Lannister', cant: 45, price: 45 },
	{ id: 4, description: 'Stark', cant: 45, price: 16 },
	{ id: 5, description: 'Targaryen', cant: 45, price: 10 },
	{ id: 6, description: 'Melisandre', cant: 10, price: 150 },
	{ id: 7, description: 'Clifford', cant: 45, price: 44 },
	{ id: 8, description: 'Frances', cant: 45, price: 36 },
	{ id: 9, description: 'Roxie', cant: 45, price: 65 },
];

const ListProduct = () => {
	return (
		<div className='main'>
			<div className='container'>
				<div style={{ height: 400, width: '100%' }}>
					<DataGrid
						rows={rows}
						columns={columns}
						pageSize={5}
						// checkboxSelection
						disableSelectionOnClick
					/>
				</div>
			</div>
		</div>
	);
};

export default ListProduct;
