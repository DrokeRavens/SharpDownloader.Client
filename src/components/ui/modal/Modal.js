import React, { useState } from 'react'
import styles from './Modal.module.css'

function Modal(props) {
    return (
        <div className={styles.modal} onClick={(e) => {
                if(e.target === e.currentTarget){
                    props.onClick();
                }
            }}>
            <div className={styles.modal_content} style={{width: props.width}}>
                <h3>{props.title}</h3>
                {props.children}
            </div>
        </div>
    )
}

Modal.defaultProps = {
    width: '800px',
    title: 'Modal',
}
export default Modal
