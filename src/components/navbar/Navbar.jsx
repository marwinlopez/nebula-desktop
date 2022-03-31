// import './navbar.scss'
// import SearchIcon from '@mui/icons-material/Search';
// import LanguageIcon from '@mui/icons-material/Language';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import FullscreenIcon from '@mui/icons-material/Fullscreen';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
// import ListIcon from '@mui/icons-material/List';
// import IconButton from '@material-ui/core/IconButton';
// import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
// import { PersonOutline } from '@mui/icons-material';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useContext, useState } from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const Navbar = () => {
	const { dispatch } = useContext(GlobalContext);
	const classes = useStyles();
	const [auth, setAuth] = useState(true);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position='static'>
			<Toolbar
				style={{
					minHeight: '50px',
					backgroundColor: '#571057',
					borderTop: '0.5px solid #be21be',
				}}
			>
				{/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
				<Typography variant='h6' className={classes.title}>
					{/* Photos */}
				</Typography>
				{auth && (
					<div>
						<IconButton
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleMenu}
							color='inherit'
						>
							<AccountCircle />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							elevation={10}
							marginThreshold={50}
							open={open}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={handleClose}>My account</MenuItem>
						</Menu>
					</div>
				)}
			</Toolbar>
		</AppBar>
	);
	// return (
	//   <div className="navbar">
	//     <div className="wrapper">
	//       <div className="search">
	//         <input type="text" placeholder="Search..." />
	//         <SearchIcon />
	//       </div>
	//       <div className="items">
	//         <div className="item">
	//           <LanguageIcon className="icon" />
	//           English
	//         </div>
	//         <div className="item">
	//           <Brightness4Icon
	//             className="icon"
	//             onClick={() => dispatch({ type: "TOGGLE" })}
	//           />
	//         </div>
	//         <div className="item">
	//           <FullscreenIcon className="icon" />
	//         </div>
	//         <div className="item">
	//           <NotificationsIcon className="icon" />
	//           <div className="counter">1</div>
	//         </div>
	//         <div className="item">
	//           <ChatBubbleIcon className="icon" />
	//           <div className="counter">2</div>
	//         </div>
	//         <div className="item">
	//           <ListIcon className="icon" />
	//         </div>
	//         <div className="item">
	//           <IconButton
	//             aria-label="account of current user"
	//             aria-controls="menu-appbar"
	//             aria-haspopup="true"
	//             onClick={handleMenu}
	//             color="inherit"
	//           >
	//             <PersonOutline />
	//           </IconButton>
	//           <Menu
	//             anchorEl={anchorEl}
	//             getContentAnchorEl={null}
	//             anchorOrigin={{
	//               vertical: 'bottom',
	//               horizontal: 'left',
	//             }}
	//             id="menu-appbar"
	//             keepMounted
	//             transformOrigin={{
	//               vertical: 'bottom',
	//               horizontal: 'left',
	//             }}
	//             open={open}
	//             onClose={handleClose}
	//             elevation={10}
	//             marginThreshold={50}
	//           >
	//             <MenuItem onClick={handleClose}>Profile</MenuItem>
	//             <MenuItem onClick={handleClose}>My account</MenuItem>
	//           </Menu>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// )
};

export default Navbar;
