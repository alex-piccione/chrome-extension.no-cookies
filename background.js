import cleaner from "./cleaner.js"
import config from "./data/websites.js"

const _log = (msg, arg) => console.log(`[Annoyance Killer] > ${msg}`, arg)

// prepare common actions
const actionsForAny = config.sites.find((s) => s.url === "<any>").actions
_log(`Found ${actionsForAny.length} actions to execute for any site.`)

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  _log("tab.onUpdated")

  if (tab.active && changeInfo.status === "complete") {
    // skip urls like "chrome://" to avoid extension error
    if ( tab.url?.startsWith("chrome:") 
      || tab.url?.startsWith("mx://extensions") 
      || tab.url?.startsWith("http://localhost")) return undefined

    _log("tab.onUpdated - execute script")
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: cleaner.clean,
      args: [config, actionsForAny],
    })
  }
})
