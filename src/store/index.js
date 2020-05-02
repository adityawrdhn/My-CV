import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducer'
const loggerMiddleware = createLogger()

export default (initialState) =>
    process.env.NODE_ENV === 'production'
        ? createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
        : createStore(reducer, initialState, applyMiddleware(thunkMiddleware, loggerMiddleware))
