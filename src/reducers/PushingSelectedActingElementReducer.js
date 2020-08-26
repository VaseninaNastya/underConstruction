
const PushingSelectedActingElementReducer = (state={},  action,)=>{

    switch (action.type){
        case 'PUSHING_SELECTED_ACTING_ELEMENT':

            return{
                ...state,
pushingSelectedActingElement: action.payload
            }
        default: return state
    }
}


export default PushingSelectedActingElementReducer;







