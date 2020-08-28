import React from 'react';
import s from './PushingInitialData.module.css'

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import { Input } from 'antd';
import {addPushingInitialDataAction} from '../../actions/pushingInitialDataActions'
import ConcreteGrade from '../../components/ConcreteGrade'
import ReinforcementGrade from '../../components/ReinforcementGrade'




class PushingInitialData extends React.Component{
    state={
        value: ' ',
    }
    

    render(){
        const { PushingInitialData} = this.props;
        const SelectedActingElement = this.props.PushingSelectedActingElement.pushingSelectedActingElement;
        const SelectedCheckedElement = this.props.PushingSelectedCheckedElement.pushingSelectedCheckedElement;
        const ColumnCapitalChecked = this.props.PushingСolumnСapital.PushingСolumnСapital
        if (Object.keys( PushingInitialData).length === 0||
        SelectedActingElement==undefined||
        SelectedCheckedElement==undefined){
            return(
                <div>
                    Проверяемые и воздействующие элементы не выбраны
                </div>
            )
        }
        return(
            <>
                {PushingInitialData.pushingInitialData.map((item)=>{
                    if (item.idChecked.indexOf(SelectedCheckedElement)>-1 && 
                    item.idActing.indexOf(SelectedActingElement)>-1)
                    {
                        switch (item.id){
                            case 115:
                                return(
                                    <div className={s.input__container}><ConcreteGrade placeholder={item.example}/>
                                    <div className={s.input__description}>{item.name}</div></div>
                                )
                            case 121:
                                return(
                                    <div className={s.input__container}>
                                    <ReinforcementGrade placeholder={item.example}/>
                                    <div className={s.input__description}>{item.name}</div>
                                </div>
                                )
                            case 135:
                                return(
                                    ColumnCapitalChecked?
                                    <div className={s.input__container}>
                                    <Input  size="large"  placeholder={item.example} className={s.input}/>
                                    <div className={s.input__description}>{item.name}</div>
                                    </div>
                                    :null
                                )
                            default: return(
                                <div className={s.input__container}>
                                    <Input  size="large"  placeholder={item.example} className={s.input}/>
                                    <div className={s.input__description}>{item.name}</div>
                                </div>
                            )
                        }
                    }
                })
                }
            </>
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
        addPushingInitialData: addPushingInitialDataAction,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PushingInitialData);

