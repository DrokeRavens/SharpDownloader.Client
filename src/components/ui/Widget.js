import classes from './Widget.module.css'

function Widget (props){
    return (<div className={classes.widget}>
        <div className={classes.widget__content}>
            {props.children}
        </div>
    </div>)
}


export default Widget;