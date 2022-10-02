const actionTypes = ["remove element"]
const actionSubjects = ["cookies", "notification", "user signup"]

export default {
  version: "1",
  sites: [
    {
      url: "www.geeksforgeeks.org",
      actions: [
        {
          subject: "cookies",
          description: 'Remove element <div class="fc-consent-root">',
          type: "remove element",
          querySelector: "div.fc-consent-root",
          delay: 0,
        },
      ],
    },
    {
      url: "stackify.com",
      actions: [
        {
          subject: "cookies",
          description: 'Remove element <div id="CybotCookiebotDialog"',
          type: "remove element",
          querySelector: "div#CybotCookiebotDialog",
          delay: 0,
        },
      ],
    },
  ],
}

// export gives an Extension Error
//export default config
