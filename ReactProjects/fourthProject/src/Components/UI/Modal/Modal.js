import { Fragment } from "react";
import ReactDOM from "react-dom";
import './Modal.css';

const BackDrop = props => {
    return <div onClick={props.onClick.bind(null,false)} className="backdrop"></div>

}


const ModalOverlay = props => {
    return <div className="modal">
        <div>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<BackDrop onClick={props.onClick}/>,portalElement)}
        {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
        )}
    </Fragment>

}

export default Modal;