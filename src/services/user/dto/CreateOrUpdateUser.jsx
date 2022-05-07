export class CreateOrUpdateUserInput {
	constructor({
		id,
		tenantId,
		userName,
		firstName,
		lastName,
		email,
		phoneNumber,
		password,
		sexo,
		rol,
	}) {
		this.id = id;
		this.tenantId = tenantId;
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.password = password;
		this.sexo = sexo;
		this.rol = rol;
	}
}
