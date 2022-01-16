// eslint-disable-next-line import/no-extraneous-dependencies
import electron from 'electron';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../CONFIG.js';

const { app } = electron;

const { BrowserWindow } = electron;

let mainWindow;
const startUrl = 'http://localhost:5000';

function createWindow() {
  mainWindow = new BrowserWindow({
    width: WINDOW_WIDTH, height: WINDOW_HEIGHT, frame: false, transparent: true,
  });

  mainWindow.loadURL(startUrl);

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
