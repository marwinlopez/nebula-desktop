import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useReducer,
	useState,
} from 'react';
import Users from '../services/users.service';
import UsersReducer from './UsersReducer';

const USER_DATA = {
	isUserData: false,
	users: [],
};

export const UsersContext = createContext();

/**
 * Context Provider Users
 * @param {*} param0
 * @returns
 */
export const UsersContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(UsersReducer, USER_DATA);
	const [token, setToken] = useState(null);
	const u = new Users();
	useEffect(() => {
		if (state.isUserData && token) getToken();
	}, [state.isUserData]);

	const getToken = () => {
		u.listUser(token).then(resp => dispatch({ type: 'users', users: resp }));
	};

	const refresData = () => {};

	const showData = ({ token }) => {
		setToken(token);
		dispatch({ type: 'show' });
	};

	const value = useMemo(
		() => ({
			users: state.users,
			token,
			showData,
		}),
		[state.users]
	);

	return (
		<UsersContext.Provider value={value}>{children}</UsersContext.Provider>
	);
};

export const useUsersContext = () => {
	return useContext(UsersContext);
};
