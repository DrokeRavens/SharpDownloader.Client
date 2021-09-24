import classes from "./ModalTitle.module.css"
import PropTypes from "prop-types"

function ModalTitle({title}) {
    return (<div class={classes.modal_title}>
        <h5>{title}</h5>
    </div>)
}
ModalTitle.defaultProps = {
    title: "Modal"
}

ModalTitle.propTypes = {
    title: PropTypes.string
}

export default ModalTitle;

