import classes from "./TabMenuContainer.module.css"
function TabMenuContainer(props) {
    return(<div className={classes.tab_menu_container}>
            {props.children}
        </div>);
}

export default TabMenuContainer;