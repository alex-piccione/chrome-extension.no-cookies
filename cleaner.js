const cleaner = {
  clean: (config) => {
    const log = (msg) => console.log(config.logPattern.replace("{msg}", `${msg}`))

    const cssAnimation = "@keyframes remove_element { from { opacity:.9; } to { opacity: 0; scale: (0.1, 0.1)} }"

    const removeElement = (siteUrl, query, repeat, count = 0) => {
      const element = document.querySelector(query)
      if (element) {
        var style = document.createElement("style")
        style.appendChild(document.createTextNode(cssAnimation))
        var head = document.head || document.getElementsByTagName("head")[0]
        head.appendChild(style)

        element.style.animationName = "remove_element"
        element.style.animationFillMode = "forwards"
        element.style.animationDuration = "0.4s"

        setTimeout(() => {
          element.remove()
        }, 450)
      } else {
        log(`Cannot remove element "${query}" because cannot find it in ${siteUrl}.`)
        if (++count < repeat.times) {
          log(`repeat removeElement ${count}`)
          setTimeout(() => removeElement(siteUrl, query, repeat, count), repeat.delay)
        }
      }
    }

    const siteUrl = window?.location?.hostname
    log(`CleanIt start for ${siteUrl}...`)

    const site = config.sites.find((s) => s.url === siteUrl)

    site?.actions?.forEach((action) => {
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

      if (action.remove_element) {
        removeElement(siteUrl, action.remove_element, repeat)
      } else if (action.type == "remove element") {
        removeElement(siteUrl, action.querySelector, repeat)
      } else if (action.type === "restore scrolling") restoreScrolling(siteUrl, repeat)
    })
  },
}

export default cleaner
