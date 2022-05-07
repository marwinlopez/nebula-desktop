export default class AuthModel {
	constructor(token, tenantId, userName, firstName, isShow, moduls) {
		this.token = token;
		this.tenantId = tenantId;
		this.userName = userName;
		this.firstName = firstName;
		this.isShow = isShow;
		this.moduls = moduls;
	}
}
