// <reference path="../node_modules/chrome-extension-async/chrome-extension-async.d.ts" />
import 'chrome-extension-async'

let removeButton = document.getElementById("removeButton");
let editButton = document.getElementById("editButton");
let item = <HTMLInputElement>document.getElementById("itemName");

async function getActiveTabId () {
	const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true })
	return activeTab.id
}

removeButton?.addEventListener("click", async() => {
	item.value = "";
});