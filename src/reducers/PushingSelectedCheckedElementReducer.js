
const PushingSelectedCheckedElementReducer = (state={},  action,)=>{
    switch (action.type){
        case 'PUSHING_SELECTED_CHECKED_ELEMENT':
            // console.log('action в редьюсере актинг элемент',action);
            return{
                ...state,
pushingSelectedCheckedElement: action.payload
            }
        default: return state
    }
}


export default PushingSelectedCheckedElementReducer;







