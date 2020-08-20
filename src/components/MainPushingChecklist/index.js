import React from 'react';
import s from './mainPushingChecklist.module.css'
import classNames from 'classnames';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {addPushingCheckedElementChecklistAction} from '../../actions/pushingCheckedElementActions';
import PushingActingChecklist from '../PushingActingChecklist';



class MainPushingChecklist extends React.Component{
    state = { checked: false}

    checkedCheckbox = (id) => {
        this.setState({selected:id})
console.log(id);
    }
    render() {
const {PushingCheckedElementChecklist } = this.props;
console.log('PushingCheckedElementChecklist', PushingCheckedElementChecklist);
if (Object.keys(PushingCheckedElementChecklist).length === 0){
    return(
        <div>
            Идет загрузка
        </div>
    )
}

console.log('this.props. пушинг чеклист', this.props);

        return(
            <div>
                {PushingCheckedElementChecklist.pushingCheckItems.map((item)=>{
                    return (
                        <div   onClick={()=>this.checkedCheckbox(item.id)} className={s.checklist}>
                            <div >{item.name}</div>
                            { (item.id===this.state.selected) ?
                            <PushingActingChecklist 
                                id={PushingCheckedElementChecklist.pushingCheckItems.id}
                                />
                                : null }
                        </div>
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
        addPushingCheckedElementChecklist: addPushingCheckedElementChecklistAction,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPushingChecklist);