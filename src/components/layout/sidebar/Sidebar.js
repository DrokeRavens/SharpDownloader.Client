import style from './Sidebar.module.css'
import React from 'react'


function SidebarContainer(props) {
    return (
        <div className={style.sidebar_container}>
            {props.children}
        </div>)
}

export default SidebarContainer;
