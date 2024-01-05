const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
    getSpecialities: () => ipcRenderer.invoke('campaign:specialities:load'),
    getDirections: () => ipcRenderer.invoke('campaign:directions:load'),
    createSpeciality: (data) => ipcRenderer.invoke('campaign:speciality:create', data),
    updateCurrentSpec: (id, data) => ipcRenderer.invoke('campaign:speciality:update', id, data)
})