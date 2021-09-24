import classes from "./TabMenu.module.css"
function TabContentContainer(props) {
    return(<div className={classes.tab_menu_container}>
            {props.children}
        </div>);
}

export default TabContentContainer;