export default {
  version: "1",
  logPattern: "[FREE!] {msg}",
  sites: [
    {
      url: "www.geeksforgeeks.org",
      actions: [{ remove_element: "div.fc-consent-root" }],
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
        { remove_element: "div#iubenda-cs-banner" },
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
      actions: [{ remove_element: "div#pp", repeat: "3 times, every 500 ms" }],
    },
    {
      url: "www.blablacar.it",
      actions: [{ remove_element: "div#didomi-popup", repeat: "3 times, every 500 ms" }],
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
      actions: [{ remove_element: "div#CybotCookiebotDialog" }],
    },
    {
      url: "www.tripadvisor.com",
      actions: [{ remove_element: "div#onetrust-consent-sdk", repeat: "5 times, every 500 ms" }],
    },
    {
      url: "itsmycode.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
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
      actions: [{ remove_element: "div#qc-cmp2-container" }],
    },
    {
      url: "www.hsbc.co.uk",
      actions: [{ remove_element: "div#__tealiumGDPRecModal", repeat: "2 times, every 300 ms" }],
    },
    {
      url: "www.sitepoint.com",
      actions: [{ remove_element: "div#qc-cmp2-container" }],
    },
    {
      url: "appdividend.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "www.spguides.com",
      actions: [{ remove_element: "div#gdpr-consent-tool-wrapper" }],
    },
    {
      url: "www.cyberciti.biz",
      actions: [{ remove_element: "div.fc-consent-root", repeat: "3 times, every 500 ms" }],
    },
    { 
      url: "akashmittal.com", 
      actions: [{ remove_element: "div.fc-consent-root", repeat: "3 times, every 500 ms" },
      {
        description: "Reset the web page scrolling functionality",
        type: "restore scrolling",
        //on: ["html", "body"],
        repeat: "3 times, every 500 ms",
      },
    ]
    },
  ],
}
