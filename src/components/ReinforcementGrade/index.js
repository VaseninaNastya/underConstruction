import React from 'react';
import s from './ReinforcementGrade.module.css'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {addReinforcementGradeAction} from '../../actions/reinforcementGradeActions'
import { Select } from 'antd';
const { Option } = Select;

class ReinforcementGrade extends React.Component{
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render(){
const { ReinforcementGrade} = this.props;
if (Object.keys(ReinforcementGrade).length === 0){
    return(null)
}
        return(
            <>
            
            <Select size="large" onChange={this.handleChange} defaultValue={ReinforcementGrade.ReinforcementGrade[2].name} style={{width: 100}}>
                {ReinforcementGrade.ReinforcementGrade.map((item)=>{
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
                addReinforcementGrade: addReinforcementGradeAction,
            }, dispatch)
        }
export default connect(mapStateToProps, mapDispatchToProps)(ReinforcementGrade);




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



