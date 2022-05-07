/* eslint-disable camelcase */
import axios from 'axios';
import AuthModel from '../models/Auth.Model';
import config from '../config/config.json';

export const signInServices = async ({ userName, password, remember }) => {
	try {
		// const { data } = await axios.post(`${config.ip}/api/v1/auth/signin`, {
		// 	userName,
		// 	password,
		// });
		const { data } = await axios.post(`${config.ip}/api/v1/auth/signin`, {
			userName,
			password,
		});
		const { auth, code } = await data;
		const { authentication, moduls, user } = auth;
		if (code) {
			const authData = new AuthModel(
				authentication.token,
				authentication.tenantId,
				authentication.userName,
				authentication.firstName,
				remember,
				moduls
			);
			window.api.request('token', {
				type: 'setMain',
				channel: 'tokenMain',
				authData,
			});
			return { code, user, auth, moduls };
		} else {
			return data;
		}
	} catch (error) {
		return error;
	}
};
