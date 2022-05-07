import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { signInServices } from '../services/auth.service';
import Roles from '../services/roles.services';
/**
 *
 * @returns
 */
export const useGlobalContext = () => {
	/**
	 *
	 */
	const global = useContext(GlobalContext);
	/**
	 *
	 */
	const [isLoading, setIsLoading] = useState(true);
	/**
	 *
	 */
	const roles = new Roles();
	/**
	 *
	 */
	useEffect(() => {
		window.api.response('isLoading', data => {
			setIsLoading(data);
		});
		return isLoading;
	}, []);

	/**
	 *
	 * @param {*} data
	 * @param {*} isRemember
	 * @param {*} callback
	 * @returns
	 */
	const signIn = async (data, isRemember, callback) => {
		data.remember = isRemember;
		const res = await signInServices(data);
		const { code, auth, moduls } = res;
		if (code) {
			const { authentication } = auth;
			global.dispatch({
				type: 'signIn',
				tenantId: authentication.tenantId,
				token: authentication.token,
				user: authentication.firstName,
				userName: authentication.userName,
				remember: authentication.isShow,
				moduls,
			});
			callback();
		}
		return res;
	};

	/**
	 *
	 * @param {*} callback
	 */
	const signUp = callback => {
		global.dispatch({ type: 'signUp' });
		callback();
	};

	/**
	 *
	 * @param {*} loc
	 */
	const locationRoute = loc => {
		console.log(loc);
	};

	/**
	 *
	 * @param {*} msg
	 */
	const consoleLog = msg => {
		window.api.request('consoleLog', msg);
	};

	/**
	 *
	 * @param {*} isChild
	 */
	const closeWindows = isChild => {
		window.api.request('closeWindows', isChild);
	};

	/**
	 *
	 * @param {*} isChild
	 */
	const minimizeWindows = isChild => {
		window.api.request('minimizarWindow', isChild);
	};

	/**
	 *
	 * @param {*} isChild
	 */
	const openDevTools = isChild => {
		window.api.request('openDevTools', isChild);
	};

	/**
	 *
	 * @returns listRoles
	 */
	const getRoles = async => {
		return roles.getRoles();
	};

	const refreshGrid = async user => {
		window.api.request('socketReq', user);
	};

	return {
		isLoading: isLoading,
		global: global,
		consoleLog,
		signIn,
		signUp,
		locationRoute,
		closeWindows,
		minimizeWindows,
		openDevTools,
		getRoles,
		refreshGrid,
	};
};
