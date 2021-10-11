import React from 'react'
import styles from './Select.module.css'

function Select(props) {
    return (
        <div className={styles.select_container}>
            <label style={{marginBottom: '4px', display: 'block'}}>
                {props.title}
            </label>
            <select>
                {props.options ? props.options.map((x) => <option value={x.value}> {x.text} </option>) : null}
            </select>
        </div>
    )
}

export default Select
