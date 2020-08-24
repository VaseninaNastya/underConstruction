import React from 'react';
import s from './pushingActingChecklist.module.css'
import classNames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {addPushingActingElementChecklistAction} from '../../actions/pushingActingElementActions';
import { Radio } from 'antd';
import { pushingSelectedActingElementtAction } from '../../actions/pushingSelectedActingElementActions';


class PushingActingChecklist extends React.Component{
    state={
        value: ' ',
    }

    updateRadioButton = (e) => {
        this.setState({value: e.target.value,});
        this.props.pushingSelectedActingElement(e.target.value)
    };

    render() {

const { PushingActingElementChecklist} = this.props;

if (Object.keys(PushingActingElementChecklist).length === 0){
    return(
        <div>
            Идет загрузка
        </div>
    )
}

const secondaryChecklist = classNames(s.checklist );

return (
    <div className={s.radiobutton__container}>
        <Radio.Group size="large" className={secondaryChecklist}  onChange={this.updateRadioButton} value={this.state.value}>
            {PushingActingElementChecklist.pushingCheckItems.map((item)=>{
                            return (
                                    <Radio className={s.radiobutton} value={item.id}>
                                        {item.name}
                                    </Radio>
                                )
                            })
                        }
        </Radio.Group>
        <div className={s.radiobutton__description}>воздействующий элемент</div>
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
        pushingSelectedActingElement: pushingSelectedActingElementtAction,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PushingActingChecklist);

/*
class PushingActingChecklist extends React.Component{
    // state={
    //     radio:''
    // }
    updateRadioButton(value) {
        console.log("value", value);;
    }

    render() {
const { PushingActingElementChecklist} = this.props;
if (Object.keys(PushingActingElementChecklist).length === 0){
    return(
        <div>
            Идет загрузка
        </div>
    )
}

const secondaryChecklist = classNames(s.checklist, s.secondaryChecklist  );

return (
    <RadioGroup horizontal onChange={this.updateRadioButton}>
                        {PushingActingElementChecklist.pushingCheckItems.map((item)=>{
                            return (
                                    <ChecklistItem item={item}/>
                                )
                            })
                        }
    </RadioGroup>
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






    <RadioGroup horizontal onChange={this.updateRadioButton}>
                    <RadioButton  value="sdfssdfsf">
xxxxx
                    </RadioButton>
                    <RadioButton  value="2sdfssdfsf">
xxxxx
                    </RadioButton>
                    <RadioButton  value="3sdfssdfsf">
xxxxx
                    </RadioButton>
    </RadioGroup>
*/