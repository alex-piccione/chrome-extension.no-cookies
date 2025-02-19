export interface Config {
  logPattern: string
  sites: Site[]
}
  
interface Site {
  url: string
  actions: Action[]
}

export type Action = 
    RemoveElement | 
    RestoreScrolling 

/// This is the action as defined in the config. 
/// It is intended to be human readable and easy to write/read.
interface RepeatString { repeat:string }
//export interface ActionOnElement extends Action { selector: string }

export interface RemoveElement extends RepeatString { 
    type: "remove_element"
    remove_element: string 
    excluded_sites?: string[]
}

export interface RestoreScrolling extends RepeatString {
    type: "restore_scrolling"
}

//export interface RemoveElement extends Action {
//  selector: string
//}
//export interface RemoveElement_2 extends ActionOnElement {}
/*export type RemoveElement = RepeatString & { 
    remove_element: string 
    excluded_sites?: string[]
}*/