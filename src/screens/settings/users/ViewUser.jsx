import { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Cancel, CancelSharp, Save } from '@mui/icons-material';

const useStyles = makeStyles(theme => ({
	root: {
		// position: 'absolute',
		// top: '15px',
		// bottom: '15px',
		// height: '100%',
		// width: '100%',
		margin: '15px',
		// padding: '15px',
		display: 'inline-flex',
		// flexDirection: 'row',
	},
	form: {
		backgroundColor: '#fff',
		// width: '70%',
		// height: '100%',
		padding: '15px',
	},
	buttomContainer: {
		display: 'flex',
		padding: 15,
		// width: '30%',
		flexDirection: 'column',
		backgroundColor: '#fff',
	},
	buttom: {
		display: 'flex',
		flexDirection: 'column',
		color: 'rgb(136, 136, 136)',
		marginBottom: '5px',
		backgroundColor: '#571057',
		fontSize: '0.5rem',
		'& hove': {
			backgroundColor: '#171057',
		},
	},
}));
const ViewUser = () => {
	const classes = useStyles();
	const params = useParams();
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const user = JSON.parse(params.id);
		console.log(user);
		// setTimeout(() => {
		setIsLoading(false);
		setData(user);
		// }, 2500);
	}, []);

	if (isLoading) {
		return null;
	}

	return (
		<div className={classes.root}>
			<div className={classes.form}>
				<form
					noValidate
					autoComplete='off'
					// style={{ display: 'contents', width: '100%', overflow: 'hidden' }}
				>
					<TextField
						id='outlined-basic'
						label='Nombres'
						variant='outlined'
						fullWidth
						defaultValue={data.firstName}
						style={{
							marginBottom: 15,
						}}
						size='small'
					/>
					<TextField
						id='outlined-basic'
						label='Apellidos'
						variant='outlined'
						fullWidth
						defaultValue={data.lastName}
						style={{
							marginBottom: 15,
						}}
						size='small'
					/>
					<TextField
						id='outlined-basic'
						label='userName'
						variant='outlined'
						fullWidth
						defaultValue={data.userName}
						style={{
							marginBottom: 15,
						}}
						size='small'
					/>
					<TextField
						id='outlined-basic'
						label='Correo Electrónico'
						variant='outlined'
						fullWidth
						defaultValue={data.email}
						style={{
							marginBottom: 15,
						}}
						size='small'
					/>
					<FormControl
						variant='outlined'
						fullWidth
						size='small'
						style={{
							marginBottom: 15,
						}}
					>
						<InputLabel htmlFor='outlined-age-native-simple'>Rol</InputLabel>
						<Select
							native
							label='Rol'
							inputProps={{
								name: 'age',
								id: 'outlined-age-native-simple',
							}}
						>
							<option aria-label='None' value='' />
							<option value={10}>Admin</option>
							<option value={20}>Vendedor</option>
							<option value={30}>Almacenista</option>
						</Select>
					</FormControl>
				</form>
			</div>
			<div className={classes.buttomContainer}>
				<Button
					key='save'
					title='Guardar'
					className={classes.buttom}
					onClick={() => console.log(data)}
				>
					<Save />
					Guardar
				</Button>
				<Button key='cancel' className={classes.buttom}>
					<CancelSharp />
					Cancelar
				</Button>
			</div>
		</div>
	);
};

export default ViewUser;
