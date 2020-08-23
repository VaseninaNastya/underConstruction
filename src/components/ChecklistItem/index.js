import React from 'react';
import s from './ChecklistItem.module.css'
import { RadioGroup, RadioButton } from 'react-radio-buttons';




class ChecklistItem extends React.Component {
    render() {
        const { id, name} = this.props;
        console.log("item", typeof id.toString());
    return(
            <RadioButton value="1">
                        { name }
            </RadioButton>
                    
            )
        }
}

export default ChecklistItem;
/*

class ChecklistItem extends React.Component {
    render() {
        const { id, name} = this.props;
        console.log("item", typeof id.toString());
    return(
                    <RadioButton value={id.toString()}>
                        { name }
                    </RadioButton>
            )
        }
}

export default ChecklistItem;
*/
