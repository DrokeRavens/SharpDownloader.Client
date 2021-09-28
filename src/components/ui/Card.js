import style from './Card.module.css'

import React from 'react'

function Card(props) {
    return (
        <div className={style.card_container}>
            {props.children}
        </div>
    )
}

export default Card
