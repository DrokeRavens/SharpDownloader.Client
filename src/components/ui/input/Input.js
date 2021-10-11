import React from 'react'
import styles from './Input.module.css'
function Input(props) {
    return (
        <div className={styles.input_container}>
            <label style={{marginBottom: '4px', display: 'block !important'}}>
                {props.label}
            </label>
            <div className={styles.input_group}>
                <input type={props.type} className={styles.input} onChange={props.onChange}/>
                <>{props.icon}</>
            </div>
            

        </div>
    )
}

export default Input
