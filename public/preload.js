const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
    getSpecialities: () => ipcRenderer.invoke('campaign:specialities:load'),
    createSpeciality: (data) => ipcRenderer.invoke('campaign:speciality:create', data),
    updateCurrentSpec: (id, data) => ipcRenderer.invoke('campaign:speciality:update', id, data),
    deleteExistingSpec: (id) => ipcRenderer.invoke('campaign:speciality:delete', id),
    getDirections: () => ipcRenderer.invoke('campaign:directions:load'),
    createDirection: (data) => ipcRenderer.invoke('campaign:direction:create', data),
})