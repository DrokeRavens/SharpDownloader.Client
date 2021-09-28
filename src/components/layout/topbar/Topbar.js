import React from 'react'
import style from './Topbar.module.css'
import { RiPlayLine, RiStopLine, RiAddLine, RiDeleteBin2Line } from "react-icons/ri";
function Topbar() {
    return (
        <div className={style.topbar_container}>
            <div className={style.action_container}>
                <div className={style.topbar_action}>
                    <RiAddLine size={30}/>
                </div>
                <div className={style.topbar_action}>
                    <RiPlayLine size={30}/>
                </div>
                <div className={style.topbar_action}>
                    <RiStopLine size={30}/>
                </div>
                <div className={style.topbar_action}>
                    <RiDeleteBin2Line size={30}/>
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
