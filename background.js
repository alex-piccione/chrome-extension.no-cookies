import config from "./config.js"

const report = {
  initialization: 0,
  "successful remove": 0,
  "failed remove": 0,
}

chrome.runtime.onInstalled.addListener(() => {
  console.log("onInstalled")

  // setup the report
  chrome.storage.sync.set({ report })
  console.log(report)
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("tab.onUpdated")
  //console.log("tab.url", tab.url)

  if (tab.active && changeInfo.status === "complete") {
    // skip urls like "chrome://" to avoid extension error
    if (
      tab.url?.startsWith("chrome://") ||
      tab.url?.startsWith("mx://extensions/")
    )
      return undefined

    console.log("tab.onUpdated - execute script")
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
