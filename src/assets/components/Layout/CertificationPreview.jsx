import { Fragment } from "react";
import Modal from "../UI/Modal";
import Backdrop from "../UI/Backdrop";
import ReactDOM from 'react-dom';

const Content = props => {
    return <Modal onHide={props.onHide}>
            {/* Certification Image */}
            {props.datas.pics.length > 1 && <div className='flex flex-col items-center mb-2'>
                <img className='md:w-5/6' src={props.datas.pics[0]} alt={`${props.datas.pics[0]}.png`} />
                <img className="md:w-5/6" src={props.datas.pics[1]} alt={`${props.datas.pics[1]}.png`} />
            </div>}
            <div className='flex flex-col items-center mb-2'>
                <img className='md:w-5/6' src={props.datas.pics[0]} alt={`${props.datas.pics[0]}.png`} />
            </div>
    </Modal>
}

const CertificationPreview = props => {
    return (
        <Fragment>
            <Backdrop onHide={props.onHide} />
            {ReactDOM.createPortal(<Content onHide={props.onHide} datas={props.datas} />, document.getElementById('modal'))}
        </Fragment>
    )
}

export default CertificationPreview;