import { applyMiddleware, createStore, compose } from "redux";
import { fromJS } from 'immutable'
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const composeStore: any = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose

const loggerMiddleware = createLogger({
  predicate: () =>
    process.env.NODE_ENV === 'development' && typeof window === 'object'
})

const store = createStore(
  rootReducer,
  composeStore(applyMiddleware(thunk, loggerMiddleware))
)


export default store