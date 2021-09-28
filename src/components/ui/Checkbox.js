import React, { useState } from 'react'
import style from './Checkbox.module.css'
import {RiCheckboxBlankLine, RiCheckboxFill} from 'react-icons/ri'
import PropTypes from 'prop-types'
function Checkbox({onClick, isChecked, size, color, selectedColor}) {
    const [checked, setCheck] = useState(isChecked);
    return (
        <div className={style.checkbox_container} onClick={() => {onClick(); setCheck(!checked);}}>
            {
                checked ? <RiCheckboxBlankLine 
                size={size} 
                className={style.animate} 
                style={{color: color}}/> : 
                             <RiCheckboxFill 
                size={size} 
                className={style.animate}
                style={{color: selectedColor}}/>
            }
        </div>
    )
}

Checkbox.defaultProps = {
    size: 25,
    checked: false,
    selectedColor: "Orange",
    color: "White"
}

Checkbox.propTypes = {
    size: PropTypes.number,
    checked: PropTypes.bool,
    color: PropTypes.string,
    selectedColor: PropTypes.string,
    onClick: PropTypes.func,

}
export default Checkbox
