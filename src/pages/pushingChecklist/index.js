import React from "react";
import s from "./pushingChecklist.module.css"
import { Layout, Form, Input, Button } from 'antd';
import MainPushingChecklist from '../../components/MainPushingChecklist';
import classNames from 'classnames';
import {connect} from 'react-redux';

const { Content } = Layout;

class PushingChecklistPage extends React.Component {
    onFinish = values => {
        console.log('Success:', values);
    };
    onFinishFailed = (errorMsg) => {
        console.log("####: errorMsg", errorMsg);
    }

    render(){

        const secondaryChecklist = classNames(s.checklist );
        console.log("####стор", this.props);
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
                            <Button size="large" type="primary" htmlType="submit">
                                Перейти к расчету
                            </Button>
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
    console.log('стор в пейдж', state);
    return {
        ...state,
    }
}


export default connect(mapStateToProps)(PushingChecklistPage);

