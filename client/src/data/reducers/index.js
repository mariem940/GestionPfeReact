// root reducer for combine all reducers in app
import { combineReducers } from 'redux'
import auth from './auth'
import authetud from './authetud'
import authprof from './authprof'
export default combineReducers({
    auth,
    authetud,
    authprof
});