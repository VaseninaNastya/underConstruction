
const PushingPlateEdgeReducer = (state={},  action,)=>{
    switch (action.type){
        case 'PUSHING_COLUMN_CAPITAL':
            return{
                ...state,
PushingPlateEdge: action.payload
            }
        default: return state
    }
}


export default PushingPlateEdgeReducer;







