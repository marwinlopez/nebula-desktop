import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			Dashboard
			<nav>
				<Link to='/about'>About</Link>
			</nav>
		</div>
	);
};

export default Dashboard;
