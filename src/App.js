import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import AppRoute from './components/route/AppRoute';

import { ThemeProvider, responsiveFontSizes, createTheme } from '@mui/material';
import AppMenu from './components/menu/AppMenu';
import AppFooter from './components/footer/AppFooter';
import { useGlobalContext } from './context/GlobalContext';

const App = props => {
	const { classApp } = useGlobalContext();
	const theme = responsiveFontSizes(createTheme());

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter {...props}>
				<div className={classApp}>
					<AppMenu />
					<AppRoute {...props} />
					<AppFooter />
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
