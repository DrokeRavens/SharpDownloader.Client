import classes from "./Modal.module.css"
import ModalTitle from "./ModalTitle";
import ModalBody from "./ModalBody";
import PropTypes from "prop-types"

function Modal(props) {
    const onClickHandler = e => {
        if(e.currentTarget === e.target && typeof props.backDropOnClick !== 'undefined')
            props.backDropOnClick();
    }
    return (
        <div class={classes.modal_background} onClick={onClickHandler}>
            <div class={classes.modal_container}>
                <ModalTitle title={props.title} />
                <ModalBody>
                    {props.children}
                </ModalBody>
            </div>
        </div>

    );
}

ModalTitle.defaultProps = {
    title: "Modal",
}

ModalTitle.propTypes = {
    title: PropTypes.string,
    backDropOnClick: PropTypes.func
}


export default Modal;