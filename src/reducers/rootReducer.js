import { combineReducers } from 'redux';
import liveReducers from './liveReducers'

const rootReducer = combineReducers({
    live: liveReducers
})

export default rootReducer