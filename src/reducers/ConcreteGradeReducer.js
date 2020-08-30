
const ConcreteGradeReducer = (state={},  action,)=>{
    switch (action.type){
        case 'ADD_CONCRETE_GRADE':
            return{
                ...state,
                ConcreteGrade: action.payload
            }
        default: return state
    }
}


export default ConcreteGradeReducer;







