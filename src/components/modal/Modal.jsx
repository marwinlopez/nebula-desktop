import withStyles from '@mui/styles/withStyles';
import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { CancelSharp, DeleteSharp, SaveSharp } from '@mui/icons-material';
import { FormControl, InputLabel, Select, TextField } from '@mui/material';

const styles = theme => ({
	root: {
		margin: 0,
		backgroundColor: '#571757',
		padding: theme.spacing(1),
		color: '#d8d8d8',
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(0),
		color: theme.palette.grey[500],
	},
});

const DialogTitle = withStyles(styles)(props => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle className={classes.root} {...other}>
			<Typography variant='h6' component='div'>
				{children}
			</Typography>
			{onClose ? (
				<IconButton
					aria-label='close'
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const Dialog = withStyles(theme => ({
	root: {
		'& .MuiPaper-root': {
			width: '40%',
			fontSize: 10,
			borderRadius: 15,
			border: '2px solid #571057',
		},
	},
}))(MuiDialog);

const DialogContent = withStyles(theme => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
		backgroundColor: '#571757',
	},
}))(MuiDialogActions);

export default function Modal({ open, setOpen, data }) {
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Dialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
			>
				<DialogTitle id='customized-dialog-title' onClose={handleClose}>
					{data.title}
				</DialogTitle>
				<DialogContent dividers>
					<form
						noValidate
						autoComplete='off'
						style={{ display: 'contents', width: '100%', overflow: 'hidden' }}
					>
						<TextField
							id='outlined-basic'
							label='Nombres'
							variant='outlined'
							defaultValue={data.firstName}
							fullWidth
							disabled={data.disabled}
							style={{
								marginBottom: 15,
							}}
							size='small'
						/>
						<TextField
							id='outlined-basic'
							label='Apellidos'
							variant='outlined'
							defaultValue={data.lastName}
							fullWidth
							disabled={data.disabled}
							style={{
								marginBottom: 15,
							}}
							size='small'
						/>
						<TextField
							id='outlined-basic'
							label='userName'
							variant='outlined'
							defaultValue={data.userName}
							fullWidth
							disabled={data.disabled}
							style={{
								marginBottom: 15,
							}}
							size='small'
						/>
						<TextField
							id='outlined-basic'
							label='Correo Electrónico'
							variant='outlined'
							defaultValue={data.userName}
							fullWidth
							disabled={data.disabled}
							style={{
								marginBottom: 15,
							}}
							size='small'
						/>
						<FormControl
							variant='outlined'
							fullWidth
							disabled={data.disabled}
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
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleClose}
						style={{
							backgroundColor: 'rgb(10, 55, 105)',
							fontSize: 8,
							color: '#d8d8d8',
						}}
						startIcon={<CancelSharp />}
					>
						Cancelar
					</Button>
					{data.type === 'new' || data.type === 'edit' ? (
						<Button
							onClick={handleClose}
							style={{
								backgroundColor: 'rgb(10, 55, 105)',
								fontSize: 8,
								color: '#d8d8d8',
							}}
							startIcon={<SaveSharp />}
						>
							Guardar
						</Button>
					) : data.type === 'delete' ? (
						<Button
							onClick={handleClose}
							style={{
								backgroundColor: 'rgb(10, 55, 105)',
								fontSize: 10,
								color: '#d8d8d8',
							}}
							startIcon={<DeleteSharp />}
						>
							Eliminar
						</Button>
					) : null}
				</DialogActions>
			</Dialog>
		</div>
	);
}
