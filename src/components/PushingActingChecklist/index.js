import React from 'react';
import s from './pushingActingChecklist.module.css'
import classNames from 'classnames';
import ChecklistItem from '../ChecklistItem'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {addPushingActingElementChecklistAction} from '../../actions/pushingActingElementActions';


class PushingActingChecklist extends React.Component{

    render() {
const { PushingActingElementChecklist} = this.props;
if (Object.keys(PushingActingElementChecklist).length === 0){
    return(
        <div>
            Идет загрузка
        </div>
    )
}
// const { checked } = this.props.CheckedChecklistReduser;
console.log('this.props. чеклистайтем', this.props.PushingActingElementChecklist.pushingCheckItems[1]);

const secondaryChecklist = classNames(s.checklist, s.secondaryChecklist  );
// const secondaryChecklist = classNames(s.checklist, s.secondaryChecklist,  { [s.checked]: checked}  );
return (
    <div className={secondaryChecklist}>
                        {PushingActingElementChecklist.pushingCheckItems.map((item)=>{
                            return (
                                    <ChecklistItem item={item}/>
                                )
                            })
                        }
    </div>
)
    }
}
const mapStateToProps =(state)=>{
    return {
        ...state,
    }
}

const mapDispatchToProps =(dispatch)=>{
    return bindActionCreators({
        addPushingActingElementChecklist: addPushingActingElementChecklistAction,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PushingActingChecklist);

