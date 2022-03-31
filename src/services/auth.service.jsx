/* eslint-disable camelcase */
import axios from 'axios';
import AuthModel from '../models/Auth.Model';
import { ListPermissions } from '../models/Permissions.Model';
import UsersModel from '../models/Users.Model';
import config from '../config/config.json';

export const signInServices = async ({ userName, password, remember }) => {
	try {
		const { data } = await axios.post(`${config.ip}/api/v1/auth/signin`, {
			userName,
			password,
		});

		const { code, user } = await data;
		if (code) {
			const userModel = new UsersModel(user);
			const { user_roles } = user;
			if (user_roles.length > 0) {
				const { name, role_permissions } = user_roles[0].roles;

				userModel.rol = name;
				userModel.permissions = ListPermissions(role_permissions);
			} else {
				userModel.rol = 'User';
				userModel.permissions = [];
			}
			const authentication = new AuthModel(
				userModel.token,
				userModel.userName,
				userModel.firstName,
				remember
			);
			window.api.request('storage', authentication);
			// window.sessionStorage.setItem('auth', JSON.stringify(authentication));
			return { code: code, user: userModel, auth: authentication };
		} else {
			return data;
		}
	} catch (error) {
		return error;
	}
};
