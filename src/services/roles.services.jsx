import RolModel from '../models/Rol.Model';
import http from './httpServices';
export default class Roles {
	async getRoles() {
		const resp = await http.get('/api/v1/roles');

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
