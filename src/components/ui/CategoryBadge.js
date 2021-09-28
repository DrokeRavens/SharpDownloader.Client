import React from 'react'
import style from './CategoryBadge.module.css'
import PropTypes from 'prop-types'

function CategoryBadge({text, backgroundColor, color}) {
    return (
        <div className={style.category_badge} style={{backgroundColor: backgroundColor, color: color}}>
            <p>{text}</p>
        </div>
    )
}

CategoryBadge.defaultProps = {
    text: "Category",
    color: "Black",
    backgroundColor: "Yellow"
}

CategoryBadge.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string
}

export default CategoryBadge
