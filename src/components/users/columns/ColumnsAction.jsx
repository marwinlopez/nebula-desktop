import { IconButton } from '@mui/material';
import {
	DeleteOutlineRounded,
	EditOutlined,
	VisibilityOutlined,
} from '@mui/icons-material';
import { useUsersContext } from '../../../context/UsersContext';

const ColumnsAction = ({ params }) => {
	const { users, token } = useUsersContext();

	const view = e => {
		const user = users.filter(u => u.id === params.id).shift();
		console.log(user);
		window.api.request('openChild', {
			url: `/modal/users/${JSON.stringify({ token, type: 'view', user })}`,
			width: 500,
			height: 370,
		});
	};
	const edit = e => {
		const user = users.filter(u => u.id === params.id).shift();
		window.api.request('openChild', {
			url: `/modal/users/${JSON.stringify({ token, type: 'update', user })}`,
			width: 500,
			height: 620,
		});
	};
	const deleteItem = e => {
		const user = users.filter(u => u.id === params.id).shift();
		window.api.request('openChild', {
			url: `/modal/users/${JSON.stringify({ token, type: 'delete', user })}`,
			width: 500,
			height: 370,
		});
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
