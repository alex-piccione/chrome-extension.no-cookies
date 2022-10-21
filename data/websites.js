export default {
  version: "1",
  logPattern: "[FREE] {msg}",
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
          description: 'Remove element <div id="iubenda-cs-banner"',
          type: "remove element",
          querySelector: "div#iubenda-cs-banner",
        },
        {
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
          type: "remove element",
          querySelector: "div#CybotCookiebotDialog",
        },
      ],
    },
    {
      url: "www.tripadvisor.com",
      actions: [
        {
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
          type: "remove element",
          querySelector: "div#ez-cookie-dialog-wrapper",
        },
      ],
    },
    /*{
      url: "www.timeanddate.com",
      actions: [
        {
          type: "remove element",
          querySelector: "div#qc-cmp2-container",
        },
      ],
    },*/
    {
      url: "forums.androidcentral.com",
      actions: [
        {
          type: "remove element",
          querySelector: "div#qc-cmp2-container",
        },
      ],
    },
    {
      url: "www.hsbc.co.uk",
      actions: [{ remove_element: "div#__tealiumGDPRecModal", repeat: "2 times, every 300 ms" }],
    },
  ],
}
