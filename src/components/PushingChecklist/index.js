import React from 'react';
import s from './pushingChecklist.module.css'
import classNames from 'classnames';
import ChecklistItem from '../ChecklistItem'
import {connect} from 'react-redux';
import { bindActionCreators, compose } from "redux";
import { addPushingActingElementChecklistAction } from '../../actions/pushingActingElementActions';
import {addPushingCheckedElementChecklistAction} from '../../actions/pushingCheckedElementActions';
import {checkedCheckboxAction} from '../../actions/checkedCheckboxAction'

class PushingChecklist extends React.Component{
    // state = {
    //     hidden: false,
    // }
       /* handleItemClick = () => {
            console.log("как работает клик");
            this.setState(({hidden}) => {
                    return {
                        hidden: !hidden
                    }
                
            })
            console.log('state after set',this.state);
        }*/
    

    render() {
//console.log("пропс в чеклист", this.props);
// console.log("стейт в чеклист", this.state);
const { PushingActingElementChecklist, PushingCheckedElementChecklist } = this.props;

if (Object.keys(PushingCheckedElementChecklist).length === 0){
    // console.log('============');
    return(
        <div>
            Идет загрузка
        </div>
    )
}
const { hidden } = this.props.CheckedChecklistReduser;
console.log('this.props. чеклистайтем', this.props);
const secondaryChecklist = classNames(s.checklist, s.secondaryChecklist,  { [s.hidden]: hidden}  );
// console.log("пропсы в чекед чекбокс", this.props);
        return(
            <div>
            {PushingCheckedElementChecklist.pushingCheckItems.map((item)=>{
            return (
                <div onClick={this.props.checkedCheckbox} className={s.checklist}>
                                    <ChecklistItem item={item}      />
                                    {PushingActingElementChecklist.pushingCheckItems.map((item)=>{
                                        return (
                                            <div className={secondaryChecklist}>
                                                <ChecklistItem item={item}/>
                                            </div>
                                            )
                                        })
                                    }
                </div>
            )
        })
    }
    </div>

        )
    }
}
const mapStateToProps =(state)=>{
    // console.log("стейт в пушинг чеклист", state);
    return {
        ...state,

    }
}

const mapDispatchToProps =(dispatch)=>{
    return bindActionCreators({
        addPushingActingElementChecklist: addPushingActingElementChecklistAction,
        addPushingActingElementChecklist: addPushingCheckedElementChecklistAction,
        checkedCheckbox: checkedCheckboxAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PushingChecklist);




/*

const mapStateToProps = (state) => {
    return {
        allCardWhite: state.cardList.allCardWhite,
        isBusy: state.cardList.isBusy,
        item: state.cardList.payload || [],
    };
}

const mapDispatchToProps = (dispatch) => {
    console.log(' cardListAction', cardListAction);

    return bindActionCreators({
        fetchCardList: fetchCardList,
    }, dispatch)
}

const composedHoc = compose(
    connect(mapStateToProps, mapDispatchToProps), hoc)
export default composedHoc;
*/