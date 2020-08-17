import React from 'react';
import s from './ChecklistItem.module.css'

import { Checkbox } from 'antd';

class ChecklistItem extends React.Component {
    /*state = {
        checked: false,
        disabled: false,
    };*/
    
    render() {

        const {  item} = this.props;
return(
                <div className={s.checklistItem}>

                    <Checkbox
                       /*checked={this.state.checked}
                        disabled={this.state.disabled}
                        onChange={this.onChange}*//>
                    <label>
                        <span>{ item }</span>
                    </label>
                </div>

)
}
}

export default ChecklistItem;

/*

{


    <>
            {PushingActingElementChecklist.map((item)=>{
            return (
                <>
                    <label>
                    <span>{ item }</span>
                        <input/>
                    </label>
                </>
            )
        })
    }
    </>*/