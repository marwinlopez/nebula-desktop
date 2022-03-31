export default class UsersModel {
	constructor({
		id,
		firstName = null,
		lastName = null,
		userName,
		email = null,
		phoneNumber = null,
		sexo = null,
		accessToken,
		rol = {},
		permissions = [],
	}) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.sexo = sexo;
		this.token = accessToken;
		this.rol = rol;
		this.permissions = permissions;
	}
}
