import { useCallback, useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { DeleteForeverSharp, ExitToAppSharp } from '@mui/icons-material';
import { useGlobalContext } from '../../../hooks/useGlobalContext';
import SelectRol from '../../../components/select/SelectRol';

const useStyles = makeStyles(theme => ({
	text: {
		'& label.Mui-focused': {
			color: '#571057 !important',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#571057',
		},
		'& .MuiInputBase-input': {
			fontSize: '13px',
			fontWeight: 'bold',
			'& .Mui-disabled': {
				color: '#571057 !important',
			},
		},

		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#571057 !important',
			},
			'&:hover fieldset': {
				borderColor: '#571057',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#571057',
			},
		},
		'& .MuiInputLabel-root': {
			fontSize: '14px',
			color: '#571057 !important',
		},
	},
	option: {
		fontSize: '0.8rem',
		height: '10px',
		'& :hover': {
			backgroundColor: '#571057',
		},
		'& .Mui-selected': {
			backgroundColor: 'rgb(57, 10, 57, 8%)',
		},
	},
}));

const ModalUser = () => {
	const classes = useStyles();
	const params = useParams();
	const { closeWindows, getRoles } = useGlobalContext();
	const [state, setState] = useState({
		firstName: null,
		lastName: null,
		userName: null,
		email: null,
		rol: null,
	});
	const [isToken, setIsToken] = useState(null);
	const [isAction, setIsAction] = useState({
		title: '',
		btnGuardar: false,
		btnDelete: false,
		btnUpdate: false,
		btnCancel: false,
		btnExit: true,
	});
	const [isUpdateOrCreate, setIsUpdateOrCreate] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [roles, setRoles] = useState([]);

	useEffect(() => {
		const urlParams = JSON.parse(params.id);
		const { type, user, token } = urlParams;
		setState({ ...state, ...user });
		setIsToken(token);
		switch (type) {
			case 'view':
				setTimeout(() => {
					setIsUpdateOrCreate(false);
				}, 300);
				setIsAction({ ...isAction, title: 'Vista previa' });
				break;
			case 'update':
				setIsAction({
					...isAction,
					title: `Editar Usuario`,
					btnUpdate: true,
					btnCancel: true,
				});
				setTimeout(() => {
					setIsUpdateOrCreate(true);
				}, 300);
				break;
			case 'delete':
				setTimeout(() => {
					setIsUpdateOrCreate(false);
				}, 300);
				setIsAction({
					...isAction,
					title: `Eliminar Usuario`,
					btnDelete: true,
				});
				break;
			case 'create':
				setTimeout(() => {
					setIsUpdateOrCreate(true);
				}, 300);
				setIsAction({
					...isAction,
					title: `Nuevo Usuario`,
					btnGuardar: true,
					btnCancel: true,
				});
				break;

			default:
				console.log('first');
				break;
		}
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
		return isUpdateOrCreate;
	}, []);

	useEffect(() => {
		const { rol } = state;
		if (rol) {
			const { id } = state.rol;
			console.log(state.rol);
			setState({
				...state,
				rol: {
					id: id,
				},
			});
			// getRoles(isToken).then(resp => {
			// 	setRoles(resp);
			// });
		}
	}, []);

	const handleCloseWindows = () => {
		closeWindows(true);
	};

	const handleInput = useCallback(e => {
		const { id, value } = e.target;
		if (typeof id === 'undefined') {
			setState(prevState => ({
				...prevState,
				rol: {
					id: value,
				},
			}));
		} else {
			setState(prevState => ({
				...prevState,
				[id]: value,
			}));
		}
	}, []);

	const createUser = () => {
		console.log('Crear');
	};

	const updateUser = () => {
		console.log('editar');
	};

	const deleteUser = () => {
		console.log('eliminar');
	};

	if (isLoading) {
		return null;
	}

	return (
		<div className='modal'>
			<div className='modal-container'>
				<div className='modal-title'>
					<h1 className='title'>{isAction.title}</h1>
				</div>
				<div className='modal-dialog'>
					<form noValidate autoComplete='off'>
						<TextField
							id='firstName'
							label='Nombres'
							variant='outlined'
							fullWidth
							defaultValue={state.firstName}
							style={{ marginBottom: '15px' }}
							className={classes.text}
							size='small'
							disabled={!isUpdateOrCreate}
							onChange={handleInput}
						/>
						<TextField
							id='lastName'
							disabled={!isUpdateOrCreate}
							label='Apellidos'
							variant='outlined'
							fullWidth
							defaultValue={state.lastName}
							style={{
								marginBottom: 15,
							}}
							className={classes.text}
							size='small'
							onChange={handleInput}
						/>
						<TextField
							id='userName'
							disabled={!isUpdateOrCreate}
							label='Usuario'
							variant='outlined'
							fullWidth
							defaultValue={state.userName}
							style={{
								marginBottom: 15,
							}}
							className={classes.text}
							size='small'
							onChange={handleInput}
						/>
						<TextField
							id='email'
							disabled={!isUpdateOrCreate}
							label='Correo Electrónico'
							variant='outlined'
							fullWidth
							defaultValue={state.email}
							style={{
								marginBottom: 15,
							}}
							className={classes.text}
							size='small'
							onChange={handleInput}
						/>

						{isUpdateOrCreate ? (
							<TextField
								id='confirm-email'
								label='Confirmar Correo Electrónico'
								variant='outlined'
								fullWidth
								style={{
									marginBottom: 15,
								}}
								className={classes.text}
								size='small'
								onChange={handleInput}
							/>
						) : null}

						<FormControl
							variant='outlined'
							disabled={!isUpdateOrCreate}
							fullWidth
							size='small'
							className={classes.text}
							style={{
								marginBottom: 15,
							}}
						>
							<InputLabel id='rol-label'>Rol</InputLabel>
							<SelectRol
								isToken={isToken}
								rol={state.rol}
								handleInput={handleInput}
								option={classes.option}
							/>
						</FormControl>
					</form>
					<div className='btn-container'>
						{isAction.btnGuardar || isAction.btnUpdate ? (
							<Button
								key='save'
								title='Guardar'
								className='buttom'
								onClick={isAction.btnGuardar ? createUser : updateUser}
							>
								<SaveIcon />
								Guardar
							</Button>
						) : null}
						{isAction.btnDelete ? (
							<Button
								key='save'
								title='Delete'
								className='buttom'
								onClick={deleteUser}
							>
								<DeleteForeverSharp />
								Eliminar
							</Button>
						) : null}
						{isAction.btnCancel ? (
							<Button key='cancel' className='buttom'>
								<CloseIcon />
								Cancelar
							</Button>
						) : null}
						<Button key='exit' className='buttom' onClick={handleCloseWindows}>
							<ExitToAppSharp />
							Cerrar
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalUser;
