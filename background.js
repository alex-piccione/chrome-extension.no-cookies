import cleaner from "./cleaner.js"
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


// prepare common actions
const actionsForAny = config.sites.find((s) => s.url === "<any>").actions
_log(`Found ${actionsForAny.length} actions to execute for any site.`)

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  _log("tab.onUpdated")

  if (tab.active && changeInfo.status === "complete") {
    // skip urls like "chrome://" to avoid extension error
    if (tab.url?.startsWith("chrome://") || tab.url?.startsWith("mx://extensions/") || tab.url?.startsWith("http://localhost")) return undefined

    _log("tab.onUpdated - execute script")
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: cleaner.clean,
      args: [config, actionsForAny],
    })
  }
})
