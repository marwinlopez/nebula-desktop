import { Fab, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DataGrid, esES } from '@mui/x-data-grid';

import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Modal from '../../../components/modal/Modal';
import { Columns } from '../../../components/users/columns/Columns';
import { useUsersContext } from '../../../context/UsersContext';
import { useGlobalContext } from '../../../hooks/useGlobalContext';

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

const UserList = () => {
	const classes = useStyles();
	const { users, showData, token } = useUsersContext();
	const { global } = useGlobalContext();
	const [rows, setRows] = useState([]);
	const [open, setOpen] = useState(false);
	const [data] = useState({
		nro: 0,
		title: 'Nuevo Usuario',
		disabled: false,
	});

	useEffect(() => {
		showData(global);
	}, []);

	useEffect(() => {
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
	}, [users]);

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
					window.api.request('openChild', {
						url: `/modal/users/${JSON.stringify({
							token,
							type: 'create',
							user: {
								firstName: null,
								lastName: null,
								userName: null,
								email: null,
								rol: { id: 0 },
							},
						})}`,
						width: 500,
						height: 420,
					});
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
