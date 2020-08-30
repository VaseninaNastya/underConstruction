
const PushingActingElementChecklistReducer = (state={},  action,)=>{
    switch (action.type){
        case 'ADD_PUSHING_ACTING_ELEMENT_CHECKLIST':
            return{
                ...state,
pushingCheckItems: action.payload
            }
        default: return state
    }
}


export default PushingActingElementChecklistReducer;







