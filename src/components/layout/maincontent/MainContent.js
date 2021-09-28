import React from 'react'
import style from './MainContent.module.css'
function MainContent(props) {
    return (
        <div className={style.main_container}>
            {props.children}
        </div>
    )
}

export default MainContent
