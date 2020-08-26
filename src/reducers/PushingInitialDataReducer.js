
const pushingInitialDataReducer = (state={},  action,)=>{
    switch (action.type){
        case 'ADD_PUSHING_INITIAL_DATA':
            return{
                ...state,
pushingInitialData: action.payload
            }
        default: return state
    }
}


export default pushingInitialDataReducer;







