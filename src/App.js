import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import AppRoute from './components/route/AppRoute';

import { ThemeProvider, responsiveFontSizes, createTheme } from '@mui/material';
// import { GlobalContext } from './context/GlobalContext';
// import { useContext } from 'react';

const App = props => {
	const theme = responsiveFontSizes(createTheme());
	// const global = useContext(GlobalContext);
	// console.log(global);
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter {...props}>
				<AppRoute {...props} />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
