const rules = ["remove_element"]

export default {
  version: "1",
  query: "aaaa",
  sites: [
    {
      url: "www.geeksforgeeks.org",
      rules: [
        {
          description: 'Remove element <div class="fc-consent-root">',
          type: "remove_element",
          querySelector: "div.fc-consent-root",
        },
      ],
    },
    {
      url: "google.com",
      rules: [],
    },
  ],
}

// export gives an Extension Error
//export default config
