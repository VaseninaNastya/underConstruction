import React from "react";
import s from "./pushingChecklist.module.css"
import { Layout, Form, Input, Button } from 'antd';
import MainPushingChecklist from '../../components/MainPushingChecklist';
import cl from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {pushingСolumnСapitalActions} from '../../actions/pushingСolumnСapitalActions'
import {pushingPlateEdgeActions} from '../../actions/pushingPlateEdgeActions'
import { Checkbox } from 'antd';
const { Content } = Layout;

class PushingChecklistPage extends React.Component {
    state={
        selectedActingElenemtColunm: false
    }
    
    /*componentDidMount(){
        const actingElenemtColunm = this.props.PushingSelectedActingElement.pushingSelectedActingElement;
        if((actingElenemtColunm==undefined)/*||
            (actingElenemtColunm==undefined)){
            console.log("if работает");
            this.setState({selectedActingElenemtColunm: false})
            console.log('selectedActingElenemtColunm',this.state.selectedActingElenemtColunm);
        }
    }*/
    onFinish = values => {

    };
    onFinishFailed = (errorMsg) => {

    }
    updateCheckboxCapital= (e) => {
        this.props.pushingСolumnСapital(e.target.checked);
    };
    
    updateCheckedElement=()=>{
        
    }
    updateCheckboxPlateEdge=(e) => {
        this.props.pushingPlateEdge(e.target.checked);

    };

    render(){
        const actingElenemtColunm = this.props.PushingSelectedActingElement.pushingSelectedActingElement;
        const capitelCheckboxClass = cl( { [s.checkbox__labelHidden]: this.state.selectedActingElenemtColunm});
        return(
            <Layout
            >
                <Content>
                <div className={s.root}>
                        <div className={s.form_wrap}>
                        <MainPushingChecklist />
                        <Form
                        className={s.form}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
                        <Form.Item>
                                <Checkbox onChange={this.updateCheckboxPlateEdge} className={s.checkbox__label} size="large">
                                    стена/колонна у края плиты
                                </Checkbox>
                        </Form.Item>
                        {actingElenemtColunm==113?
                            <Form.Item className={capitelCheckboxClass}>
                                <Checkbox className={s.checkbox__label} onChange={this.updateCheckboxCapital} size="large">
                                есть капитель
                                </Checkbox>
                            </Form.Item>
                            :actingElenemtColunm==114?
                            <Form.Item className={capitelCheckboxClass}>
                                <Checkbox className={s.checkbox__label} onChange={this.updateCheckboxCapital} size="large">
                                есть капитель
                                </Checkbox>
                            </Form.Item>
                            :null
                        }
                        <Form.Item>
                            <div className={s.checkbox__button}>
                                <Button size="large" type="primary" htmlType="submit">
                                    Перейти к расчету
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>  
                        </div>
                </div>              
                </Content>
            </Layout>
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
        pushingСolumnСapital: pushingСolumnСapitalActions,
        pushingPlateEdge: pushingPlateEdgeActions,
    }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(PushingChecklistPage);



/* onChange={this.updateCheckedElement}
console.log('работает чекбакс', this.props);
        const actingElenemtColunm = this.props.PushingSelectedActingElement.pushingSelectedActingElement;
        console.log('actingElenemtColunm', actingElenemtColunm );
        if(actingElenemtColunm==113||114){
            console.log("if работает");
            this.setState({selectedActingElenemtColunm: true})
            console.log('selectedActingElenemtColunm',this.state.selectedActingElenemtColunm);
        }

*/