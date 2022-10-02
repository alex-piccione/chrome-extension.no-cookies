// doesn't work: require is not defined
//const configFile = require("./wesites.config.json")
//console.log(configFile)

//const remote_url = "https://github.com/alex-piccione/chrome-extension.no-cookies/blob/feature/add-basic-stuff/wesites.config.json"

//url = chrome.runtime.getURL("./wesites.config.json")

//fetch(url)
//  .then(response => response.json()) // file contains json
//  .then(json => console.log(json))

const log = (msg, arg) => console.log(`[No-Cookies] > ${msg}`, arg)

let config = {}
const data = chrome.storage.sync.get(["config"], result => {
  log("got config from storage:", result.config)
  config = result.config
})

const removeElement = (site, query) => {
  const element = document.querySelector(query)
  if (element) element.remove()
  else
    log(`Cannot remove element "${query}" because cannot find it in ${site}.`)
}

const cleanIt = async site => {
  log(`CleanIt start for ${site}...`)
  // cannot access to chrome.tabs in content script

  //log("config.query", config?.query)

  let query = "div.fc-consent-root"
  removeElement(site, query)
}

const site = window?.location?.href

cleanIt(site)
