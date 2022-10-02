//url = chrome.runtime.getURL("./wesites.config.json")

//fetch(url)
//  .then(response => response.json()) // file contains json
//  .then(json => console.log(json))

const log = (msg, arg) => console.log(`[No-Cookies] ${msg}`, arg)

var counter = 1
log("counter", counter++)

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

const restoreScrolling = site => {
  log("document.html.style.ovefflow", document.html?.style?.ovefflow)
  log("document.body.style.ovefflow", document.body?.style?.ovefflow)
  // document.html is undefined (www.aranzulla.it)
  window.document.body.parentNode.style.overflow = "scroll" // "inherit" doesn't work
  window.document.body.style.overflow = "scroll"
  //  document.html.style.ovefflow = "inherited"
  //if (document.body.style?.ovefflow === "hidden")
  //  document.body.style.ovefflow = "inherited"
}

const cleanIt = config => {
  const siteUrl = window?.location?.hostname
  log(`CleanIt start for ${siteUrl}...`)
  // cannot access to chrome.tabs in content script

  const site = config.sites.find(s => s.url === siteUrl)
  site?.actions?.forEach(action => {
    log(`Apply action for "${action.subject}": "${action.description}"`)
    if (action.type == "remove element") {
      removeElement(siteUrl, action.querySelector)
    } else if (action.type === "restore scrolling") restoreScrolling(siteUrl)
  })
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
