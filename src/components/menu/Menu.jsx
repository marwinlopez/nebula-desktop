import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Tab, Tabs, Toolbar } from '@mui/material';
import './menu.scss';
import BtnNavigation from '../Botones/BtnNavigation';
import { items } from './MenuItems';

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
			{children}
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

export default function Menu(props) {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div>
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
		</div>
	);
}
