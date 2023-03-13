const Modal = props => {
    return <div className="fixed top-8 left-8 w-[calc(100%-4rem)] h-[calc(100vh-4rem)] overflow-x-scroll z-40 bg-white py-4">
            <div className="w-8 h-8 bg-slate-500 flex items-center justify-center rounded-full text-white fixed top-0 left-1/2 hover:bg-slate-900 hover:cursor-pointer" onClick={props.onHide}>X</div>
            {props.children}
        
        </div>
}

export default Modal;