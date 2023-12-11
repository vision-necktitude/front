const { app, BrowserWindow } = require('electron');
const path = require('path');
 
const createWindow = () => {
    const win = new BrowserWindow({
        width: 750,
        height: 520,
        webPreferences: { 
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js') 
        }
    });

    const logopath = path.join(__dirname, 'icon/logo.png');
    console.log('Logo path:', logopath); // 로그 추가
    win.setIcon(logopath);
 
    win.loadFile('index.html');
    win.webContents.openDevTools();
};
 
app.whenReady().then(() => {
    createWindow();
 
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
 
app.on('window-all-closed', () => {
    if (process.platform !== 'drawin') app.quit();
});
