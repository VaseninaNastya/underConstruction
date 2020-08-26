import React from 'react';
import s from './PushingCalculation.module.css'
import classNames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import PushingInitialData from '../PushingInitialData'


class PushingCalculation extends React.Component{
    
    render() {
        return(
            <>
            <PushingInitialData/>
            </>
        )
    }
}

export default PushingCalculation