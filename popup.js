// Initialize button with user's preferred color
let cleanItButton = document.getElementById("cleanItButton")

cleanItButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    //func: logic.cleanIt, cannot referene object external to the passed function
    files: ["cleanup.js"],
  })
})

/*
const logic = {
  removeElemen: query => {
    const element = document.querySelector(query)
    if (element) element.remove()
    else
      console.error(`Cannot remove element "${query}" because cannot find it.`)
    //document.querySelector("div.fc-consent-root").remove()
  },


  cleanIt: () => {
    alert("CleanIt start...")
    console.log("CleanIt start...")
    let query = "div.fc-consent-root"
    removeElement(query)

    alert("Done!")
  },
}
*/
