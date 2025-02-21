import cleaner from "./cleaner"
import config from "../data/websites_actions"
import { Config } from "./interfaces"

const _log = (msg:string, arg?:any[]) => console.log(`[Annoyance Killer] > ${msg}`, arg)

// prepare common actions
const actionsForAny = config.sites.find((s) => s.url === "<any>")?.actions ?? []
_log(`Found ${actionsForAny.length} actions to execute for any website.`)

chrome.runtime.onInstalled.addListener(() => {
  _log("onInstalled")
  chrome.action.setBadgeText({
    text: "OFF",
  });
})

// https://developer.chrome.com/docs/extensions/get-started/tutorial/scripts-on-every-tab?hl=en

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  _log("tab.onUpdated")

  if (tab.active && changeInfo.status === "complete") {
    // skip specific browsers urls to avoid extension error
    if ( tab.url?.startsWith("file:" /* local resource */)
      || tab.url?.startsWith("chrome:") || tab.url?.startsWith("chrome-extension:") /* Chrome*/ 
      || tab.url?.startsWith("mx:") /* Maxthon */ 
      || tab.url?.startsWith("http://localhost")) return undefined

    _log("tab.onUpdated - execute script")
    // TODO: disabled
    /*chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: cleaner.clean,
      args: [config, actionsForAny],
    })*/
  }
})
