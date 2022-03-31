import { Link, useNavigate } from 'react-router-dom';

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import './sidebar.scss';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import NavigatorLink from './NavigatorLink';
import { routes } from '../navigations/SIdeBarList';
import AppAcordion from '../accordion/AppAcordion';
import { Typography } from '@mui/material';

const Sidebar = () => {
	const { signUp } = useGlobalContext();
	const navigate = useNavigate();
	return (
		<div className='sidebar'>
			<div className='top'>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<span className='logo'>NebulaAdm</span>
				</Link>
			</div>
			<hr />
			<div className='center'>
				<ul>
					<p className='title'>Main</p>
					{routes
						.filter(route => !route.showInDrawer)
						.map(route => {
							return route.items ? (
								<AppAcordion key={route.name} route={route} />
							) : (
								<NavigatorLink key={route.name} item={route} />
							);
						})}

					<li
						onClick={() => {
							signUp(() => navigate('/login', { replace: true }));
						}}
					>
						<PowerSettingsNewIcon className='icon' />
						<Typography className='span'>Logout</Typography>
					</li>
				</ul>
			</div>
			<div className='bottom'>
				<div className='colorOption' onClick={() => console.log('first')}></div>
				<div className='colorOption' onClick={() => console.log('first')}></div>
			</div>
		</div>
	);
};

export default Sidebar;
