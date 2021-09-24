import classes from "./ModalBody.module.css"
function ModalBody(props) {
    return(
    <div class={classes.modal_body}>
        {props.children}
    </div>)
}

export default ModalBody;