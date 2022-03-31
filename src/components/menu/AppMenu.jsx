import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import MinimizeIcon from '@mui/icons-material/Minimize';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const AppMenu = () => {
	const location = useLocation();
	const handleCloseWindows = () => {
		const urlAction = location.pathname.split('/');

		if (urlAction.includes('modal')) {
			window.api.request('close-modal', true);
		} else {
			window.api.request('close', true);
		}
	};

	return (
		<div className='navigator'>
			<div className='nv-title'>
				<h1>Nebula</h1>
			</div>
			<div className='nv-container-btn'>
				<Button
					className='btn-action'
					onClick={() => {
						window.api.request('minimizar', true);
					}}
				>
					<MinimizeIcon className='icon' />
				</Button>
				<Button className='btn-action'>
					<SettingsIcon className='icon' />
				</Button>
				<Button className='btn-action' onClick={handleCloseWindows}>
					<ExitToAppIcon className='icon' />
				</Button>
			</div>
		</div>
	);
};

export default AppMenu;
