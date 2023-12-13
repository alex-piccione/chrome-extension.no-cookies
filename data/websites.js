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
      actions: [
        { remove_element: "div.fc-consent-root", repeat: "3 times, every 500 ms" },
        {
          description: "Reset the web page scrolling functionality",
          type: "restore scrolling",
          //on: ["html", "body"],
          repeat: "3 times, every 500 ms",
        },
      ],
    },
    {
      url: "www.pisos.com",
      actions: [{ remove_element: "div#didomi-host" }, { remove_element: "div[style*='z-index']" }],
    },
    {
      url: "linuxhint.com",
      actions: [{ remove_element: "div#gdpr-consent-tool-wrapper" }],
    },
    {
      url: "www.ryadel.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "auth0.com",
      actions: [{ remove_element: "div#onetrust-consent-sdk" }],
    },
    {
      url: "www.corriere.it",
      actions: [{ remove_element: "div.privacy-cor-wall" }],
    },
    {
      url: "forst.tax",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "krispitech.com",
      actions: [{ remove_element: "div.fc-consent-root" }, { type: "restore scrolling" }],
    },
    {
      url: "mashtips.com",
      actions: [{ remove_element: "div#gdpr-consent-tool-wrapper" }],
    },
    {
      url: "www.geeksforgeeks.org",
      actions: [{ remove_element: "div.fc-consent-root" }],
    },
    {
      url: "www.tomshardware.com",
      actions: [{ remove_element: "div#qc-cmp2-container" }, { remove_element: "div#slice-container-newsletterForm-exitIntent" }],
    },
    {
      url: "www.koskila.net",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "csharp.hotexamples.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper"}]
    },
    {
      urL: "www.baeldung.com",
      actions: [ { remove_element: "div#qc-cmp2-container", repeat: "3 times, every 500 ms",}]
    },
    {
      url: "www.thewindowsclub.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }]
    },
    {
      url: "windowsloop.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "www.wikihow.it",
      actions: [{ remove_element: "div.fc-consent-root"}]
    },
    {
      url: "www.zoopla.co.uk",
      actions: [{ remove_element: "div#gdpr-consent-tool-wrapper", repeat: "3 times, every 500 ms" }]
    },
    {
      url: "linuxize.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper", repeat: "3 times, every 500 ms" }]
    },
    {
      url: "ukradiolive.com",
      actions: [{remove_element: "div#qc-cmp2-container", repeat: "10 times, every 1500 ms"}]
    },
    {
      url: "es.wallapop.com",
      actions: [{remove_element: "div#onetrust-consent-sdk", repeat: "10 times, every 500 ms"}]
    },
    {
      url: "www.techradar.com",
      actions: [
        { remove_element: "div[id^=sp_message_container_]", repeat: "5 times, every 500 ms"},
        { remove_element: "div#qc-cmp2-container" }, { remove_element: "div#slice-container-newsletterForm-exitIntent" }],
    },
    {
      url: "www.expertreviews.co.uk",
      actions: [{ remove_element: "div[id^=sp_message_container_]", repeat: "5 times, every 500 ms"},
      { remove_class_from_html: "sp_message_open"}]
    },
    {
      url: "helpdeskgeek.com",
      actions: [
        { remove_element: "div#snigel-cmp-framework", repeat: "3 times, every 1000 ms"}
      ]
    },
    {
      url: "allevents.in",
      actions: [
        { remove_element: "div.fc-consent-root", repeat: "3 times, every 1000 ms"},
        { type: "restore scrolling" }
      ]
    },
    {
      url: "csharp.hotexamples.com",
      actions: [{ remove_element: "div#ez-cmpv2-container"}]
    },
    {
      url: "www.oraridiapertura24.it",
      actions: [{remove_element: "div#qc-cmp2-container"}]
    }
  ],
}
