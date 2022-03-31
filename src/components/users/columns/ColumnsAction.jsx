import { IconButton } from '@mui/material';
import {
	DeleteOutlineRounded,
	EditOutlined,
	VisibilityOutlined,
} from '@mui/icons-material';
import { useUsersContext } from '../../../context/UsersContext';

const ColumnsAction = ({ params }) => {
	const { users } = useUsersContext();

	const view = e => {
		const user = users.filter(u => u.id === params.id).shift();
		console.log(user);
		window.api.request('modal', {
			url: `/modal/create-users/${JSON.stringify(user)}`,
			width: 500,
			height: 380,
		});
	};
	const edit = e => {
		// const modalAction = {
		// 	id: params.getValue(params.id, 'id'),
		// 	type: 'edit',
		// 	title: 'Editar',
		// 	firstName: 'Marin',
		// 	lastName: 'Suarez',
		// 	userName: 'marinsuarez',
		// 	disabled: false,
		// };
		// selectAction(modalAction);
	};
	const deleteItem = e => {
		// const modalAction = {
		// 	id: params.getValue(params.id, 'id'),
		// 	type: 'delete',
		// 	title: 'Eliminar',
		// 	firstName: 'Marin',
		// 	lastName: 'Suarez',
		// 	userName: 'marinsuarez',
		// 	disabled: true,
		// };
		// selectAction(modalAction);
	};

	return (
		<div>
			<IconButton
				title='Visualizar'
				color='primary'
				aria-label='upload picture'
				component='span'
				onClick={view}
			>
				<VisibilityOutlined />
			</IconButton>
			<IconButton
				title='Editar'
				color='primary'
				aria-label='upload picture'
				component='span'
				onClick={edit}
			>
				<EditOutlined />
			</IconButton>
			<IconButton
				title='Eliminar'
				color='secondary'
				aria-label='upload picture'
				component='span'
				onClick={deleteItem}
			>
				<DeleteOutlineRounded />
			</IconButton>
		</div>
	);
};

export default ColumnsAction;
