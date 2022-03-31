const GlobalReducer = (state, action) => {
	switch (action.type) {
		case 'signIn': {
			return {
				...state,
				token: action.token,
				user: action.user,
				userName: action.userName,
				remember: action.remember,
			};
		}
		case 'signUp': {
			return {
				...state,
				token: false,
			};
		}
		case 'expanded': {
			return {
				...state,
				expanded: action.to,
			};
		}
		default:
			return state;
	}
};

export default GlobalReducer;
