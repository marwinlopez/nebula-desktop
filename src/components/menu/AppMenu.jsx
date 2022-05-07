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
		<header className='topBar'>
			<div className='titleBar'>
				<div className='title'>
					<h1>Nebula</h1>
				</div>
			</div>
			{url.includes('modal') ? null : (
				<div className='titleBarBtns'>
					<Button
						className='topBtn maximizeBtn'
						onClick={handleMinimizeWindows}
					>
						<MinimizeIcon className='icon' />
					</Button>
					<Button className='topBtn maximizeBtn' onClick={handleShowDevelopers}>
						<SettingsIcon className='icon' />
					</Button>
					<Button className='topBtn closeBtn' onClick={handleCloseWindows}>
						<ExitToAppIcon className='icon' />
					</Button>
				</div>
			)}
		</header>
	);
};

export default AppMenu;
