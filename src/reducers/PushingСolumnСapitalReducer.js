
const PushingСolumnСapitalReducer = (state={},  action,)=>{
    switch (action.type){
        case 'PUSHING_COLUMN_CAPITAL':
            return{
                ...state,
PushingСolumnСapital: action.payload
            }
        default: return state
    }
}


export default PushingСolumnСapitalReducer;







