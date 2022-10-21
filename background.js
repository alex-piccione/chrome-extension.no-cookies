import config from "./data/websites.js"

const report = {
  initialization: 0,
  "successful remove": 0,
  "failed remove": 0,
}

const _log = (msg, arg) => console.log(`[No-Cookies] > ${msg}`, arg)

chrome.runtime.onInstalled.addListener(() => {
  _log("onInstalled")

  // setup the report
  chrome.storage.sync.set({ report: report, config: config })
  _log("store", { report: report, config: config })
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  _log("tab.onUpdated")

  if (tab.active && changeInfo.status === "complete") {
    // skip urls like "chrome://" to avoid extension error
    if (tab.url?.startsWith("chrome://") || tab.url?.startsWith("mx://extensions/")) return undefined

    _log("tab.onUpdated - execute script")
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      args: [config],
    })
  }
})
