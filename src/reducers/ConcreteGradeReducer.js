
const ConcreteGradeReducer = (state={},  action,)=>{
    switch (action.type){
        case 'ADD_CONCRETE_GRADE':
            // console.log('action в редьюсере актинг элемент',action);
            return{
                ...state,
                ConcreteGrade: action.payload
            }
        default: return state
    }
}


export default ConcreteGradeReducer;







