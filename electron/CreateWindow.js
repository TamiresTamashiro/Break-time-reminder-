 const {BrowserWindow}= require('electron')

function CreateWindow () {
    const win = new BrowserWindow({
      width: 250,
      height: 280,
      fullscreenable:false,
      frame:false,
      show:false,
      icon:__dirname
      
      

    })
  
    win.loadFile('index.html')
    

    return win
  }

  module.exports = CreateWindow()