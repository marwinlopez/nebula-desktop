import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useReducer,
	useState,
} from 'react';
import GlobalReducer from './GlobalReducer';

const INITIAL_STATE = {
	tenantId: null,
	token: null,
	user: null,
	userName: null,
	remember: false,
	moduls: null,
};

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(GlobalReducer, INITIAL_STATE);

	/**
	 *
	 */

	const [pathNameClass, setPathNameClass] = useState('app');

	useEffect(() => {
		const url = window.location.pathname.split('/');
		if (!url.includes('modal')) {
			window.api.request('token', {
				type: 'getMain',
				channel: 'tokenMain',
				authData: null,
			});

			window.api.response('tokenMain', data => {
				if (data) {
					console.log(data);
					dispatch({
						type: 'signIn',
						tenantId: data.tenantId,
						token: data.token,
						user: data.firstName,
						userName: data.userName,
						remember: data.isShow,
					});
				}
			});
		}
		if (url.includes('login')) {
			window.api.request('closeWindows', true);
		}
	}, []);

	/**
	 *
	 */

	const updatePathName = pathName => {
		console.log(pathName);
		switch (pathName) {
			case '/login':
				setPathNameClass('login');
				break;
			case '/modal':
				setPathNameClass('modal');
				break;
			default:
				setPathNameClass('app');
				break;
		}
	};

	const value = useMemo(
		() => ({
			tenantId: state.tenantId,
			token: state.token,
			user: state.user,
			userName: state.userName,
			remember: state.remember,
			moduls: state.moduls,
			classApp: pathNameClass,
			updatePathName,
			dispatch,
		}),
		[
			state.remember,
			state.token,
			state.user,
			state.userName,
			state.moduls,
			pathNameClass,
		]
	);

	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(GlobalContext);
};
