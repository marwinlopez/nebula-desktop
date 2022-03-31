import './navbar.scss';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ListIcon from '@material-ui/icons/List';
import IconButton from '@material-ui/core/IconButton';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { PersonOutline } from '@material-ui/icons';
import { Menu, MenuItem } from '@material-ui/core';

const Navbar = () => {
	const { dispatch } = useContext(GlobalContext);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleMenu = event => {
		console.log(event.currentTarget);
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='search'>
					<input type='text' placeholder='Search...' />
					<SearchIcon />
				</div>
				<div className='items'>
					<div className='item'>
						<LanguageIcon className='icon' />
						English
					</div>
					<div className='item'>
						<Brightness4Icon
							className='icon'
							onClick={() => dispatch({ type: 'TOGGLE' })}
						/>
					</div>
					<div className='item'>
						<FullscreenIcon className='icon' />
					</div>
					<div className='item'>
						<NotificationsIcon className='icon' />
						<div className='counter'>1</div>
					</div>
					<div className='item'>
						<ChatBubbleIcon className='icon' />
						<div className='counter'>2</div>
					</div>
					<div className='item'>
						<ListIcon className='icon' />
					</div>
					<div className='item'>
						<IconButton
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleMenu}
							color='inherit'
						>
							<PersonOutline />
						</IconButton>
						<Menu
							id='menu-appbar'
							elevation={10}
							anchorEl={anchorEl}
							marginThreshold={50}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							open={open}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={handleClose}>My account</MenuItem>
						</Menu>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
