export default {
  version: "1.0",
  sites: [
    {
      url: "<any>",
      actions: [
        { remove_element: "div.fc-consent-root", excluded_sites: []},
        { remove_element: "div#onetrust-consent-sdk", repeat: "5 times, every 500 ms" },
        { restore_scrolling: null }
      ]      
    },
    {
      url: "reddit.com",
      actions: [{ remove_element: "shreddit-dynamic-ad-link", repeat: "1000000 times, every 1500 ms" }]
    },    
    {
      url :"moto.it",
      note: "it does not work when open the page inbackground. I don't know why.",
      actions: [
        { remove_element: "div#iubenda-cs-banner", repeat: "30 times, every 500 ms"},
        { remove_element: "div.app-masthead", repeat: "5 times, every 500 ms"},
        { remove_emenet: "div#app-checkext-template", repeat: "20 times, every 500ms"}
      ]
    },
    {
      url: "stackify.com",
      actions: [{ remove_element: "div#CybotCookiebotDialog" }],
    },
    {
      url: "aranzulla.it",
      actions: [
        { remove_element: "div#iubenda-cs-banner", repeat: "5 times, every 500 ms"  },
      ],
    },
    {
      url: "blablacar.it",
      actions: [{ remove_element: "div#didomi-popup", repeat: "3 times, every 500 ms" }],
    },
    {
      url: "coindesk.com",
      actions: [{ remove_element: "div#CybotCookiebotDialog" }],
    },
    {
      url: "itsmycode.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "forums.androidcentral.com",
      actions: [{ remove_element: "div#qc-cmp2-container" }],
    },
    {
      url: "hsbc.co.uk",
      actions: [{ remove_element: "div#__tealiumGDPRecModal", repeat: "2 times, every 300 ms" }],
    },
    {
      url: "sitepoint.com",
      actions: [{ remove_element: "div#qc-cmp2-container" }],
    },
    {
      url: "appdividend.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "spguides.com",
      actions: [{ remove_element: "div#gdpr-consent-tool-wrapper" }],
    },
    {
      url: "cyberciti.biz",
      actions: [{ remove_element: "div.fc-consent-root", repeat: "3 times, every 500 ms" }],
    },
    {
      url: "akashmittal.com",
      actions: [
        { remove_element: "div.fc-consent-root", repeat: "3 times, every 500 ms" },
        { type: "restore scrolling", repeat: "3 times, every 500 ms" },
      ],
    },
    {
      url: "pisos.com",
      actions: [{ remove_element: "div#didomi-host" }, { remove_element: "div[style*='z-index']" }],
    },
    {
      url: "linuxhint.com",
      actions: [{ remove_element: "div#gdpr-consent-tool-wrapper" }],
    },
    {
      url: "ryadel.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "corriere.it",
      actions: [
        { remove_element: "div.privacy-cp-wall", repeat: "10 times, every 500 ms" },
        { remove_element: "div.bck-adblock", repeat: "10 times, every 500 ms" },
        { remove_class_from_html: "has--adblock", repeat: "15 times, every 500 ms"},
        { remove_class_from_body: "noScroll", repeat: "15 times, every 500 ms"},
        { remove_element: "div#rcsad_TopLeft_wrapper"},
        { remove_iframes: null },
        { remove_scripts: null },
      ]
    },
    {
      url: "forst.tax",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "krispitech.com",
      actions: [{ remove_element: "div.fc-consent-root" }],
    },
    {
      url: "mashtips.com",
      actions: [{ remove_element: "div#gdpr-consent-tool-wrapper" }],
    },
    {
      url: "tomshardware.com",
      actions: [
        { remove_element: "div#qc-cmp2-container" },
        { remove_element: "div#slice-container-newsletterForm-exitIntent" }],
    },
    {
      url: "techradar.com",
      actions: [        
        { remove_element: "div#qc-cmp2-container" }, 
        { remove_element: "div#slice-container-newsletterForm-exitIntent" },
        { remove_element: ".sp_message_container_808540", repeat: "3 times, every 1500 ms" },
        { remove_element: "div[id^=sp_message_container_]", repeat: "5 times, every 500 ms"}]
    },
    {
      url: "koskila.net",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "csharp.hotexamples.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper"}]
    },
    {
      urL: "baeldung.com",
      actions: [{ remove_element: "div#qc-cmp2-container", repeat: "3 times, every 500 ms",}]
    },
    {
      url: "thewindowsclub.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }]
    },
    {
      url: "windowsloop.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "wikihow.it",
      actions: [{ remove_element: "div.fc-consent-root"}]
    },
    {
      url: "zoopla.co.uk",
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
      url: "letuelezioni.it",
      actions: [{ remove_element: "div#pp", repeat: "3 times, every 500 ms" }],
    },
    {
      url: "expertreviews.co.uk",
      actions: [
        { remove_element: "div[id^=sp_message_container_]", repeat: "5 times, every 500 ms"},
        { remove_class_from_html: "sp_message_open"}]
    },
    {
      url: "helpdeskgeek.com",
      actions: [{ remove_element: "div#snigel-cmp-framework", repeat: "3 times, every 1000 ms"}]
    },
    {
      url: "allevents.in",
      actions: [{ remove_element: "div.fc-consent-root", repeat: "6 times, every 1000 ms"}]
    },
    {
      url: "cherry-world.com",
      actions: [
        { remove_element: "div#usercentrics-root", repeat: "6 times, every 500 ms"},
        { remove_class_from_body: "overflowHidden", repeat: "6 times, every 1000 ms"}
      ]
    },
    {
      url: "csharp.hotexamples.com",
      actions: [{ remove_element: "div#ez-cmpv2-container"}]
    },
    {
      url: "oraridiapertura24.it",
      actions: [{remove_element: "div#qc-cmp2-container"}]
    },
    {
      url: "codeigo.com",
      actions: [{remove_element: "div#ez-cmpv2-container"}]
    },
    {
      url: "autoscout24.it",
      actions: [{remove_element: "div#as24-cmp-popup", repeat: "3 times, every 500 ms"}]
    },
    {
      url: "cpu.userbenchmark.com",
      actions: [{remove_element: "div.fc-consent-root"}]
    },
    {
      url:"etsy.com",
      actions: [
        { remove_element: "div#wt-portals" },
        { remove_class_from_body: "wt-body-no-scroll"}
      ]
    },
    {
      url: "i.maxask.com",
      actions: [{remove_element: "div.fc-consent-root"}]
    },
    {
      url: "dotnettutorials.net",
      actions: [{remove_element: "div#ez-cmpv2-container", repeat: "5 times, every 500 ms"}]
    },
    {
      url: "advrider.com",
      actions: [{ remove_element: "div#qc-cmp2-container", repeat: "10 times, every 500 ms" }]
    },
    {
      url: "geeksforgeeks.org",
      actions: [{remove_element: "div.fc-consent-root", repeat: "5 times, every 500 ms"}]
    },
    {
      url: "freecodecamp.org", 
      actions: [{remove_element: "div.fc-consent-root", repeat: "5 times, every 500 ms"}]
    },
    {
      url: "dnschecker.org",
      actions: [{remove_element: "div#sp_message_container_1117104", repeat: "5 times, every 500 ms"}]
    },
    {
      url: "timeanddate.com",
      actions: [{ remove_element: "div#qc-cmp2-container", repeat: "5 times, every 500 ms"}]
    },
    {
      url: "ricette.giallozafferano.it", actions: [
        {remove_element: "div#iubenda-cs-banner", repeat: "5 times, every 500 ms"},
        {remove_class_from_body: "cp-banner-visible"}
      ]
    },
    {
      url: "repubblica.it",
      actions: [{remove_element: "div#iubenda-cs-banner", repeat: "5 times, every 500 ms"}]
    },
    {
      url: "handymansworld.net",
      actions: [{remove_element: "div[data-name='mediavine-gdpr-cmp']", repeat: "15 times, every 500 ms"}]
    }
  ],
}
