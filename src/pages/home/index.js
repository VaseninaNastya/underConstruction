import React from "react";
import HeaderBlock from "../../components/HeaderBlock";
import Header from "../../components/Header"
import { connect } from 'react-redux';
import Paragrah from "../../components/Paragraph";
import { Button } from 'antd';


import { bindActionCreators } from "redux";
class HomePage extends React.Component {
    render() {
        return (
            <>
                <HeaderBlock>
                    <Header>
                        Расчеты: железобетон, металл, дерево
                    </Header>
                    <Paragrah>
                        Удобный сервис для выполнения, систематизации и хранения расчетов строительных конструкций
                    </Paragrah>
                </HeaderBlock>
            </>
        );
    }
}


export default HomePage;