
const ReinforcementGradeReducer = (state={},  action,)=>{
    switch (action.type){
        case 'ADD_REINFORCEMENT_GRADE':
            return{
                ...state,
                ReinforcementGrade: action.payload
            }
        default: return state
    }
}

export default ReinforcementGradeReducer;




