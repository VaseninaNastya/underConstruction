import React from 'react';
import s from './ChecklistItem.module.css'
import { RadioGroup, RadioButton } from 'react-radio-buttons';


/*не используется*/ 

class ChecklistItem extends React.Component {
    render() {
        const { id, name} = this.props;
    return(
            <RadioButton value="1">
                        { name }
            </RadioButton>
                    
            )
        }
}

export default ChecklistItem;
