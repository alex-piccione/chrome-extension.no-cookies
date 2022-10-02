// doesn't work: require is not defined
//const configFile = require("./wesites.config.json")
//console.log(configFile)

//const remote_url = "https://github.com/alex-piccione/chrome-extension.no-cookies/blob/feature/add-basic-stuff/wesites.config.json"

//url = chrome.runtime.getURL("./wesites.config.json")

//fetch(url)
//  .then(response => response.json()) // file contains json
//  .then(json => console.log(json))

const log = (msg, arg) => console.log(`[No-Cookies] ${msg}`, arg)

/*
let config = {}
const data = chrome.storage.sync.get(["config"], result => {
  log("got config from storage:", result.config)
  config = result.config
})
*/

const getConfig = async () =>
  new Promise((resolve, reject) => {
    chrome.storage.sync.get(["config"], result => {
      if (result.config) resolve(result.config)
      else reject()
    })
  })

const removeElement = (site, query) => {
  const element = document.querySelector(query)
  if (element) element.remove()
  else
    log(`Cannot remove element "${query}" because cannot find it in ${site}.`)
}

const cleanIt = config => {
  const siteUrl = window?.location?.hostname
  log(`CleanIt start for ${siteUrl}...`)
  // cannot access to chrome.tabs in content script

  const site = config.sites.find(s => s.url === siteUrl)

  if (site.rules) {
    site.rules.forEach(rule => {
      if (rule.type == "remove_element") {
        removeElement(siteUrl, rule.querySelector)
      }
    })
  }
}

//log("Get config from storage...")

//log("Got config from storage", config)

/*
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 6000)
})
*/

getConfig()
  .then(config => cleanIt(config))
  .catch(err => console.error(`Failed to get config. ${err}`))
