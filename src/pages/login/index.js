import React from "react";
import s from "./login.module.css"
import { Layout, Form, Input, Button } from 'antd';
import FirebaseContext from '../../context/firebaseContext';

//import { fire , Firebase} from "../../services/firebase";
import { withFirebase } from '../../context/firebaseContext';
const { Content } = Layout;

class LoginPage extends React.Component {
    onFinish = ({email, password}) => {

        console.log('context', this.context);

        const {signWithEmailAndPassword,  createUserWithEmailAndPassword, setUserUid }=this.context
        signWithEmailAndPassword(email, password)
        .then(
            (res)=>{
                setUserUid(res.user.uid);                    
                localStorage.setItem('user',res.user.uid);
                localStorage.setItem('email',res.user.email);
                this.props.history.push('/');
            }
        )
        .catch(
            (err) => {
                if (err.code === 'auth/invalid-email') {
                    alert('Неверный email');
                }
                if (err.code === 'auth/user-not-found') {
                    if (window.confirm('Зарегистрировать email ' + email + '?')) {
                        // Save it!
                        createUserWithEmailAndPassword(email, password)
                            .catch((err) => { alert(err) })
                            .then(alert('Email ' + email + ' успешно зарегистрирован'))
                    }
                }
                if (err.code === 'auth/too-many-requests') alert('Слишком много попыток входа')

                if (err.code === 'auth/wrong-password') {
                    alert('Неверный пароль');
                } else {
                    console.log(err)
                }
            })
        }
    onFinishFailed = (errorMsg) => {
        console.log("####: errorMsg", errorMsg);
    }
    render() {

        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };
        return (
            <Layout>
                <Content>
                    <div className={s.root}>
                        <div className={s.form_wrap}>
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                            >
                                <Form.Item
                                    label="Username"
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Вход
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Content>
            </Layout>
        );
    }
}
LoginPage.contextType = FirebaseContext;
export default withFirebase(LoginPage)



/*
class LoginPage extends React.Component {
    onFinish = ({ email, password }) => {
        const { auth } = this.props.firebase;
        const {setUserUid}=this.props.firebase;
        const {history}=this.props;
        auth
            .signInWithEmailAndPassword(email, password)
            .catch(err => console.log("error", err))
            .then(res => {
                console.log("####:res", res);
                setUserUid(res.user.uid);
                localStorage.setItem('user', res.user.uid);
                history.push("/")
            })

    }
    onFinishFailed = (errorMsg) => {
        console.log("####: errorMsg", errorMsg);
    }
    render() {
        console.log("после использования обертки контекста пропсы", this.props);
console.log("происходит ли ауф", this.props.firebase.auth)
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };
        return (
            <Layout>
                <Content>
                    <div className={s.root}>
                        <div className={s.form_wrap}>
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                            >
                                <Form.Item
                                    label="Username"
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Content>
            </Layout>
        );
    }
}
LoginPage.contextType = FirebaseContext;
export default withFirebase(LoginPage);*/