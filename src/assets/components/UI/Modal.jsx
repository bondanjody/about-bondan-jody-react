const Modal = props => {
    return <div className="fixed top-8 left-8 w-[calc(100%-4rem)] h-[calc(100vh-4rem)] overflow-x-scroll z-50 bg-white py-4">{props.children}</div>
}

export default Modal;