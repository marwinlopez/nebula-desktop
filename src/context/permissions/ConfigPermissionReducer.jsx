const ConfigPermissionReducer = (state, action) => {
	switch (action.type) {
		case 'init': {
			return {
				...state,
				moduls: action.moduls,
				roles: action.roles,
				permissions: action.permissions,
				rolePermissions: action.rolePermissions,
			};
		}
		default:
			return state;
	}
};

export default ConfigPermissionReducer;
