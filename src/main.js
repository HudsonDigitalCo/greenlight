"use strict";

// Modules to control application life and create native browser window
const { app, BrowserWindow,nativeTheme } = require('electron')
const path = require('path')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 275,
    height: 400,

    // Start: this is what hides the title bar and makes it "frameless"
    // @TODO: with this enabled, you can't drag the window
    // titleBarStyle: 'hidden', 
    // titleBarOverlay: true,
    // frame: false, 
    // End: this is what hides the title bar and makes it "frameless"

    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,  // this is what allows us to use require statements in imported files
      contextIsolation: false,  // this is what allows us to use require statements in imported files
    }
  })

  // only has dark mode support for the moment
  nativeTheme.themeSource = 'dark'

  // and load the index.html of the app.
  mainWindow.loadFile('src/index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools({mode: 'detach'})
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.