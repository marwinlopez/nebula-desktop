/* eslint-disable camelcase */
import RolModel from '../models/Rol.Model';
import UsersModel from '../models/Users.Model';
import axios from 'axios';
import config from '../config/config.json';
export default class Users {
	create(model) {
		const user = new UsersModel(model);
		return user;
	}

	/**
	 * Metodo async que devuelve la lista de Usuarios
	 * @param {*} token
	 * @returns list
	 */
	async listUser(token) {
		const resp = await axios.get(`${config.ip}/api/v1/users`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (resp.status === 200) {
			const { users } = resp.data;
			const list = users.map(u => {
				const user = new UsersModel(u);
				const { user_roles } = u;
				const userRol = user_roles.shift();
				if (userRol) {
					const { id, roles } = userRol;
					user.rol = new RolModel(id, roles.name);
				} else {
					user.rol = new RolModel(0, null);
				}
				return user;
			});

			return list;
		}
	}
}
