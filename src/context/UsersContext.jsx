import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useReducer,
} from 'react';
import Users from '../services/users.service';
import UsersReducer from './UsersReducer';

const USER_DATA = {
	isUserData: false,
	users: [],
};

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(UsersReducer, USER_DATA);
	const u = new Users();
	useEffect(() => {
		if (state.isUserData)
			u.listUser(dispatch).then(resp =>
				dispatch({ type: 'users', users: resp })
			);
	}, [state.isUserData]);

	const refresData = () => {};

	const showData = () => {
		dispatch({ type: 'show' });
	};

	const value = useMemo(
		() => ({
			users: state.users,
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
