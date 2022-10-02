// doesn't work: require is not defined
//const configFile = require("./wesites.config.json")
//console.log(configFile)

//const remote_url = "https://github.com/alex-piccione/chrome-extension.no-cookies/blob/feature/add-basic-stuff/wesites.config.json"

//url = chrome.runtime.getURL("./wesites.config.json")

//fetch(url)
//  .then(response => response.json()) // file contains json
//  .then(json => console.log(json))

const removeElement = query => {
  const element = document.querySelector(query)
  if (element) element.remove()
  else console.error(`Cannot remove element "${query}" because cannot find it.`)
}

const cleanIt = async () => {
  console.log("CleanIt start...")
  // cannot access to chrome.tabs in content script

  let query = "div.fc-consent-root"
  removeElement(query)
}

cleanIt()
