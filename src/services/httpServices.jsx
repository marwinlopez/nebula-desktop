import axios from 'axios';
import AppConsts from '../config/appConsts';

const http = axios.create({
	baseURL: AppConsts.appBaseUrl,
	timeout: 30000,
	paramsSerializer: function (params) {
		return JSON.stringify(params);
	},
});

let token;
if (!token) {
	window.api.request('token', {
		type: 'getMain',
		channel: 'httpToken',
		authData: null,
	});

	window.api.response('httpToken', data => {
		token = data.token;
	});
}

http.interceptors.request.use(
	async config => {
		config.headers = {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
		};
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

export default http;
