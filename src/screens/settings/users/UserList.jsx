import { Fab, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DataGrid, esES } from '@mui/x-data-grid';

import { useEffect, useMemo, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Modal from '../../../components/modal/Modal';
import { Columns } from '../../../components/users/columns/Columns';
import { useUsersContext } from '../../../context/UsersContext';

// const rows = [
// 	// {
// 	// 	id: 1,
// 	// 	nro: 1,
// 	// 	firstName: 'Snow',
// 	// 	lastName: 'Snow',
// 	// 	userName: 'admin',
// 	// 	rol: 'admin',
// 	// },
// 	// {
// 	// 	id: 2,
// 	// 	nro: 2,
// 	// 	firstName: 'Lannister',
// 	// 	lastName: 'Snow',
// 	// 	userName: 'admin',
// 	// 	rol: 'admin',
// 	// },
// 	// {
// 	// 	id: 3,
// 	// 	nro: 3,
// 	// 	firstName: 'Lannister',
// 	// 	lastName: 'Snow',
// 	// 	userName: 'admin',
// 	// 	rol: 'admin',
// 	// },
// 	// {
// 	// 	id: 4,
// 	// 	nro: 4,
// 	// 	firstName: 'Stark',
// 	// 	lastName: 'Snow',
// 	// 	userName: 'admin',
// 	// 	rol: 'admin',
// 	// },
// 	// {
// 	// 	id: 5,
// 	// 	nro: 5,
// 	// 	firstName: 'Targaryen',
// 	// 	lastName: 'Snow',
// 	// 	userName: 'admin',
// 	// 	rol: 'admin',
// 	// },
// 	// {
// 	// 	id: 6,
// 	// 	nro: 6,
// 	// 	firstName: 'Melisandre',
// 	// 	lastName: 'Snow',
// 	// 	userName: 'admin',
// 	// 	rol: 'admin',
// 	// },
// 	// {
// 	// 	id: 7,
// 	// 	nro: 7,
// 	// 	firstName: 'Clifford',
// 	// 	lastName: 'Snow',
// 	// 	userName: 'admin',
// 	// 	rol: 'admin',
// 	// },
// 	// {
// 	// 	id: 8,
// 	// 	nro: 8,
// 	// 	firstName: 'Frances',
// 	// 	lastName: 'Snow',
// 	// 	userName: 'admin',
// 	// 	rol: 'admin',
// 	// },
// 	// {
// 	// 	id: 9,
// 	// 	nro: 9,
// 	// 	firstName: 'Roxie',
// 	// 	lastName: 'Snow',
// 	// 	userName: 'admin',
// 	// 	rol: 'admin',
// 	// },
// ];

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
			// '& .MuiDataGrid-iconSeparator': {
			// 	display: 'none',
			// },
			// '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
			// 	borderRight: '1px solid #f0f0f0',
			// 	backgroundColor: '#e6e9ef',
			// },
			'& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
				borderBottom: '1px solid #f0f0f0',
				// backgroundColor: '#f4f4f5',
				fontSize: 12,
			},
			// '& .MuiDataGrid-cell--editable': {
			// 	backgroundColor: '#fff',
			// },
			// '& .Mui-error': {
			// 	backgroundColor: '#ffe6e6',
			// 	color: '#ff4343',
			// },
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

const UserList = () => {
	const classes = useStyles();
	const { users, showData } = useUsersContext();
	const [currentPage, setCurrentPage] = useState(1);
	const [rows, setRows] = useState([]);
	const [open, setOpen] = useState(false);
	const [data, setData] = useState({
		nro: 0,
		title: 'Nuevo Usuario',
		disabled: false,
	});
	useEffect(() => {
		showData();
	}, []);
	useEffect(() => {
		console.log(users);

		// console.log(resp);
		// const _users = new Users();
		// _users.listUser();
		// const skip = currentPage === 1 ? 0 : (currentPage - 1) * 10;
		// const take = currentPage === 1 ? 10 : currentPage * 10;
		// axios.get(`${config.ip}/api/v1/users`).then(resp => {
		// 	if (resp.status === 200) {
		// 		const { users } = resp.data;
		// 		// console.log(users);
		setRows(
			users.map(u => {
				const row = {
					id: u.id,
					firstName: u.firstName,
					lastName: u.lastName,
					userName: u.userName,
					email: u.email,
					rol: u.rol.name,
				};
				return row;
			})
		);
		// 	}
		// });
	}, [users]);

	// const currentlySelected = params => {
	// 	const value = params.colDef.field;
	// 	// if (!(value === 'action')) {
	// 	// 	return;
	// 	// }
	// 	// console.log(btnAction);
	// };

	return (
		<div className='main'>
			<div className='container'>
				<div className='title'>
					<Typography>Lista de Usuarios</Typography>
				</div>
				<div className={classes.root} style={{ height: 350, width: '100%' }}>
					<DataGrid
						disableColumnMenu
						headerHeight={30}
						disableDensitySelector
						rows={rows}
						columns={Columns}
						pageSize={5}
						// onCellClick={currentlySelected}
						// checkboxSelection
						disableSelectionOnClick
						localeText={esES.components.MuiDataGrid.defaultProps.localeText}
					/>
				</div>
			</div>
			<Tooltip
				title='Add'
				aria-label='add'
				style={{
					position: 'absolute',
					bottom: 10,
					right: 10,
				}}
				onClick={() => {
					window.api.request('modal', {
						url: '/modal/create-users',
						width: 400,
						height: 500,
					});
					// setData({
					// 	nro: 0,
					// 	title: 'Nuevo Usuario',
					// 	type: 'new',
					// 	firstName: '',
					// 	lastName: '',
					// 	userName: '',
					// 	disabled: false,
					// });
					// setOpen(true);
				}}
			>
				<Fab color='secondary'>
					<AddIcon />
				</Fab>
			</Tooltip>
			<Modal open={open} setOpen={setOpen} data={data} />
		</div>
	);
};

export default UserList;
