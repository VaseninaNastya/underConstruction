import React from "react";
import s from "./pushingChecklist.module.css"
import { Layout, Form, Input, Button } from 'antd';
import MainPushingChecklist from '../../components/MainPushingChecklist';
import classNames from 'classnames';
import {connect} from 'react-redux';
import { Checkbox } from 'antd';
const { Content } = Layout;

class PushingChecklistPage extends React.Component {
    onFinish = values => {

    };
    onFinishFailed = (errorMsg) => {

    }

    render(){

        const secondaryChecklist = classNames(s.checklist );

        return(
            <Layout
            >
                <Content>
                <div className={s.root}>
                        <div className={s.form_wrap}>
                        <MainPushingChecklist/>
                        <Form
                        className={s.form}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
                        <Form.Item>
                                <Checkbox className={s.checkbox__label} size="large">
                                    стена/колонна у края плиты
                                </Checkbox>
                        </Form.Item>
                        <Form.Item>
                                <Checkbox className={s.checkbox__label} size="large">
                                    есть капитель
                                </Checkbox>
                        </Form.Item>
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


export default connect(mapStateToProps)(PushingChecklistPage);

