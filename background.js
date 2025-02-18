import cleaner from "./cleaner.js"
import config from "./data/websites.js"

const report = {
  initialization: 0,
  "successful remove": 0,
  "failed remove": 0,
}

const _log = (msg, arg) => console.log(`[IAK] > ${msg}`, arg)

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
    // skip specific browsers urls to avoid extension error
    if ( tab.url?.startsWith("file:" /* local resource */)
      || tab.url?.startsWith("chrome:") || tab.url?.startsWith("chrome-extension:") /* Chrome*/ 
      || tab.url?.startsWith("mx:") /* Maxthon */ ) return undefined

    _log("tab.onUpdated - execute script")
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        try {
         cleaner.clean()
        }
        catch(error)
        { _log(`Tab: {tab.url}. Error: {error}`) }
        },
      args: [config, actionsForAny],
    })
  }
})
