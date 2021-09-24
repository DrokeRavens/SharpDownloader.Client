import classes from "./ProgressBar.module.css"
function ProgressBar({width}) {
    return (
        <div className={classes.progress} style={{"width": width}}>
            
        </div>
    );

}

export default ProgressBar;