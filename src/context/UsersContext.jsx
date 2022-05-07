import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useReducer,
	useState,
} from 'react';
import Users from '../services/user/users.service';
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
	/**
	 *
	 */
	const [state, dispatch] = useReducer(UsersReducer, USER_DATA);

	/**
	 *
	 */
	const [token, setToken] = useState(null);

	/**
	 *
	 */
	const u = new Users();

	/**
	 *
	 */
	useEffect(() => {
		if (state.isUserData && token) getUsers();
	}, [state.isUserData]);
	/**
	 *
	 */
	useEffect(() => {
		window.api.response('socketResp', data => {
			getUsers();
		});
	}, []);

	/**
	 * Obtine la una lista de todos los usuarios
	 */
	const getUsers = () => {
		u.listUser().then(resp => dispatch({ type: 'users', users: resp }));
	};

	/**
	 *
	 * @param {*} param0
	 */
	const showData = ({ token }) => {
		setToken(token);
		dispatch({ type: 'show' });
	};

	/**
	 *
	 */
	const value = useMemo(
		() => ({
			users: state.users,
			token,
			dispatch,
			showData,
		}),
		[state.users]
	);

	return (
		<UsersContext.Provider value={value}>{children}</UsersContext.Provider>
	);
};

/**
 *
 * @returns
 */
export const useUsersContext = () => {
	return useContext(UsersContext);
};
