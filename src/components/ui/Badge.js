import classes from "./Badge.module.css"
function Badge(props) {
    return (
        <div className={classes.badge} style={{"backgroundColor": props.color, "color": props.fontColor}}>
            {props.children}
        </div>

    );    
}

export default Badge;