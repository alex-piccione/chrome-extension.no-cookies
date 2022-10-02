const removeElement = query => {
  const element = document.querySelector(query)
  if (element) element.remove()
  else console.error(`Cannot remove element "${query}" because cannot find it.`)
  //document.querySelector("div.fc-consent-root").remove()
}

/*function removeElement(query) {
      const element = document.querySelector(query)
      if (element) element.remove()
      else console.error(`Cannot remove element "${query}" because cannot find it.`)
      //document.querySelector("div.fc-consent-root").remove()
      }*/

const cleanIt = () => {
  console.log("CleanIt start...")
  let query = "div.fc-consent-root"
  removeElement(query)
}

cleanIt()
