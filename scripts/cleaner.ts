import { Config, Action, RemoveElement, isRemoveElement, isRestoreScrolling, isRemoveClassFromHtml, isRemoveClassFromBody, isRemoveIFrames, isRemoveScripts } from "./interfaces"

interface Repeat {
  times: number,
  delay?: number /* milliseconds */
}

const cleaner = {

  clean: (config:Config, log:(msg:string) => void, actionsForAny:Action[]) => {

    const cssAnimation = "@keyframes remove_element { from { opacity:.9; } to { opacity: 0; scale: (0.1, 0.1)} }"

    const removeElement = (siteUrl:string, query:string, repeat:Repeat, count = 0) => {
      log(`remove element ${query}`)
      const element = document.querySelector(query)

      if (element) {
        var style = document.createElement("style")
        style.appendChild(document.createTextNode(cssAnimation))
        var head = document.head || document.getElementsByTagName("head")[0]
        head.appendChild(style)

        // TODO: correct after moving to TypeScript
        //element.style.animationName = "remove_element"
        //element.style.animationFillMode = "forwards"
        //element.style.animationDuration = "0.4s"

        setTimeout(() => { element.remove() }, 500)
      } else {
        if (count < 3) // avoid logging forever
          log(`Cannot remove element "${query}" because cannot find it in ${siteUrl}.`)
      }

      // some websites keep adding the ads or they came out again when user scroll the page
      if (++count < repeat.times) {
        log(`repeat removeElement ${count}`)
        setTimeout(() => removeElement(siteUrl, query, repeat, count), repeat.delay)
      }
    }

    const removeIFrames = (): void => {
      const iframes = document.querySelectorAll("iframe")
      const count = iframes.length
      log(`removeIframes found ${count} iframes`)
      
      // Convert NodeList to Array and use forEach instead of for...in
      Array.from(iframes).forEach((iframe: HTMLIFrameElement) => {
        try {
          if (iframe.parentElement) iframe.parentElement.removeChild(iframe)
          else log(`No parent element found for iframe`)
        } catch (error) {
          log(`Cannot remove iframe. ${error instanceof Error ? error.message : String(error)}`)
        }
      })
      
      log(`removeIframes removed ${count} iframes`)
    }

    const removeScripts = (): void => {
      const scripts = document.scripts
      const count = scripts.length
      log(`removeScripts found ${count} scripts`)
      
      // Convert HTMLCollection to Array and use forEach
      Array.from(scripts).forEach((script: HTMLScriptElement) => {
        try {
          if (script.parentElement) script.parentElement.removeChild(script)
          else log(`No parent element found for script`)
        } catch (error) {
          log(`Cannot remove script. ${error instanceof Error ? error.message : String(error)}`)
        }
      })
      
      log(`removeScripts removed ${count} scripts`)
    }

    const removeClassFromHtml = (className:string, repeat:Repeat, count = 0) => {
      log(`Remove Class From Html, class: ${className} (#${count})`)
      document.querySelector("html")?.classList.remove(className)

      if (++count < repeat.times) {
        setTimeout(() => removeClassFromHtml(className, repeat, count), repeat.delay)
      }
    }

    const removeClassFromBody = (className:string, repeat:Repeat, count = 0) => {
      log(`Remove Class From Body, class: ${className} (#${count})`)
      document.querySelector("body")?.classList.remove(className);

      if (++count < repeat.times) {
        setTimeout(() => removeClassFromBody(className, repeat, count), repeat.delay)
      }
    }
    
    // remove style "overflow:hidden" from HTML and BODY elements
    const restoreScrolling = (): void => {
      const html = document.querySelector("html") as HTMLHtmlElement
      const body = document.querySelector("body") as HTMLBodyElement
  
      html.style.overflow = "inherit"
      html.style.overflowX = "inherit"

      body.style.overflow = "inherit"
    }

    /*  Execute Actions for the specific website (if defined) and the  common ones */

    // get domain only (bbb.ccc from aaa.bbb.ccc) so that both wwww.domain.com and domain.com are managed
    const fullSiteUrl = window?.location?.hostname    
    const siteUrl = fullSiteUrl.split(".").slice(-2).join(".")

    const siteActions = config.sites.find((s) => s.url === siteUrl)?.actions ?? []

    log(`Clean start for ${fullSiteUrl} (${siteUrl})  (Site Actions: ${siteActions.length})...`)
    // add common actions after the specific website actions
    const allActions = siteActions.concat(actionsForAny)

    allActions.forEach((action:Action) => {

      const repeat:Repeat = { times: 0, delay: 1000 } // default

      if (action.repeat) {
        try {
          const regex = "([\\d]*) times[,\\s]*every[\\s]([\\d]*)[\\s]*ms"
          const matches = new RegExp(regex).exec(action.repeat)
          if (matches)
          {
            repeat.times = parseInt(matches[1])
            repeat.delay = matches.length > 2 ? parseInt(matches[2]) : 0
          }          
        } catch (err) {
          console.error(`Failed to parse repeat string "${action.repeat}". ${err}`)
        }
      }

      if (isRemoveElement(action)) removeElement(siteUrl, action.remove_element, repeat)
      else if (isRestoreScrolling(action)) restoreScrolling()
      else if (isRemoveClassFromHtml(action)) removeClassFromHtml(action.remove_class_from_html, repeat)
      else if (isRemoveClassFromBody(action)) removeClassFromBody(action.remove_class_from_body, repeat)
      else if (isRemoveIFrames(action)) removeIFrames()
      else if (isRemoveScripts(action)) removeScripts()
      else
        throw new Error(`action is undefined. ${action}`)             
    })  
  }
}

export default cleaner
