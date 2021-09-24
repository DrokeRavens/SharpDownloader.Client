import classes from "./Container.module.css"
function Container(props){
    return (
        <div className={classes.main_content_container}>
            {props.children}
        </div>

    );
}

export default Container;