import React from 'react'
import styles from './Button.module.css'
import PropTypes from 'prop-types'
function Button(props) {
    return (
        <div className={styles.button_container}>
            <button style={{width: props.width}} type={props.type} onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    width: '100%'
}

Button.propTypes = {
    width: PropTypes.string
}

export default Button
