/* eslint-disable array-callback-return */
import config from '../../config/config.json';
import axios from 'axios';
import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useReducer,
	useState,
} from 'react';
import ConfigPermissionReducer from './ConfigPermissionReducer';

const INITIAL_CONFIG = {
	moduls: null,
	roles: null,
	permissions: null,
	rolePermissions: null,
};

export const ConfigPermissionsContext = createContext();

export const ConfigPermissionsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ConfigPermissionReducer, INITIAL_CONFIG);
	const [moduls, setModuls] = useState([]);
	const [checkedPermissions, setCheckedPermissions] = useState([]);
	const [permissions, setPermissions] = useState([]);
	const [checked, setChecked] = useState([]);
	useEffect(() => {
		axios.get(`${config.ip}/api/v1/config-permissions`).then(res => {
			const { status, data } = res;
			if (status === 200) {
				const { moduls, roles, permissions, rolePermissions } = data;
				dispatch({ type: 'init', moduls, roles, permissions, rolePermissions });
				setModuls(moduls);
			}
		});
	}, []);

	const searchModuls = id => {
		const resRolePermissions = state.rolePermissions.filter(
			item => item.roleId === id
		);

		const resOfPermission = state.permissions.filter(p =>
			resRolePermissions.find(res => res.permissionId === p.id)
		);

		const check = resOfPermission.map(c => {
			const { moduleId } = c;
			return moduleId;
		});
		setChecked([...new Set(check)]);
		setPermissions(state.permissions);
		const checkedPer = resOfPermission.map(p => {
			const { id } = p;
			return id;
		});
		setCheckedPermissions(checkedPer);
	};

	const value = useMemo(
		() => ({
			roles: state.roles,
			moduls,
			checked,
			checkedPermissions,
			permissions,
			searchModuls,
		}),
		[state.roles, moduls, checked, checkedPermissions, permissions]
	);

	return (
		<ConfigPermissionsContext.Provider value={value}>
			{children}
		</ConfigPermissionsContext.Provider>
	);
};

export const useConfigPermissions = () => {
	return useContext(ConfigPermissionsContext);
};
