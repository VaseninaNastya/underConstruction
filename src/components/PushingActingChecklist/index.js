import React from 'react';
import s from './pushingActingChecklist.module.css'
import classNames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {addPushingActingElementChecklistAction} from '../../actions/pushingActingElementActions';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { Radio } from 'antd';


class PushingActingChecklist extends React.Component{
    state={
        value: ' ',
    }

    updateRadioButton = (e) => {
        this.setState({value: e.target.value,});
    };

    render() {
        console.log('стейт в актингчеклист', this.state);
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
    <Radio.Group className={secondaryChecklist}  onChange={this.updateRadioButton} value={this.state.value}>
    {PushingActingElementChecklist.pushingCheckItems.map((item)=>{
                            return (
                                    <Radio className={s.radiobutton} value={item.id.toString()}>
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