'use strict'

import { app, BrowserWindow, ipcMain, globalShortcut } from 'electron'
const fs = require('fs')
//  const os = require('os')
const path = require('path')

// 主进程

// 创建打印预览子窗口
let printWindow
function createPrintWindow(arg) {
  printWindow = new BrowserWindow({
    title: '打印',
    // show: false,
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  })

  process.env.NODE_ENV === 'development' ? printWindow.loadFile(`../../static/print.html`) : printWindow.loadURL(`file://${__dirname}/static/print.html`)

  printWindow.webContents.openDevTools()
  setTimeout(() => {
    initPrintEvent(printWindow, mainWindow, arg)
  }, 1000)
}

// 初始化打印机

function initPrintEvent(printWindow, mainWindow, arg) {
  printWindow.webContents.send('webcontent-print-render', { html: arg })
  ipcMain.on('webcontent-print-do', async(event, arg) => {
    const currentWin = BrowserWindow.fromWebContents(event.sender)
    // let currentWin = BrowserWindow.getFocusedWindow()()
    const data = await currentWin.webContents.printToPDF({})

    // eslint-disable-next-line no-undef
    const filePath = path.join(__static, 'allen.pdf')
    console.log('filePath', filePath)
    fs.writeFile(filePath, data, error => {
      if (error) throw error
    })
    printWindow.webContents.print({
      silent: false,
      printBackground: false,
      deviceName: ''
    }, (data) => {
      console.log('回调', data)
    })
  })
  // mainWindow.webContents.send("webcontent-print-render",  {html:arg})
  ipcMain.on('print-start', (event, obj) => {
    printWindow.webContents.send('print-edit', obj)
  })
  // 获得打印机列表
  ipcMain.on('getPrinters', () => {
    console.log('received getPrinters msg')
    const printers = printWindow.webContents.getPrinters()
    mainWindow.send('printerList', printers)
  })
  // 验证打印机状态并打印
  ipcMain.on('tagPrint', (event, deviceName) => {
    const printers = printWindow.webContents.getPrinters()
    console.log('printers：', printers)
    printers.forEach(element => {
      if (element.name === deviceName && element.status !== 0) {
        mainWindow.send('print-error', deviceName + '打印机异常')
        printWindow.webContents.print({
          silent: false,
          printBackground: false,
          deviceName: ''
        },
        (data) => {
          console.log('回调', data)
        })
      } else if (element.name === deviceName && !element.status) { // 打印机正常
        console.log(element.status + '-' + deviceName)
        printWindow.webContents.print({
          silent: true,
          printBackground: false,
          deviceName: element.name
        }, (success, failureReason) => {
          if (success) {
            console.log('print success')
          }
          if (failureReason === 'cancelled') {
            console.log('print cancelled')
          }
          if (failureReason === 'failed') {
            console.log('print failed')
          }
        })
      }
    })
  })
}

ipcMain.on('print-to-pdf', (event, arg) => {
  createPrintWindow(arg)
  //   // const pdfPath = path.join(os.tmpdir(), 'print.pdf')
  //   console.log('我到了print-to-pdf', arg)

  //   const win = BrowserWindow.fromWebContents(event.sender)
  //   console.log('win.webContents',win.webContents)
  //   win.webContents.send("webcontent-print-render", arg)
  // 使用默认打印参数

  //  let filePath = path.join(__static,"allen.pdf")
  //  fs.writeFile(filePath, arg, (error) => {
  //   if (error) throw error
  //       shell.openExternal(`${filePath}`)
  //       event.sender.send('wrote-pdf', filePath)
  //  })
  // const win = BrowserWindow.fromWebContents(event.sender)
  // win.webContents.printToPDF({}, (error, data) => {
  //   console.log('看看是error',error)
  //   if (error) throw error
  //   console.log('data',data)
  //   let filePath = path.join(__static,"allen.pdf")
  //   fs.writeFile(filePath, data, (error) => {
  //     if (error) throw error
  //     shell.openExternal(`C:\\Users\\86188\\Downloads\\${pdfPath}`)
  //     event.sender.send('wrote-pdf', pdfPath)
  //   })
  // })
})

// 监听登录成功
ipcMain.on('logined-message', (event, arg) => {
  mainWindow.setResizable(true)
  mainWindow.setMinimumSize(1000, 800)
  mainWindow.setMaximumSize(3840, 2160)
  mainWindow.setSize(1300, 900)
  mainWindow.center()
  event.returnValue = 'received'
})

// 监听登出成功
ipcMain.on('loginout-message', (event, arg) => {
  mainWindow.setMinimumSize(750, 470)
  mainWindow.setMaximumSize(750, 470)
  mainWindow.setSize(750, 470)
  mainWindow.setResizable(false)
  mainWindow.center()
  event.returnValue = 'received'
})

// 监听最小化
ipcMain.on('handle-min', (event, arg) => {
  mainWindow.minimize()
  event.returnValue = 'minimize'
})

// 监听最大化
ipcMain.on('handle-max', (event, arg) => {
  mainWindow.maximize()
  event.sender.send('max-reply', mainWindow.isMaximized())
  event.returnValue = 'maximize'
})

// 监听取消最大化
ipcMain.on('handle-unmax', (event, arg) => {
  mainWindow.unmaximize()
  event.sender.send('max-reply', mainWindow.isMaximized())
  event.returnValue = 'unmaximize'
})

// 监听取消最大化
ipcMain.on('handle-close', (event, arg) => {
  mainWindow.close()
  event.returnValue = 'close'
})

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:8000`
  : `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  app.allowRendererProcessReuse = true
  mainWindow = new BrowserWindow({
    width: 750,
    height: 470,
    fullscreenable: true,
    maximizable: false,
    useContentSize: true,
    // show: false,
    // transparent: true,
    // resizable: false, // 可否缩放

    movable: true, // 可否移动
    frame: false, // 隐藏设置栏
    titleBarStyle: 'hidden', // 隐藏标题栏
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  })
  mainWindow.loadURL(winURL)
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('max-reply', mainWindow.isMaximized())
  })
  globalShortcut.register('ESC', () => {
    mainWindow.unmaximize()
    mainWindow.webContents.send('max-reply', mainWindow.isMaximized())
  })
}

app.on('ready', () => {
  createWindow()
}
)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
