import React from 'react';
import s from './pushingChecklist.module.css'
import classNames from 'classnames';
import ChecklistItem from '../ChecklistItem'
import {connect} from 'react-redux';

import { addPushingActingElementChecklistAction } from '../../actions/pushingActingElementActions';



class PushingChecklist extends React.Component{

    render() {
console.log("пропс в чеклист", this.props);
const { PushingActingElementChecklist, PushingCheckedElementChecklist } = this.props;
console.log(PushingActingElementChecklist.length);
if (Object.keys(PushingActingElementChecklist).length === 0){
    console.log('============');
    return(
        <div>
            Идет загрузка
        </div>
    )
}

        return(
        
            <>
            {console.log('MAP: ',PushingActingElementChecklist.pushingCheckItems)}
            {PushingActingElementChecklist.pushingCheckItems.map((item)=>{
            return (
                <ChecklistItem item={item}
                />
            )
        })
    }
    </>

        )
    }
}
const mapStateToProps =(state)=>{
    console.log("стейт в пушинг чеклист", state);
    return state
}

const mapDispatchToProps =(dispatch)=>{
    return{
        changeState: () => dispatch(addPushingActingElementChecklistAction)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PushingChecklist);
