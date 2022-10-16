const url = chrome.runtime.getURL("./data/websites.yml")

const parseConfig = (text) => {
  console.log(typeof text)
  console.log("text", text)

  const sites = []

  var site = undefined;
  var startSite = false
  text.split("\n").forEach((line) => {

    // Why I want YAML?
    // - much easier to read and add values
    // - clean and short

    // Parsing the YAML can be 
    // A. super generic, but it will be long and difficult and never good as a 100% tested library
    // B. super specific, but it will be too rigid and impedes quick and easy changes in the configuration format
    // Is short: not a good idea

    switch (line.trim()) {
        case "":
            site = {}
                url: 
            }
            if (site) sites.push(site)
        case "- sites:":
        default:
            console.log("ignored line", line)
    }
  })

  return sites;
}

const loadConfig = async () => {
  const response = await fetch(url)
  return response.ok ? parseConfig(await response.text()) : response.statusText
}

export default loadConfig
