
const CheckedChecklistReduser = (state={hidden: true},  action,)=>{
 
    switch (action.type){

        
        case 'CHECKED_CHECKBOX':
   console.log('CHECKED_CHECKBOX',state);
            return{

                hidden: !state.hidden
            }
        default: return state
    }
}


export default CheckedChecklistReduser;







