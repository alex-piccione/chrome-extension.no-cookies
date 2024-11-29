# Browser Annoyance Killer

This is a Chrome extension to get rid off the :cookie: settings dialog of many websites.  
It works also with Chrome and  Maxthon browser. Never tested on other browsers.  

## How to install?

Download this repo somewhere in your PC (<https://github.com/alex-piccione/chrome-extension.no-cookies/archive/refs/heads/main.zip>).  
Open browser extensions Manager panel (for Chrome you can use this URL "chrome://extensions/").  
Enable Developer Mode.  
With Developer Mode on, you can use the "Load unpacked" command and point to the folder where you extract this repo.  
Done. The extension is installed.  
If you are already in a page with opened Cookies settings panels, you need to reload it (CTRL+R).
  
### Websites that we can't fix

|     | Site                | Status        | Note                                                               |
| --- | ------------------- | ------------- | ------------------------------------------------------------------ |
| :x: | www.telegraph.co.uk | Can't be done | Requires subscription                                              |
| :x: | www.timeanddate.com | Not solved    | Removing the cookies panels seems to breack some functionalities   |
| :x: | corriere.it         | Not solved    | After many pages reload tehre is a redirect to a subscription page |

## I found a website that is not managed

Please, [open a request](https://github.com/alex-piccione/chrome-extension.no-cookies/issues/new?title=Suggest%20of%20website%20to%20manage&body=Hi,%20I%27d%20like%20that%20this%20extension%20manage%20this%20website:%20...%20Thank%20you.).

## Know bugs and defects

- Not registered as official Chrome extension because still in initial stage of development

## For developer

Chrome extensions API reference: https://developer.chrome.com/docs/extensions/reference  
Markdown emojis: https://github.com/markdown-templates/markdown-emojis
