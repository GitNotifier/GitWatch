const electron = require('electron');
const CONFIG = require('../CONFIG.JS')
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;
const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
});

function createWindow() {

    mainWindow = new BrowserWindow({width: CONFIG.WINDOW_WIDTH, height: CONFIG.WINDOW_HEIGHT});


    mainWindow.loadURL(startUrl);


    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {

        mainWindow = null
    })
}


app.on('ready', createWindow);

app.on('window-all-closed', function () {
     if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {

    if (mainWindow === null) {
        createWindow()
    }
});
