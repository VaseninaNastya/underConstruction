


import { combineReducers} from 'redux'
import PushingActingElementChecklistReducer from './PushingActingElementChecklistReducer'
import PushingCheckedElementChecklistReducer from './PushingCheckedElementChecklistReducer'
import CheckedChecklistReduser from './CheckedChecklistReduser'


export default combineReducers({
    PushingActingElementChecklist: PushingActingElementChecklistReducer,
    PushingCheckedElementChecklist: PushingCheckedElementChecklistReducer,
    CheckedChecklistReduser: CheckedChecklistReduser,

});