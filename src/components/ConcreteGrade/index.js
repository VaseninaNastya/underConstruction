import React from 'react';
import s from './ConcreteGrade.module.css'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {addConcreteGradeAction} from '../../actions/concreteGradeActions'
import { Select } from 'antd';
const { Option } = Select;

class ConcreteGrade extends React.Component{
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render(){
const { ConcreteGrade} = this.props;
if (Object.keys(ConcreteGrade).length === 0){
    return(null)
}
        return(
            <>
                <Select size="large" onChange={this.handleChange} defaultValue={ConcreteGrade.ConcreteGrade[1].name} style={{width: 100}}>
                    {ConcreteGrade.ConcreteGrade.map((item)=>{
                                    return (
                                            <Option value={item.id}>
                                                {item.name}
                                            </Option>
                                        )
                                    })
                                }
                </Select>
            </>
        )}}

        const mapStateToProps =(state)=>{
            return {
                ...state,
            }
        }
        
const mapDispatchToProps =(dispatch)=>{
            return bindActionCreators({
                addConcreteGrade: addConcreteGradeAction,
            }, dispatch)
        }
export default connect(mapStateToProps, mapDispatchToProps)(ConcreteGrade);




/*

class ReinforcementGrade extends React.Component{
    state={

    }
    
    updateRadioButton = (e) => {
        this.setState({value: e.target.value,});
        this.props.pushingSelectedActingElement(e.target.value)
    };

    render(){
        if (Object.keys(PushingActingElementChecklist).length === 0){
            return(
                <div>
                    Идет загрузка
                </div>
            )
        }
        
        return(
            <div>
            <Select  onChange={this.updateRadioButton}  style={{ width: 120 }}>
                {PushingActingElementChecklist.pushingCheckItems.map((item)=>{
                                return (
                                        <Option value={item.id}>
                                            {item.name}
                                        </Option>
                                    )
                                })
                            }
            </Select>
            <div className={s.radiobutton__description}>воздействующий элемент</div>
        </div>
        )}}
const mapStateToProps =(state)=>{
            return {
                ...state,
            }
        }
        
const mapDispatchToProps =(dispatch)=>{
            return bindActionCreators({
                addReinforcementGrade: addReinforcementGradeAction,
            }, dispatch)
        }
export default connect(mapStateToProps, mapDispatchToProps)(ReinforcementGrade);

*/



