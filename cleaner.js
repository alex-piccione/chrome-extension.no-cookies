const cleaner = {

  clean: (config, actionsForAny) => {
    const log = (msg) => console.log(config.logPattern.replace("{msg}", `${msg}`))

    const cssAnimation = "@keyframes remove_element { from { opacity:.9; } to { opacity: 0; scale: (0.1, 0.1)} }"

    const removeElement = (siteUrl, query, repeat, count = 0) => {
      log(`remove element ${query}`)
      const element = document.querySelector(query)
      // log(`removeElement "${query}" from ${siteUrl}.`)
      if (element) {
        var style = document.createElement("style")
        style.appendChild(document.createTextNode(cssAnimation))
        var head = document.head || document.getElementsByTagName("head")[0]
        head.appendChild(style)

        element.style.animationName = "remove_element"
        element.style.animationFillMode = "forwards"
        element.style.animationDuration = "0.4s"

        setTimeout(() => { element.remove() }, 500)
      } else {
        log(`Cannot remove element "${query}" because cannot find it in ${siteUrl}.`)
        if (++count < repeat.times) {
          log(`repeat removeElement ${count}`)
          setTimeout(() => removeElement(siteUrl, query, repeat, count), repeat.delay)
        }
      }
    }


    const removeIframes = () => {      
      const iframes = document.querySelectorAll("iframe")
      const count = iframes.length
      log(`removeIframes found ${count} iframes`)
      for (const iframe in iframes) {
        try {
          //iframe.parentNode.removeChild(iframe);
          // iframe.remove() does not work
          log(`iframe.parentElement: ${iframe.parentElement}`) // undefined
          log(`iframe.parentNode: ${iframe.parentNode}`) // undefined
          iframe.parentElement.removeChild(iframe)
        }
        catch (error) {
          log(`Cannot remove iframe ${iframe}. ${error} `)
        }
      }
      
      log(`removeIframes removed ${count} iframes`)
    }

    const removeScripts = () => {      
      const scripts = document.querySelectorAll("script")
      const count = scripts.length
      log(`removeScripts found ${count} scripts`)
      for (const script in scripts) {
        try {
          script.remove()
        }
        catch (error) {
          log(`Cannot remove script ${script}. ${error} `)
        }
      }
      
      log(`removeScripts removed ${count} scripts`)
    }

    const removeClassFromHtml = (className, repeat, count = 0) => {
      log(`removeClassFromHtml class: ${className} (#${count})`)
      const element = document.querySelector("html")
      element.classList.remove(className)

      if (++count < repeat.times) {
        setTimeout(() => removeClassFromHtml(className, repeat, count), repeat.delay)
      }
    }

    const removeClassFromBody = (className, repeat, count = 0) => {
      log(`removeClassFromBody class: ${className} (#${count})`)
      const element = document.querySelector("body");
      element.classList.remove(className);

      if (++count < repeat.times) {
        setTimeout(() => removeClassFromBody(className, repeat, count), repeat.delay)
      }
    }
    
    // remove style "overflow:hidden" from HTML and BODY elements
    const restoreScrolling = () => {
      document.querySelector("html").style.overflow = "inherit"
      document.querySelector("body").style.overflow = "inherit"
      document.querySelector("html").style.overflowX = "inherit"
    }

    /*  Execute Actions for the specific website (if defined) and any  */

    const fullSiteUrl = window?.location?.hostname
    // get domain only (bbb.ccc from aaa.bbb.ccc) so that both wwww.domain.com and domain.com are managed
    const siteUrl = fullSiteUrl.split(".").slice(-2).join(".")
    log(`Clean start for ${fullSiteUrl} (${siteUrl})...`)

    const siteActions = config.sites.find((s) => s.url === siteUrl)?.actions ?? []

    // add common actions after the specific website actions
    const allActions = siteActions.concat(actionsForAny)

    allActions.forEach((action) => {
      const repeat = { times: 0, delay: 1000 }
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

      if (action.remove_element) removeElement(siteUrl, action.remove_element, repeat)
      else if (action.type == "remove element") removeElement(siteUrl, action.querySelector, repeat)
      else if (action.remove_class_from_html) removeClassFromHtml(action.remove_class_from_html, repeat)
      else if (action.remove_class_from_body) removeClassFromBody(action.remove_class_from_body, repeat)
      else if (action.type === "restore scrolling") restoreScrolling()
      else if (action.type === "remove iframes") removeIframes()
      else if (action.type === "remove scripts") removeScripts()
    })  

  }
}

export default cleaner
