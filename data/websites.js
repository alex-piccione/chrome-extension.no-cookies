const actionTypes = ["remove element", "restore scrolling"]
const actionSubjects = ["cookies", "notification", "user signup"]

export default {
  version: "1",
  logPattern: "[XXX] {msg}",
  sites: [
    {
      url: "www.geeksforgeeks.org",
      actions: [
        {
          subject: "cookies",
          description: 'Remove element <div class="fc-consent-root">',
          type: "remove element",
          querySelector: "div.fc-consent-root",
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
        },
      ],
    },
    {
      url: "www.aranzulla.it",
      actions: [
        {
          subject: "cookies",
          description: 'Remove element <div id="iubenda-cs-banner"',
          type: "remove element",
          querySelector: "div#iubenda-cs-banner",
        },
        {
          subject: "cookies",
          description: "Reset the web page scrolling functionality",
          type: "restore scrolling",
          //on: ["html", "body"],
          repeat: "3 times, every 500 ms",
        },
      ],
    },
    {
      url: "www.letuelezioni.it",
      actions: [
        {
          subject: "cookies",
          description: 'Remove element <div id="pp"',
          type: "remove element",
          querySelector: "div#pp",
          repeat: "3 times, every 500 ms",
        },
      ],
    },
    {
      url: "www.blablacar.it",
      actions: [
        {
          subject: "cookies",
          description: 'Remove element <div id="didomi-popup"',
          type: "remove element",
          querySelector: "div#didomi-popup",
          repeat: "3 times, every 500 ms",
        },
      ],
    },
    {
      url: "edition.cnn.com",
      actions: [
        {
          subject: "cookies",
          type: "remove element",
          querySelector: "div#onetrust-consent-sdk",
          //repeat: "3 times, every 500 ms",
        },
      ],
    },
    {
      url: "www.coindesk.com",
      actions: [
        {
          subject: "cookies",
          type: "remove element",
          querySelector: "div#CybotCookiebotDialog",
        },
      ],
    },
    {
      url: "www.tripadvisor.com",
      actions: [
        {
          subject: "cookies",
          type: "remove element",
          querySelector: "div#onetrust-consent-sdk",
          repeat: "5 times, every 500 ms",
        },
      ],
    },
    {
      url: "itsmycode.com",
      actions: [
        {
          subject: "cookies",
          type: "remove element",
          querySelector: "div#ez-cookie-dialog-wrapper",
        },
      ],
    },
    /*{
      url: "www.timeanddate.com",
      actions: [
        {
          subject: "cookies",
          type: "remove element",
          querySelector: "div#qc-cmp2-container",
        },
      ],
    },*/
    {
      url: "forums.androidcentral.com",
      actions: [
        {
          subject: "cookies",
          type: "remove element",
          querySelector: "div#qc-cmp2-container",
        },
      ],
    },
  ],
}

// export gives an Extension Error
//export default config
