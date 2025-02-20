# Internet Annoyance Killer

This is a Chrome extension to remove annoying :cookie: settings dialogs and ads from many websites.  
It is tested on Chrome and also Maxthon browser.

## How to install?

Download this repo somewhere in your PC (<https://github.com/alex-piccione/chrome-extension.no-cookies/archive/refs/heads/main.zip>).  
Open the browser Extensions Manager panel (for Chrome you can use the URL "chrome://extensions/").  
Enable the Developer Mode.  
With Developer Mode on, you can use the "Load unpacked" command and point to the folder where you extracted this repo.  
Done. The extension is installed.  
If you are already in a page with opened Cookies settings panels, you need to reload it (CTRL+R).
  
### Known websites where the extension does not work

(for the dynamic nature of websites this list cannot be 100% accurate/updated)  
|     | Site                | Status        | Note                                                               |
| --- | ------------------- | ------------- | ------------------------------------------------------------------ |
| :x: | www.telegraph.co.uk | Can't be done | Requires subscription                                              |
| :x: | www.timeanddate.com | Not solved    | Removing the cookies panels seems to breack some functionalities   |
| :x: | corriere.it         | Not solved    | After many pages reload tehre is a redirect to a subscription page |

## What can I do if I found a website that is not managed?

Please, [open a request](https://github.com/alex-piccione/chrome-extension.no-cookies/issues/new?title=Suggest%20of%20website%20to%20manage&body=Hi,%20I%27d%20like%20that%20this%20extension%20manage%20this%20website:%20...%20Thank%20you.).

## Know bugs and defects

- Not registered as official Chrome extension because still in initial stage of development

## For developers

### Build

Coe is in TypeScript and requires to be builded.  
``tsc ``

### Chrome Extension publication

Chrome extensions API reference: https://developer.chrome.com/docs/extensions/reference  
Markdown emojis: https://github.com/markdown-templates/markdown-emojis  

[Google+Chrome+Extension+deploy.md](Publish the extension)


