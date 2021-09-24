import classes from "./TabContent.module.css"
function TabContent(props){
    return(
        <div className={classes.tab_content + " " +  (props.active ? classes.active_content : null)}>
            {props.children}
        </div>
    )
}

export default TabContent;