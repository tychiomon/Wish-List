// <reference path="../node_modules/chrome-extension-async/chrome-extension-async.d.ts" />
import 'chrome-extension-async'

import Message from './Message'

// void (async () => {
//   // Hide the slider until we know the initial volume
//   sliderElem.style.opacity = '0'

//   const initialValue = await getActiveTabVolume()
//   slider.value = initialValue * 100

//   sliderElem.style.opacity = '1'
// })()

// slider.listen('MDCSlider:input', () => {
//   const value = slider.value / 100
//   setActiveTabVolume(value)
// })

// async function getActiveTabVolume () {
//   const tabId = await getActiveTabId()
//   const message: Message = { name: 'get-tab-volume', tabId }
//   return chrome.runtime.sendMessage(message)
// }

// async function setActiveTabVolume (value: number) {
//   const tabId = await getActiveTabId()
//   const message: Message = { name: 'set-tab-volume', tabId, value }
//   return chrome.runtime.sendMessage(message)
// }
 
async function getActiveTabId () {
  const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true })
  return activeTab.id
}

async function editWish(value:number) {
	
}