export interface Action {
  type: string
}

export interface AnyAction extends Action {
  [extraProps: string]: any
}

export type Reducer<S> = (state: S, action: AnyAction) => S

export interface User {
  id?: string
  first_name: string
  last_name: string
  avatar?: string
  email?: string
  phone?: string
}