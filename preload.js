const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
	// send: (channel, data) => {
	request: (channel, data) => {
		// whitelist channels
		const validChannels = [
			'minimizarWindow',
			'openDevTools',
			'closeWindows',
			'openChild',
			'consoleLog',
			'token',
			'socketReq',
		];
		if (validChannels.includes(channel)) {
			// console.log(data);
			ipcRenderer.send(channel, data);
		}
	},
	// receive: (channel, func) => {
	response: (channel, func) => {
		const validChannels = [
			'tokenMain',
			'tokenChild',
			'httpToken',
			'isLoading',
			'socketResp',
		];
		if (validChannels.includes(channel)) {
			// Deliberately strip event as it includes `sender`
			ipcRenderer.on(channel, (event, ...args) => func(...args));
		}
	},
});
