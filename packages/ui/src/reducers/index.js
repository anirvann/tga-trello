import { combineReducers } from 'redux'
import tasks from './tasks'
import activities from './activities'

export default combineReducers({
    tasks,
    activities
});
