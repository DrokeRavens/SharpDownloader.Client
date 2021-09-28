import React from 'react'
import style from './Text.module.css'
import PropTypes from 'prop-types'
function Text(props) {
    return (
        <div class={style.text_container}>
            <span style={{
                display: props.display,
                color: props.color,
                fontSize: `${props.size}px`,
                fontWeight: props.fontWeight
            }}>{props.children}</span>
        </div>
    )
}

Text.defaultProps = {
    display: "inline",
    color: "white",
    size: 10,
    fontWeight: "100"
}

Text.propTypes = {
    display: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.number
}
export default Text
