import cleaner from "./cleaner"
import config from "../data/websites_actions"
import {Config, Action } from "./interfaces"

const manifest = chrome.runtime.getManifest();

//console.log(manifest.version); // Access the version
//console.log(manifest.description); // Access the description

const log = (msg:string, arg?:any[]) => console.log(`[${manifest.name}] ${msg}`, arg)

// prepare common actions
const actionsForAny = config.sites.find((s) => s.url === "<any>")?.actions as Action[] ?? []
log(`Found ${actionsForAny.length} actions to execute for any website.`)

cleaner.clean(config as Config, log, actionsForAny)
