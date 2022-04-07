import axios from 'axios';
import config from '../config/config.json';
import RolModel from '../models/Rol.Model';
export default class Roles {
	async getRoles(token) {
		const resp = await axios.get(`${config.ip}/api/v1/roles`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { status, data } = resp;
		if (status === 200) {
			const roles = data.roles
				.filter(rol => rol.isActive)
				.map(r => {
					const rol = new RolModel(r.id, r.name);
					return rol;
				});
			return roles;
		}
	}
}
