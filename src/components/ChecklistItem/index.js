import React from 'react';
import s from './ChecklistItem.module.css'
import cl from "classnames";


class ChecklistItem extends React.Component {
    render() {
        console.log('пропсы  в  ChecklistItem PushingActingElementChecklist', this.props);
        const {  item} = this.props;
return(
                <>
                    <label>
                    <span>{ item }</span>
                        <input/>
                    </label>
                </>

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