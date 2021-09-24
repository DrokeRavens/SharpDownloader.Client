import classes from "./TabMenu.module.css"
function TabMenu(props){
    return(
        <div className={classes.tab_menu + ' ' + (props.active ? classes.active_tab : null)} onClick={props.onClick}>
                {props.children}
        </div>
    )
}

export default TabMenu;