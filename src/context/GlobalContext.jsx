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
		window.api.request('storage', null);

		window.api.response('authMain', data => {
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
	}, []);

	const session = JSON.parse(window.sessionStorage.getItem('auth'));
	// console.log(session);
	const value = useMemo(
		() => ({
			token: session ? session.token : state.token,
			user: session ? session.user : state.user,
			userName: session ? session.userName : state.userName,
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
