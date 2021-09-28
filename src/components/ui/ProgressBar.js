import React from 'react'
import style from './ProgressBar.module.css'
import PropTypes from 'prop-types'
function ProgressBar({progressbarSize, progressColor, backgroundColor, progress, showPercentage}) {
    return (
        <div className={style.progressbar_container}>
            <div style={{paddingTop: "10px", width:"100%"}}>
                <div className={style.progress_bar}
                style={{backgroundColor: backgroundColor, width: progressbarSize}}>
                    <div 
                    style={{backgroundColor: progressColor, width: `${progress}%`}}>
                    </div>
                </div>
            </div>
            {showPercentage ? 
            <div style={{width: "45px", marginLeft: "30px", marginRight: "30px"}}>
                <p className={style.progressbar_text}>{`${progress} %`}</p>
            </div>
            : null}
            
        </div>
    )
}

ProgressBar.defaultProps ={
    progressColor: "#4CC9F0",
    backgroundColor: "#888888",
    progress: 30,
    showPercentage: true,
    progressbarSize: "300px"
}

ProgressBar.propTypes ={
    progressColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    progress: PropTypes.number,
    showPercentage: PropTypes.bool,
    progressbarSize: PropTypes.string
}
export default ProgressBar
