import React from 'react'
import style from "./PlayPause.module.css"
import {RiPlayFill, RiPauseFill} from "react-icons/ri"
import PropTypes from 'prop-types'
import {useState} from 'react'
function PlayPause({isPaused, onClick, pauseColor, playColor, size}) {
    const [paused, setPause] = useState(isPaused);
    return (
        <div className={style.playpause_container} onClick={() => {onClick(); setPause(!paused);}}>
            {
                paused ? 
                <RiPlayFill size={size} style={{color: playColor}} /> : <RiPauseFill size={size}  style={{color: pauseColor}}/>
            }
        </div>
    )
}

PlayPause.defaultProps = {
    isPaused: false,
    pauseColor: "#4CC9F0",
    playColor: "#F72585"
}

PlayPause.propTypes = {
    isPaused: PropTypes.bool,
    pauseColor: PropTypes.string,
    playColor: PropTypes.string

}
export default PlayPause
