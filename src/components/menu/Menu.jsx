import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Tab, Tabs, Toolbar } from '@mui/material';
import './menu.scss';
import BtnNavigation from '../Botones/BtnNavigation';
// import { items } from './MenuItems';
import { GlobalContext } from '../../context/GlobalContext';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			style={{ height: '100%' }}
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{children}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
// 	return {
// 		id: `simple-tab-${index}`,
// 		'aria-controls': `simple-tabpanel-${index}`,
// 	};
// }

export default function Menu(props) {
	const { moduls } = useContext(GlobalContext);
	const [value, setValue] = useState(0);
	const [items, setItems] = useState(null);

	useEffect(() => {
		setItems(moduls);
	}, [moduls]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	if (!items) {
		return null;
	}
	return (
		<>
			<AppBar position='static' className='header' elevation={0}>
				<Toolbar className='toolbar'>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label='simple tabs example'
						className='tabs'
					>
						{items
							.filter(item => item.isActive)
							.map(item => {
								return (
									<Tab
										key={`tabs-${item.name}`}
										className='tab'
										label={
											<Link to='#' className='link'>
												{item.name}
											</Link>
										}
									/>
								);
							})}
					</Tabs>
				</Toolbar>
				{items.map((item, index) => {
					return (
						<TabPanel key={`tab-${item.name}`} value={value} index={index}>
							<BtnNavigation key={`tabNav-${item.name}`} moduls={item.moduls} />
						</TabPanel>
					);
				})}
			</AppBar>
			<Outlet />
		</>
	);
}
