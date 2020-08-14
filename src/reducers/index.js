


import { combineReducers} from 'redux'
import PushingActingElementChecklistReducer from './PushingActingElementChecklistReducer'
import PushingCheckedElementChecklistReducer from './PushingCheckedElementChecklistReducer'


export default combineReducers({
    PushingActingElementChecklist: PushingActingElementChecklistReducer,
    PushingCheckedElementChecklist: PushingCheckedElementChecklistReducer,

});