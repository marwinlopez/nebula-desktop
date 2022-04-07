import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import MinimizeIcon from '@mui/icons-material/Minimize';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../hooks/useGlobalContext';
const AppMenu = () => {
	const location = useLocation();
	const [url] = useState(location.pathname.split('/'));
	const { closeWindows, minimizeWindows, openDevTools } = useGlobalContext();
	useEffect(() => {
		window.api.response('pong', data => {
			console.log({ data });
		});
	}, []);

	const handleMinimizeWindows = () => {
		minimizeWindows(url.includes('modal'));
	};
	const handleCloseWindows = () => {
		closeWindows(url.includes('modal'));
	};

	const handleShowDevelopers = () => {
		openDevTools(url.includes('modal'));
	};

	return (
		<div className='navigator'>
			<div className='nv-title'>
				<h1>Nebula</h1>
			</div>
			{/* {url.includes('modal') ? null : ( */}
			<div className='nv-container-btn'>
				<Button className='btn-action' onClick={handleMinimizeWindows}>
					<MinimizeIcon className='icon' />
				</Button>
				<Button className='btn-action' onClick={handleShowDevelopers}>
					<SettingsIcon className='icon' />
				</Button>
				<Button className='btn-action' onClick={handleCloseWindows}>
					<ExitToAppIcon className='icon' />
				</Button>
			</div>
			{/* )} */}
		</div>
	);
};

export default AppMenu;
