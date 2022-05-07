const UsersReducer = (state, action) => {
	switch (action.type) {
		case 'users': {
			return {
				...state,
				users: action.users,
			};
		}
		case 'show': {
			return {
				...state,
				isUserData: true,
			};
		}
		case 'expanded': {
			return {
				...state,
				expanded: action.to,
			};
		}
		case 'classApp': {
			return {
				...state,
				classApp: action.classApp,
			};
		}
		default:
			return state;
	}
};

export default UsersReducer;
