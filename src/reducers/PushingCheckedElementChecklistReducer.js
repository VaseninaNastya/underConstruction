
const PushingCheckedElementChecklistReducer = (state={},  action,)=>{
    switch (action.type){
        
        case 'ADD_PUSHING_CHECKED_ELEMENT_CHECKLIST':
            // console.log('action в редьюсере чекед элемент',action);
            return{
                ...state,
pushingCheckItems: action.resultForStore
            }
        default: return state
    }
}


export default PushingCheckedElementChecklistReducer;







