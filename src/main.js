const electron = require('electron');
const CONFIG = require('../CONFIG.JS')
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;
const startUrl = 'http://localhost:5000'

function createWindow() {
    mainWindow = new BrowserWindow({width: CONFIG.WINDOW_WIDTH, height: CONFIG.WINDOW_HEIGHT,frame:false,transparent:true});


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
