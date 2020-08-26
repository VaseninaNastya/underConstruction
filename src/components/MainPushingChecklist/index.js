import React from 'react';
import s from './mainPushingChecklist.module.css'
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {addPushingCheckedElementChecklistAction} from '../../actions/pushingCheckedElementActions';
import PushingActingChecklist from '../PushingActingChecklist';
import { pushingSelectedCheckedElementActions } from '../../actions/pushingSelectedCheckedElementActions';



class MainPushingChecklist extends React.Component{
    state = {selected:null}

    checkedCheckbox = (id) => {
        this.setState({selected:id})
        this.props.pushingSelectedCheckedElement(id)
    }
    render() {
const {PushingCheckedElementChecklist } = this.props;

if (Object.keys(PushingCheckedElementChecklist).length === 0){
    return(
        <div>
            Идет загрузка
        </div>
    )
}


        return(

            <div className={s.checklist__container}>
                {PushingCheckedElementChecklist.pushingCheckItems.map((item)=>{
                    return (
                        
                        <div   onClick={()=>this.checkedCheckbox(item.id)}>
                            <div className={s.header}>
                                
                                <h2 className={s.title}>{item.name}</h2>
                                <div className={s.title__dectription}>проверяемый элемент</div>
                            </div>
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
        pushingSelectedCheckedElement: pushingSelectedCheckedElementActions,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPushingChecklist);