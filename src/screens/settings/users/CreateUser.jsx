import { FormControl, InputLabel, Select, TextField } from '@mui/material';

const CreateUser = () => {
	return (
		<div
			style={{
				margin: '15px',
				padding: '15px',
				backgroundColor: '#fff',
				borderRadius: 5,
			}}
		>
			<form
				noValidate
				autoComplete='off'
				style={{ display: 'contents', width: '100%', overflow: 'hidden' }}
			>
				<TextField
					id='outlined-basic'
					label='Nombres'
					variant='outlined'
					fullWidth
					// disabled={data.disabled}
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
	);
};

export default CreateUser;
