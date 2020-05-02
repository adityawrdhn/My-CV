import { combineReducers } from 'redux'
import { language } from './language'
import { theme } from './theme'
const reducer = combineReducers({
    language: language,
    theme: theme,
})
export default reducer
