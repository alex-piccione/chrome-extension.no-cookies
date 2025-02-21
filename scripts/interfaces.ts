export interface Config {
  sites: Site[]
}
  
interface Site {
  url: string
  actions: Action[]
}

export type Action = 
  RemoveElement | 
  RestoreScrolling |
  RemoveClassFromHtml |
  RemoveClassFromBody |
  RemoveIFrames |
  RemoveScripts

/// This is the action as defined in the config. 
/// It is intended to be human readable and easy to write/read.
interface RepeatString { repeat:string }
//export interface ActionOnElement extends Action { selector: string }

///--- Actions

export interface RemoveElement extends RepeatString { 
  remove_element: string 
  excluded_sites?: string[]
}

export interface RestoreScrolling extends RepeatString {
  restore_scrolling: null
}

export interface RemoveClassFromHtml extends RepeatString {
  remove_class_from_html: string
}

export interface RemoveClassFromBody extends RepeatString {
  remove_class_from_body: string
}

export interface RemoveIFrames extends RepeatString {
  remove_iframes: null
}

export interface RemoveScripts extends RepeatString {
  remove_scripts: null
}

///---

///--- Type guard functions
export function isRemoveElement(action: Action): action is RemoveElement {
  return 'remove_element' in action;
}

export function isRestoreScrolling(action: Action): action is RestoreScrolling {
  return 'restore_scrolling' in action;
}

export function isRemoveClassFromHtml(action: Action): action is RemoveClassFromHtml {
  return 'remove_class_from_html' in action;
}

export function isRemoveClassFromBody(action: Action): action is RemoveClassFromBody {
  return 'remove_class_from_body' in action;
}

export function isRemoveIFrames(action: Action): action is RemoveIFrames {
  return 'remove_iframes' in action;
}

export function isRemoveScripts(action: Action): action is RemoveScripts {
  return 'remove_scripts' in action;
}

///---
