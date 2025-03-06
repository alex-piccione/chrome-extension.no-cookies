# Internet Annoyance Remover

[![Create Release with ZIP](https://github.com/alex-piccione/chrome-extension.no-cookies/actions/workflows/release.yml/badge.svg)](https://github.com/alex-piccione/chrome-extension.no-cookies/actions/workflows/release.yml) 
[![Publish to Chrome Web Store](https://github.com/alex-piccione/chrome-extension.no-cookies/actions/workflows/publish.yml/badge.svg)](https://github.com/alex-piccione/chrome-extension.no-cookies/actions/workflows/publish.yml)  
  
This is a Chrome extension to remove annoying :cookie: settings dialogs and ads from many websites.  
It is tested on Chrome and also Maxthon browser.  
Not yet published on Chrome Web Store (it is a nightmare to do it).  

## How to install?

[Download the extension ZIP](https://github.com/alex-piccione/chrome-extension.no-cookies/releases/download/25.2.21.38-alpha/Annoyance-Remover-25.2.21.38-alpha.zip)
(if link does not work get it manually: <https://github.com/alex-piccione/chrome-extension.no-cookies/releases>)
  
Open the browser Extensions Manager panel (for Chrome you can use the URL <"chrome://extensions/">).  
Enable the _Developer Mode_.  
With _Developer Mode_ **on**, you can use the "Load unpacked" command and point to the folder where you extracted this extension.  
Done.  
If you are already in a page with opened Cookies settings panels, you need to reload the page (CTRL+R) to see the extension in action.
  
### Known websites where the extension does not work

(for the dynamic nature of websites this list cannot be 100% accurate/updated)  
| Site                | Status        | Note                                                               |
| ------------------- | ------------- | ------------------------------------------------------------------ |
| www.telegraph.co.uk | Can't be done | Requires subscription                                              |
| www.timeanddate.com | Not solved    | Removing the cookies panels seems to breack some functionalities   |
| corriere.it         | Not solved    | After many pages reload tehre is a redirect to a subscription page |

## What can I do if I found a website that is not managed?

Please, [open a request](https://github.com/alex-piccione/chrome-extension.no-cookies/issues/new?title=Suggest%20of%20website%20to%20manage&body=Hi,%20I%27d%20like%20that%20this%20extension%20manage%20this%20website:%20...%20Thank%20you.).

## Know bugs and defects

- Not registered as official Chrome extension because still in initial stage of development

## For developers

### Build

Code is in TypeScript and requires to be builded.  
``tsc ...`` uses the global installed TypeScript, 
while ``npx tsc`` will use the library from node_modules.  
  
We use different source file and imports, so code needs to be build to create modules.  
_Parsel_ is simple and requires zero configuration, so we use it instead of the more complete _Webpack_.  

### Local tested

Run the ``./build.sh`` script.  
It creates the Chrome extension "unpacked" in the _/dist_ folder.  
In Chrome add the unpacked extension simply pointing to that directory.  

### Chrome Extension publication

Chrome extensions API reference: https://developer.chrome.com/docs/extensions/reference  
Markdown emojis: https://github.com/markdown-templates/markdown-emojis  

[Google+Chrome+Extension+deploy.md](Publish the extension)
