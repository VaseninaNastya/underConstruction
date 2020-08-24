import React from 'react';
import s from './PushingInitialData.module.css'

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import { Input } from 'antd';
import {addPushingInitialDataAction} from '../../actions/pushingInitialDataActions'


class PushingInitialData extends React.Component{
    state={
        value: ' ',
    }
    

    render(){
        const { PushingInitialData} = this.props;
        console.log('44444this.props',PushingInitialData);
        if (Object.keys( PushingInitialData).length === 0){
            return(
                <div>
                    Идет загрузка
                </div>
            )
        }
        
        return(/*<></>*/
            <>
                {PushingInitialData.pushingInitialData.map((item)=>{
                    return (
                        <div className={s.input__container}>
                            <Input  size="large"  placeholder={item.example} className={s.input}/>
                            <div className={s.input__description}>{item.name}</div>
                        </div>    
                    )
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

