import classes from "./Tab.module.css"
function Tab(props){
    return(<div className={classes.tab_container}>
        {props.children}
    </div>)
}

export default Tab;