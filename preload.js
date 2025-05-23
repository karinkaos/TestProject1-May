const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    saveTime: (timeString) => ipcRenderer.send('save-time', timeString)
});