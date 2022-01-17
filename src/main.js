// eslint-disable-next-line import/no-extraneous-dependencies
import electron from 'electron';
import CONFIG from '../CONFIG';

const {app} = electron;

const {BrowserWindow} = electron;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: CONFIG.WINDOW_WIDTH,
        height: CONFIG.WINDOW_HEIGHT,
        frame: false,
        transparent: true,
    });

    mainWindow.loadURL(CONFIG.ELECTRON_START_URL);

    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform === 'darwin') {
        return;
    }

    app.quit();
});

app.on('activate', () => {
    if (mainWindow != null) {
        return;
    }

    createWindow();
});
