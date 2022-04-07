const channel = {
	request: [
		'minimizarWindow',
		'openDevTools',
		'closeWindows',
		'openChild',
		'consoleLog',
		'token',
	],
	response: ['tokenMain', 'tokenChild'],
};

const getRequest = name => {
	console.log(name);
	return channel.request.includes(name);
};

const getResponse = name => {
	console.log(name);
	return channel.response.includes(name);
};

export { channel, getRequest, getResponse };
