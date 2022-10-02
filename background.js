let website = "#3aa757"

chrome.runtime.onInstalled.addListener(() => {
  console.log("onInstalled")
  //chrome.storage.sync.set({ website })
  //console.log("Default background color set to %cgreen", `color: ${website}`)
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("tab.onUpdated")

  if (tab.active && changeInfo.status === "complete") {
    /*chrome.tabs.executeScript({
      code: "console.log('dsff');",
    })*/
    console.log("tab.onUpdated - execute script")
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      //func: logic.cleanIt, cannot referene object external to the passed function
      // you can pass args
      files: ["cleanup.js"],
    })
  }
})

/*
chrome.tabs.executeScript(tab.id, { code: "console.log('dsff');" }, function() {
  if (chrome.runtime.lastError) {
       console.log("ERROR: " + chrome.runtime.lastError.message);
  }
});
*/
