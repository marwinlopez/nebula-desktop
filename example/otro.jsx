import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
const AntTabs = withStyles({
	root: {
		borderBottom: '1px solid #e8e8e8',
	},
	indicator: {
		backgroundColor: '#1890ff',
	},
})(Tabs);

const AntTab = withStyles(theme => ({
	root: {
		textTransform: 'none',
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing(4),
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:hover': {
			color: '#40a9ff',
			opacity: 1,
		},
		'&$selected': {
			color: '#1890ff',
			fontWeight: theme.typography.fontWeightMedium,
		},
		'&:focus': {
			color: '#40a9ff',
		},
	},
	selected: {},
}))(props => <Tab disableRipple {...props} />);
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

export const Header = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='simple tabs example'
				>
					<Tab style={{ fontSize: 12 }} label='Inventario' />
					<Tab style={{ fontSize: 12 }} label='Ventas' />
					<Tab style={{ fontSize: 12 }} label='Cuentas x Cobrar' />
					<Tab style={{ fontSize: 12 }} label='Compras' />
					<Tab style={{ fontSize: 12 }} label='Cuentas x Pagar' />
					<Tab style={{ fontSize: 12 }} label='Sucursales' />
					<Tab style={{ fontSize: 12 }} label='Reportes' />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				Inventario
			</TabPanel>
			<TabPanel value={value} index={1}>
				Ventas
			</TabPanel>
			<TabPanel value={value} index={2}>
				Cuentas x Cobrar
			</TabPanel>
			<TabPanel value={value} index={3}>
				Compras
			</TabPanel>
			<TabPanel value={value} index={4}>
				Cuentas x Pagar
			</TabPanel>
			<TabPanel value={value} index={5}>
				Sucursales
			</TabPanel>
			<TabPanel value={value} index={6}>
				Reportes
			</TabPanel>
		</div>
	);
};
