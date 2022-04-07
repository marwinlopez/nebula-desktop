import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { signInStyles } from '../../components/styles/signInStyles';
import Loader from '../../components/loader/Loader';

function Copyright() {
	return (
		<Typography variant='body2' align='center' style={{ color: '#fdfdfd' }}>
			{'Copyright © '}
			<Link color='inherit' href='/'>
				Nebula
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const SignIn = () => {
	const classes = signInStyles();
	const { global, signIn, isLoading } = useGlobalContext();
	const { user, remember, userName } = global;
	const [isRemember, setIsRemember] = useState(false);
	const [isError, setIsError] = useState({
		userName: {
			text: classes.text,
			message: classes.message,
			error: null,
		},
		password: {
			text: classes.text,
			message: classes.message,
			error: null,
		},
	});
	const [state, setState] = useState({
		userName: null,
		password: null,
		remember: false,
	});
	const navigate = useNavigate();

	useEffect(() => {
		setState(prevState => ({
			...prevState,
			userName,
			remember,
		}));
		setIsRemember(remember);
	}, [global]);

	const validate = () => {
		if (!state.userName && !state.password) {
			setIsError({
				...isError,
				userName: {
					text: classes.error,
					message: classes.message,
					error: 'Usuario es requerido!',
				},
				password: {
					text: classes.error,
					message: classes.message,
					error: 'La contraseña es requerido!',
				},
			});
			console.log('usuario && password vacio');
			return false;
		} else if (!state.userName) {
			setIsError({
				...isError,
				userName: {
					text: classes.error,
					message: classes.message,
					error: 'Usuario es requerido!',
				},
				password: {
					text: classes.text,
					message: classes.message,
					error: null,
				},
			});
			console.log('usuario vacio');
			return false;
		} else if (!state.password) {
			setIsError({
				...isError,
				userName: {
					text: classes.text,
					message: classes.message,
					error: null,
				},
				password: {
					text: classes.error,
					message: classes.message,
					error: 'La contraseña es requerido!',
				},
			});
			console.log('contraseña vacia');
			return false;
		}
		return true;
	};

	const enviar = e => {
		e.preventDefault();
		if (validate()) {
			signIn(state, isRemember, () => {
				navigate('/');
			}).then(res => {
				if (res.code) {
					console.log(res);
				} else {
					const { errorType, errorMessage } = res.errors;
					setIsError({
						...isError,
						[errorType]: {
							text: classes.error,
							message: classes.message,
							error: errorMessage,
						},
					});
				}
			});
		}
	};

	const handleInput = e => {
		const { id, value } = e.target;
		setState(prevState => ({
			...prevState,
			[id]: value,
		}));
		setIsError(prevState => ({
			...prevState,
			[id]: {
				text: classes.text,
				message: classes.message,
				error: '',
			},
		}));
	};

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className='signIn'>
			<div className='image'></div>
			<div className='paper'>
				<div className='logo'>
					<Avatar
						className={classes.avatar}
						src={require('../../assets/playstore.png')}
						sx={{ width: 100, height: 100 }}
					/>
				</div>
				<div className='title'>
					<Typography component='h1' variant='h5' className={classes.title}>
						{remember ? `Bienvenido ${user}` : 'Iniciar Sesión'}
					</Typography>
				</div>
				<div className='form-login'>
					<form className={classes.form} noValidate onSubmit={enviar}>
						{remember ? null : (
							<>
								<TextField
									variant='outlined'
									margin='dense'
									required
									fullWidth
									id='userName'
									label='Usuario o Correo electrónico'
									name='userName'
									autoComplete='userName'
									autoFocus
									size='small'
									className={isError.userName.text}
									InputLabelProps={{
										style: { color: isError.userName.label },
									}}
									onChange={handleInput}
								/>
								<Typography
									className={isError.userName.message}
									visibility={!isError.userName.error ? 'hidden' : 'visible'}
								>
									{isError.userName.error}
								</Typography>
							</>
						)}
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							label='Contraseña'
							type='password'
							id='password'
							size='small'
							className={isError.password.text}
							InputLabelProps={{
								style: { color: isError.password.label },
							}}
							onChange={handleInput}
							autoComplete='current-password'
						/>
						<Typography
							className={isError.password.message}
							visibility={!isError.password.error ? 'hidden' : 'visible'}
						>
							{isError.password.error}
						</Typography>
						{remember ? (
							<Grid
								container
								style={{
									height: '50px',
									margin: 0,
									textAlign: 'center',
									alignContent: 'center',
								}}
							>
								<Grid item xs={12}>
									<Link
										href='#'
										variant='body2'
										style={{
											textDecoration: 'auto',
											fontWeight: 'bold',
											color: '#d4d4d4',
										}}
										onClick={() =>
											window.api.request('token', {
												type: 'remove',
												channel: 'null',
												authData: null,
											})
										}
									>
										¿No eres {user}?
									</Link>
								</Grid>
							</Grid>
						) : (
							<FormControlLabel
								control={
									<Checkbox
										value='remember'
										onChange={() => {
											setIsRemember(isRemember => !isRemember);
										}}
										style={{ color: '#fff' }}
									/>
								}
								label='Recuérdame'
							/>
						)}
						<Button
							type='submit'
							fullWidth
							variant='outlined'
							style={{ color: '#fff', borderRadius: 15, borderColor: '#fff' }}
							className={classes.submit}
						>
							Iniciar
						</Button>
					</form>
				</div>
				<div className='footer-login'>
					<Box mt={5}>
						<Copyright />
					</Box>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
