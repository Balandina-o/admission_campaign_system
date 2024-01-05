const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const campaign = require("./campaign");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, "icon_uust.jpg"),
  });
  mainWindow.setTitle("Баландина ПИ-426 DIPLOMA");
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : path.join(process.cwd(), "build", "index.html")
  );
};

app.whenReady().then(() => {
  ipcMain.handle("campaign:specialities:load", () => campaign.getSpecialities());
  ipcMain.handle("campaign:directions:load", () => campaign.getDirections());
  ipcMain.handle("campaign:speciality:create", (event, data) => campaign.createSpeciality(data));
  ipcMain.handle("campaign:speciality:update", (event, id, data) => campaign.updateCurrentSpec(id, data));
  createWindow();
});
app.on("window-all-closed", () => app.quit());
