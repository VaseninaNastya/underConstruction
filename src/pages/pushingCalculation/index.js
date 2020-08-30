import React from "react";

import { connect } from 'react-redux';


import *as actions from "../../actions";
import { bindActionCreators } from "redux";
class PushingCalculation extends React.Component {
    render() {
        return (
            <PushingCalculation/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(PushingCalculation);



/*history={this.props.history}*/ 