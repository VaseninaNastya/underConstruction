
const PushingSelectedActingElementReducer = (state={},  action,)=>{
    console.log('action.payload', action.payload);
    switch (action.type){
        case 'PUSHING_SELECTED_ACTING_ELEMENT':
            // console.log('action в редьюсере актинг элемент',action);
            return{
                ...state,
pushingSelectedActingElement: action.payload
            }
        default: return state
    }
}


export default PushingSelectedActingElementReducer;







