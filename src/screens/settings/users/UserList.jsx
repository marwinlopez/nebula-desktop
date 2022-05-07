import { Fab, Tooltip, Typography } from '@mui/material';
import { DataGrid, esES } from '@mui/x-data-grid';
import './users.scss';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Modal from '../../../components/modal/Modal';
import { Columns } from '../../../components/users/columns/Columns';
import { useUsersContext } from '../../../context/UsersContext';
import { useGlobalContext } from '../../../hooks/useGlobalContext';
import GridSimple from '../../../components/table/GridSimple';

const UserList = () => {
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
		<div className='main users'>
			<div className='title'>
				<div className='azul'></div>
				<Typography>Lista de Usuarios</Typography>
			</div>
			<GridSimple rows={rows} columns={Columns} />
			<Tooltip
				title='Agregar nuevo usuario'
				aria-label='add'
				style={{
					position: 'absolute',
					bottom: 20,
					right: 10,
				}}
				onClick={() => {
					window.api.request('openChild', {
						url: `/modal/users/${JSON.stringify({
							token,
							type: 'create',
							user: {
								tenantId: global.tenantId,
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
