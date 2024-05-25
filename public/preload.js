const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
    getSpecialities: () => ipcRenderer.invoke('campaign:specialities:load'),
    createSpeciality: (data) => ipcRenderer.invoke('campaign:speciality:create', data),
    updateCurrentSpec: (id, data, user) => ipcRenderer.invoke('campaign:speciality:update', id, data, user),
    deleteExistingSpec: (id) => ipcRenderer.invoke('campaign:speciality:delete', id),
    getDirections: () => ipcRenderer.invoke('campaign:directions:load'),
    createDirection: (data) => ipcRenderer.invoke('campaign:direction:create', data),
    updateCurrentDir: (id, data) => ipcRenderer.invoke('campaign:direction:update', id, data),
    deleteExistingDir: (id) => ipcRenderer.invoke('campaign:direction:delete', id),
    getStatements: () => ipcRenderer.invoke('campaign:statements:load'),
    createStatement: (data) => ipcRenderer.invoke('campaign:statement:create', data),
    updateCurrentState: (id, data) => ipcRenderer.invoke('campaign:statement:update', id, data),
    getUsersForAuth: () => ipcRenderer.invoke('campaign:usersForAuth:load'),
    whiteReport: (data) => ipcRenderer.invoke('campaign:report:write', data),
    getReportZip: () => ipcRenderer.invoke('campaign:report:zip'),
})