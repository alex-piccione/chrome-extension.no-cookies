// Initialize button with user's preferred color
let findItButton = document.getElementById("findIt")

findItButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: findId,
    })
})

// Search for div container that cover the background inside the
// current page
function findId() {
    alert("fundIt!")
    //document.body.
}
