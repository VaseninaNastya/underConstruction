
const pushingInitialDataReducer = (state={},  action,)=>{
    switch (action.type){
        case 'ADD_PUSHING_INITIAL_DATA':
            console.log('eeeeeeaction в редьюсере актинг элемент',action);
            return{
                ...state,
pushingInitialData: action.payload
            }
        default: return state
    }
}


export default pushingInitialDataReducer;







