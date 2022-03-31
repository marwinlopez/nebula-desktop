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
		resizable: false,
		maximizable: false,
		fullscreen: true,
		fullscreenable: true,
		titleBarStyle: 'hidden',
		type: 'desktop',
		frame: false,
		webPreferences: {
			nodeIntegration: false, // is default value after Electron v5
			contextIsolation: true, // protect against prototype pollution
			enableRemoteModule: false, // turn off remote
			preload: path.join(__dirname, 'preload.js'), // use a preload script
		},
	});

	mainWindow.loadURL(urlBase);

	// Open the DevTools.
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
	// storage.getAll(function (error, data) {
	// 	if (error) throw error;

	// 	console.log(data);
	// });
	// storage.get('auth', function (error, data) {
	// 	if (error) throw error;

	// 	mainWindow.webContents.send('fromMain', data);
	// 	console.log(data);
	// });
	// exec(
	// 	'node node_modules/react-scripts/bin/react-scripts.js start',
	// 	(err, stdout, stderr) => {
	// 		if (err) console.log(err);
	// 		console.log('' + stdout);
	// 		console.log('' + stderr);
	// 	}
	// );
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});

function createchild({ url, width, height }) {
	child = new BrowserWindow({
		width,
		height,
		frame: false,
		title: 'modal',
		parent: mainWindow,
		// visibleOnAllWorkspaces: true,
		webPreferences: {
			nodeIntegration: false, // is default value after Electron v5
			contextIsolation: true, // protect against prototype pollution
			enableRemoteModule: false, // turn off remote
			preload: path.join(__dirname, 'preload.js'), // use a preload script
		},
	});
	// child.setMenu(null);

	child.loadURL(`${urlBase}${url}`);
	child.openDevTools();
	child.on('closed', () => {
		child = null;
	});
}

// Ipc Renderer Events
ipcMain.on('modal', (e, data) => {
	createchild(data);
	// // send to the Main Window
	// console.log(newProduct);
	// mainWindow.webContents.send('product:new', newProduct);
	// child.close();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
ipcMain.on('minimizar', (event, args) => {
	mainWindow.minimize();
});
ipcMain.on('close', (event, args) => {
	if (process.platform !== 'darwin') app.quit();
});
ipcMain.on('close-modal', (event, args) => {
	child.close();
});
ipcMain.on('consoleLog', (event, args) => {
	console.log(args);
});
ipcMain.on('storage', (event, args) => {
	// console.clear();
	// console.log('storage');
	if (args) {
		storage.set('auth', args, function (error) {
			if (error) throw error;
		});
	} else {
		storage.get('auth', function (error, data) {
			if (error) throw error;
			mainWindow.webContents.send('authMain', data);
			console.log(data);
		});
	}
});
