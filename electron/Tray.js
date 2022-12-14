const { Tray } = require('electron')
const {resolve} = require('path')

const iconPath = resolve(__dirname,'../', 'assets','intervalo.png')

function createTray() {

    const tray = new Tray(iconPath)
    tray.setToolTip('Break Reminder')

    return tray
}

module.exports = createTray()