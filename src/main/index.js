'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'
const fs = require('fs')
//  const os = require('os')
const path = require('path')

// 主进程

// 创建子窗口
let printWindow
function createPrintWindow(arg) {
  printWindow = new BrowserWindow({
    title: '打印',
    // show: false,
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // printWindow.loadURL(`file://C:\\Users\\86188\\Desktop\\electron-vue-element-admin\\static\\print.html`)
  printWindow.loadFile(`../../static/print.html`)
  setTimeout(() => {
    initPrintEvent(printWindow, mainWindow, arg)
  }, 1000)
}

// 初始化打印机

function initPrintEvent(printWindow, mainWindow, arg) {
  printWindow.webContents.send('webcontent-print-render', { html: arg })
  ipcMain.on('webcontent-print-do', async(event, arg) => {
    const currentWin = BrowserWindow.fromWebContents(event.sender)
    console.log('进来了吗', currentWin.webContents)
    // let currentWin = BrowserWindow.getFocusedWindow()()
    const data = await currentWin.webContents.printToPDF({})

    // eslint-disable-next-line no-undef
    const filePath = path.join(__static, 'allen.pdf')
    console.log('filePath', filePath)
    fs.writeFile(filePath, data, error => {
      if (error) throw error
      console.log('保存成功')
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
    console.log('print-start')
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
    height: 563,
    useContentSize: true,
    width: 1000,
    // frame:false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  })

  mainWindow.maximize()
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

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
