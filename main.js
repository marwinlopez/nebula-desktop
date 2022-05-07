// Modules to control application life and create native browser window
const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const path = require('path');
const storage = require('electron-json-storage');
// require('./server');

const urlBase = 'http://localhost:5897';
// const exec = require('child_process').exec;
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

app.disableHardwareAcceleration();

let mainWindow = null;
let child = null;
function createWindow() {
	const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width,
		height,
		minWidth: 940,
		minHeight: 560,
		// resizable: true,
		// maximizable: false,
		// fullscreen: true,
		// fullscreenable: true,
		// titleBarStyle: 'hidden',
		// type: 'desktop',
		frame: false,
		webPreferences: {
			nodeIntegration: true, // is default value after Electron v5
			contextIsolation: true, // protect against prototype pollution
			devTools: true,
			enableRemoteModule: false, // turn off remote
			preload: path.join(__dirname, 'preload.js'), // use a preload script
		},
	});

	mainWindow.loadURL(urlBase);
	mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow();
	console.log('whenReady');
	app.on('activate', async function () {
		console.log('active');

		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('ready', () => {
	console.log('ready');
	// storage.set('foobar', { foo: 'bar' }, function (error) {
	// 	if (error) throw error;
	// });
});
app.on('browser-window-created', () => {
	console.log('create');
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});

function createchild(url, width, height) {
	child = new BrowserWindow({
		width,
		height,
		frame: false,
		title: 'modal',
		movable: true,
		parent: mainWindow,
		modal: true,
		visibleOnAllWorkspaces: true,
		webPreferences: {
			nodeIntegration: false, // is default value after Electron v5
			contextIsolation: true, // protect against prototype pollution
			enableRemoteModule: false, // turn off remote
			preload: path.join(__dirname, 'preload.js'), // use a preload script
		},
	});
	// child.setMenu(null);

	child.loadURL(`${urlBase}${url}`);

	child.on('closed', () => {
		child = null;
	});
}

// Ipc Renderer Events
ipcMain.on('openChild', (e, args) => {
	const { url, width, height } = args;
	if (!child) {
		createchild(url, width, height);
		// child.openDevTools();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('minimizarWindow', (event, isModal) => {
	if (isModal) child.minimize();
	else mainWindow.minimize();
});

ipcMain.on('ping', (event, arg) => {
	console.log(arg);
	event.reply('pong', 'Este es Pong');
	// if (isModal) {
	// 	child.openDevTools();
	// } else {
	// 	mainWindow.webContents.openDevTools();
	// }
});

ipcMain.on('openDevTools', (event, arg) => {
	if (arg) {
		child.openDevTools();
	} else {
		mainWindow.webContents.openDevTools();
	}
});

ipcMain.on('closeWindows', (event, isModal) => {
	if (isModal && child !== null) {
		child.close();
	} else if (!isModal) {
		if (process.platform !== 'darwin') app.quit();
	}
});

ipcMain.on('consoleLog', (event, args) => {
	console.log(args);
});

ipcMain.on('token', (event, args) => {
	const { type, channel, authData } = args;
	switch (type) {
		case 'getMain':
		case 'child':
			getStorage(event, channel);
			break;
		case 'setMain':
			setStorage(authData);
			break;
		case 'remove':
			storage.remove('auth', function (error) {
				if (error) throw error;
			});
			break;
	}
});

ipcMain.on('socketReq', (event, arg) => {
	mainWindow.webContents.send('socketResp', arg);
});

const setStorage = args => {
	storage.set('auth', args, function (error) {
		if (error) throw error;
	});
};
const getStorage = (event, channel) => {
	storage.get('auth', function (error, data) {
		if (error) throw error;
		event.reply(channel, data);
		mainWindow.webContents.send('isLoading', false);
	});
};
