import { useContext, useEffect, useState } from 'react';
import { routes } from '../components/navigations/SIdeBarList';
import { GlobalContext } from '../context/GlobalContext';
import { signInServices } from '../services/auth.service';
export const useGlobalContext = () => {
	const global = useContext(GlobalContext);
	const [btnAction, setBtnAction] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// window.api.request('storage', null);
		// window.api.response('authMain', data => {
		if (global.token) {
			setIsLoading(false);
		}
	}, [global]);

	const isAuth = () => {
		const auth = JSON.parse(window.sessionStorage.getItem('auth'));
		console.log(auth ? auth.token : null);
		global.dispatch({ type: 'signIn', token: auth ? auth.token : null });
		return auth;
	};
	const signIn = async (data, callback) => {
		const res = await signInServices(data);
		if (res.code) {
			global.dispatch({
				type: 'signIn',
				token: res.auth.token,
				user: res.auth.firstName,
				userName: res.auth.userName,
				remember: res.auth.isShow,
			});
			callback();
		}
		return res;
	};
	const signUp = callback => {
		global.dispatch({ type: 'signUp' });
		callback();
	};
	const appNavigation = (to, match) => {
		if (match) {
			global.dispatch({ type: 'expanded', to: match.pathname });
		}
	};
	const breadcrumb = async array => {
		const raiz = array.shift();
		const route = routes.filter(r => r.to === `/${raiz}`)[0];
		const list =
			array.length > 0
				? array.map(item => {
						const itemRoute = route.items.filter(
							r => r.to === `/${raiz}/${item}`
						);
						console.log(itemRoute);
						const obj = {
							index: route,
							items: itemRoute,
						};
						return obj;
				  })[0]
				: {
						index: route,
						// items: itemRoute,
				  };
		console.log(list);
		return list;
	};
	const locationRoute = loc => {
		console.log(loc);
	};
	const modalAction = action => {
		setBtnAction({ action });
	};
	const consoleLog = msg => {
		window.api.request('consoleLog', msg);
	};
	return {
		accodionExpanded: false,
		btnAction,
		isLoading: isLoading,
		global: global,
		consoleLog,
		signIn,
		signUp,
		appNavigation,
		breadcrumb,
		locationRoute,
		modalAction,
	};
};
