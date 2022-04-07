import { makeStyles } from '@mui/styles';

export const signInStyles = makeStyles(theme => ({
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: '#999',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(2),
		color: '#fff',
	},
	title: {
		color: '#FFF',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	section: {
		background: '#570557',
		width: '100%',
		color: '#FFFFF2',
		display: 'grid',
		placeItems: 'center',
	},
	text: {
		'& label.Mui-focused': {
			color: '#d4d4d4',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#d4d4d4',
		},
		'& .MuiInputBase-input': {
			color: '#d4d4d4',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#d4d4d4',
			},
			'&:hover fieldset': {
				borderColor: '#d4d4d4',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#d4d4d4',
			},
		},
		'& .MuiInputLabel-root': {
			color: '#d4d4d4 !important',
		},
	},
	error: {
		'& label.Mui-focused': {
			color: 'red',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'red',
		},
		'& .MuiOutlinedInput-input': {
			color: 'red',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'red',
			},
			'&:hover fieldset': {
				borderColor: 'red',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'red',
			},
		},
		'& .MuiInputLabel-root': {
			color: 'red !important',
		},
	},
	message: {
		fontSize: '0.8rem',
		color: '#ff0808',
		marginBottom: '5px',
	},
}));
