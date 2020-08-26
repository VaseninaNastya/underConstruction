
const PushingCheckedElementChecklistReducer = (state={},  action,)=>{
    switch (action.type){
        
        case 'ADD_PUSHING_CHECKED_ELEMENT_CHECKLIST':
            return{
                ...state,
pushingCheckItems: action.payload
            }
        default: return state
    }
}


export default PushingCheckedElementChecklistReducer;







