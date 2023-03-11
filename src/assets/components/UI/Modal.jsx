import { Fragment } from "react";
import ReactDOM from 'react-dom';

const Modal = props => {
    return <div className="fixed top-8 left-8 z-50 bg-white overflow-hidden w-5/6 rounded-md">{props.children}</div>
}

export default Modal;