export default class PermissionsModel {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}
}

export const ListPermissions = permissions => {
	const list = [];
	permissions.forEach(item => {
		const permission = new PermissionsModel(item.id, item.permission.name);
		list.push(permission);
	});
	return list;
};
