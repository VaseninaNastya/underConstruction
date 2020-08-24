import { combineReducers} from 'redux'
import PushingActingElementChecklistReducer from './PushingActingElementChecklistReducer'
import PushingCheckedElementChecklistReducer from './PushingCheckedElementChecklistReducer'
import PushingSelectedActingElementReducer from './PushingSelectedActingElementReducer'
import PushingSelectedCheckedElementReducer from './PushingSelectedCheckedElementReducer'
import PushingInitialDataReducer from './PushingInitialDataReducer'
import ConcreteGradeReducer from './ConcreteGradeReducer'

export default combineReducers({
    PushingActingElementChecklist: PushingActingElementChecklistReducer,
    PushingCheckedElementChecklist: PushingCheckedElementChecklistReducer,
    PushingSelectedActingElement: PushingSelectedActingElementReducer,
    PushingSelectedCheckedElement: PushingSelectedCheckedElementReducer,
    PushingInitialData: PushingInitialDataReducer,
    ConcreteGrade: ConcreteGradeReducer
})