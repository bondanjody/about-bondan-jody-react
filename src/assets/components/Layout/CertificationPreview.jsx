import { Fragment } from "react";
import Modal from "../UI/Modal";
import Backdrop from "../UI/Backdrop";

const Content = props => {
    return <Modal>
            <div className='mb-2'>
                <h3 className='text-2xl font-bold'>{props.datas.title}</h3>
                <p className='text-sm'>Issued by {props.datas.issuedBy}</p>
            </div>
            {/* Certification Image */}
            <div className='flex flex-col items-center mb-2'>
                <img className='md:w-1/2' src={certificateDatas[certificateIndex].pics[0]} alt={`${certificateDatas[certificateIndex].pics[0]}.png`} />
                <p className='italic text-sm text-blue-700 hover:underline hover:cursor-pointer'>Click here to see the preview</p>
            </div>
    </Modal>
}

const CertificationPreview = () => {
    return (
        <Fragment>
            <Backdrop />
            {ReactDOM.createPortal(<Content onHide={props.onHide} />, document.getElementById('modal'))}
        </Fragment>
    )
}

export default CertificationPreview;