const { app, BrowserWindow } = require('electron');
// include the Node.js 'path' module at the top of your file
const path = require('path');
//include serialport
const SerialPort = require('serialport').SerialPort;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.loadFile('index.html');
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
    //list all the available ports and put them in a json file
    SerialPort.list().then(function(ports){
        require('fs').writeFileSync('./ports.json', JSON.stringify(ports));
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

