import config from "./config.js"
import load from "./yaml-loader.js"

const report = {
  initialization: 0,
  "successful remove": 0,
  "failed remove": 0,
}

const _log = (msg, arg) => console.log(`[No-Cookies] > ${msg}`, arg)

chrome.runtime.onInstalled.addListener(() => {
  _log("onInstalled")

  _log("Config loading...")
  const config__ = load().then((data) => {
    _log(`Config loaded: ${data}`, data)
    return data
  })
  // setup the report
  chrome.storage.sync.set({ report: report, config: config })
  _log("store", { report: report, config: config })
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  _log("tab.onUpdated")
  //console.log("tab.url", tab.url)

  if (tab.active && changeInfo.status === "complete") {
    // skip urls like "chrome://" to avoid extension error
    if (tab.url?.startsWith("chrome://") || tab.url?.startsWith("mx://extensions/")) return undefined

    _log("tab.onUpdated - execute script")
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      //func: <your function>, // cannot reference object that are external to the passed function
      // you can pass args as workaround
      files: ["cleanup.js"],
    })
  }

  /*chrome.tabs.executeScript(
    tabid,
    { code: "console.log('dsff');" },
    function () {
      if (chrome.runtime.lastError) {
        console.log("ERROR: " + chrome.runtime.lastError.message)
      }
    }
  )*/
})
