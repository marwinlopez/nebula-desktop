import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useReducer,
} from 'react';
import GlobalReducer from './GlobalReducer';

const INITIAL_STATE = {
	token: null,
	user: null,
	userName: null,
	remember: false,
};

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(GlobalReducer, INITIAL_STATE);

	useEffect(() => {
		const url = window.location.pathname.split('/');
		if (!url.includes('modal')) {
			window.api.request('token', {
				type: 'getMain',
				channel: 'tokenMain',
				authData: null,
			});

			window.api.response('tokenMain', data => {
				console.log(data);
				if (data) {
					dispatch({
						type: 'signIn',
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
			console.log(url.includes('login'));
		}
	}, []);

	const value = useMemo(
		() => ({
			token: state.token,
			user: state.user,
			userName: state.userName,
			remember: state.remember,
			dispatch,
		}),
		[state.remember, state.token, state.user, state.userName]
	);

	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(GlobalContext);
};
