import cleaner from "./cleaner"
import config from "../data/websites_actions"
import { Action, Config } from "./interfaces"

const _log = (msg:string, arg?:any[]) => console.log(`[Annoyance Killer] > ${msg}`, arg)

const c = config as Config

// prepare common actions
const actionsForAny = config.sites.find((s) => s.url === "<any>")?.actions as Action[] ?? []
_log(`Found ${actionsForAny.length} actions to execute for any website.`)

cleaner.clean(c, actionsForAny)
