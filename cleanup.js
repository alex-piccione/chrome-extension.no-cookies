//url = chrome.runtime.getURL("./wesites.config.json")

//fetch(url)
//  .then(response => response.json()) // file contains json
//  .then(json => console.log(json))

var log = (msg, arg) => console.log(`[No-Cookies] ${msg}`, arg)
var counter = 1
log("counter", counter++)

var getConfig = async () =>
  new Promise((resolve, reject) => {
    chrome.storage.sync.get(["config"], (result) => {
      if (result.config) resolve(result.config)
      else reject()
    })
  })

const removeElement = (siteUrl, query, repeat, count = 0) => {
  const element = document.querySelector(query)
  if (element) element.remove()
  else {
    log(`Cannot remove element "${query}" because cannot find it in ${siteUrl}.`)
    if (++count < repeat.times) {
      log(`repeat removeElement ${count}`)
      setTimeout(() => removeElement(siteUrl, query, repeat, count), repeat.delay)
    }
  }
}

const restoreScrolling = (siteUrl, repeat, count = 0) => {
  log("document.html.style.ovefflow", document.html?.style?.ovefflow)
  log("document.body.style.ovefflow", document.body?.style?.ovefflow)
  // document.html is undefined (www.aranzulla.it)
  window.document.body.parentNode.style.overflow = "scroll" // "inherit" doesn't work
  window.document.body.style.overflow = "scroll"
  //  document.html.style.ovefflow = "inherited"
  //if (document.body.style?.ovefflow === "hidden")
  //  document.body.style.ovefflow = "inherited"

  if (++count < repeat.times) {
    log(`repeat restoreScrolling ${count}`)
    setTimeout(() => restoreScrolling(siteUrl, repeat, count), repeat.delay)
  }
}

const cleanIt = (config) => {
  const siteUrl = window?.location?.hostname
  log(`CleanIt start for ${siteUrl}...`)
  // cannot access to chrome.tabs in content script

  const site = config.sites.find((s) => s.url === siteUrl)

  /*if (!site?.actions) {
    log("...nothing to do")
  }*/

  site?.actions?.forEach((action) => {
    log(`Apply action for "${action.subject}": "${action?.description}"`)

    const repeat = { times: 0, delay: 0 }
    try {
      if (action.repeat) {
        const regex = "([\\d]*) times[,\\s]*every[\\s]([\\d]*)[\\s]*ms"
        const matches = new RegExp(regex).exec(action.repeat)
        repeat.times = parseInt(matches[1])
        repeat.delay = matches.length > 2 ? parseInt(matches[2]) : 0
      }
    } catch (err) {
      console.error(`Failed to parse repeat string "${action.repeatString}". ${err}`)
    }

    if (action.type == "remove element") {
      removeElement(siteUrl, action.querySelector, repeat)
    } else if (action.type === "restore scrolling") restoreScrolling(siteUrl, repeat)
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
  .then((config) => cleanIt(config))
  .catch((err) => console.error(`Failed to get config. ${err}`))
