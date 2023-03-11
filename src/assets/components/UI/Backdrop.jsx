import { Fragment } from "react";
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <Fragment>
        {ReactDOM.createPortal(<div className="fixed top-0 left-0 w-full h-full z-20" style={{background: 'rgba(0, 0, 0, 0.75)'}}></div>, document.getElementById('backdrop'))}
    </Fragment>
}

export default Backdrop;