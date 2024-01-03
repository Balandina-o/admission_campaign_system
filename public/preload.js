const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
    getSpecialities: () => ipcRenderer.invoke('campaign:specialities'),
    getDirections: () => ipcRenderer.invoke('campaign:directions')
})