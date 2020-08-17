
const PushingActingElementChecklistReducer = (state={},  action,)=>{
    switch (action.type){
        case 'ADD_PUSHING_ACTING_ELEMENT_CHECKLIST':
            // console.log('action в редьюсере актинг элемент',action);
            return{
                ...state,
pushingCheckItems: action.resultForStore
            }
        default: return state
    }
}


export default PushingActingElementChecklistReducer;







