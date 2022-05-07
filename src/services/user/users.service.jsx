/* eslint-disable camelcase */
import RolModel from '../../models/Rol.Model';
import UsersModel from '../../models/Users.Model';
import http from '../httpServices';
import { CreateOrUpdateUserInput } from './dto/CreateOrUpdateUser';
/**
 *
 */
export default class Users {
	/**
	 * Crea un Nuevo Usuario
	 * @param {*} model
	 * @returns User
	 */
	async create(model) {
		const user = new CreateOrUpdateUserInput(model);
		const resp = await http.post('/api/v1/users', {
			user,
		});
		return resp;
	}

	/**
	 * Actializar el Usuario
	 * @param {*} model
	 * @returns User
	 */
	async update(model) {
		const user = new CreateOrUpdateUserInput(model);
		const resp = await http.put(`/api/v1/users/${model.id}`, {
			user,
		});
		return resp;
	}

	/**
	 * Metodo async que devuelve la lista de Usuarios
	 * @returns list
	 */
	async listUser() {
		const resp = await http.get('/api/v1/users');

		if (resp.status === 200) {
			const { users } = resp.data;
			const list = users.map(u => {
				const user = new UsersModel(u);
				const { user_roles } = u;
				const userRol = user_roles.shift();
				if (userRol) {
					const { roles } = userRol;
					user.rol = new RolModel(roles.id, roles.name);
				} else {
					user.rol = new RolModel(0, null);
				}
				return user;
			});
			return list;
		}
	}
}
