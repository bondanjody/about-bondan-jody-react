import leftArrowPic from '../../images/leftarrow.png';
import rightArrowPic from '../../images/rightarrow.png';
import javascriptDasarCert1 from '../../images/sertifikat_course_javascript_dasar_DICODING-1.png';
import javascriptDasarCert2 from '../../images/sertifikat_course_javascript_dasar_DICODING-2.png';
import javascriptDasarCert3 from '../../images/sertifikat_course_javascript_dasar_DICODING-3.png';
import pythonPcapCert from '../../images/pythonpcap.png';
import devHacksCert from '../../images/sertifikat-developer-life-hacks-menggunakan-chatgpt-certificate-1.png';
import dutaBangsa1 from '../../images/Sertifikatdutabangsa1.jpg';
import dutaBangsa2 from '../../images/Sertifikatdutabangsa2.jpg';
import flutterCert from '../../images/sertifikat-everything-you-need-to-know-about-flutter-forward-certificate-1.png';
import jarkomCert from '../../images/dicoding-developer-coaching-84-devops-dasar-dasar-jaringan-komputer-certificate_page-0001.jpg';
import { Fragment, useState } from 'react';
import CertificationPreview from './CertificationPreview';

const Certifications = () => {
    const [certificateIndex, setCertificateIndex] = useState(0);
    const [showPreview, setShowPreview] = useState(false);

    // Certificate Data
    const certificateDatas = [
        {
            title: 'Sertifikat Kompetensi Duta Bangsa',
            issuedBy: 'Duta Bangsa',
            pics: [dutaBangsa1, dutaBangsa2]
        },
        {
            title: 'PCAP: Programming Essentials in Python',
            issuedBy: 'Cisco Networking Academy',
            pics: [pythonPcapCert]
        },
        {
            title: 'Belajar Dasar Pemrograman Javascript',
            issuedBy: 'Dicoding',
            pics: [javascriptDasarCert1, javascriptDasarCert2, javascriptDasarCert3]
        },
        {
            title: 'Developer Life Hacks Menggunakan ChatGPT',
            issuedBy: 'Dicoding',
            pics: [devHacksCert]
        },
        {
            title: 'Everything You Need to know About Flutter Forward!',
            issuedBy: 'Dicoding',
            pics: [flutterCert]
        },
        {
            title: 'Dicoding Developer Coaching : Dasar Jaringan Komputer',
            issuedBy: 'Dicoding',
            pics: [jarkomCert]
        }
    ]

    // Button handler
    const nextHandler = () => {
        if (certificateIndex === certificateDatas.length-1) {
            return setCertificateIndex(0);
        }
        setCertificateIndex(prevData => prevData+1);
    }

    const prevHandler = () => {
        if (certificateIndex === 0) {
            return setCertificateIndex(certificateDatas.length-1);
        }
        setCertificateIndex(prevData => prevData-1);
    }

    const showHandler = () => {
        setShowPreview(true);
    }

    const hideHandler = () => {
        setShowPreview(false);
    }

    return <Fragment>
        {showPreview && <CertificationPreview datas={certificateDatas[certificateIndex]} onHide={hideHandler} />}
        <div className="w-full mt-4 md:mt-2">
            <h2 className="border-l-4 border-teal-500 px-2 text-xl font-semibold mb-1 md:mb-2">Certifications</h2>
            <div className="mx-1 border rounded-md p-4">
                <div className='mb-2'>
                    <h3 className='text-2xl font-bold'>{certificateDatas[certificateIndex].title}</h3>
                    <p className='text-sm'>Issued by {certificateDatas[certificateIndex].issuedBy}</p>
                </div>
                {/* Certification Image */}
                <div className='flex flex-col items-center mb-2'>
                    <img className='md:w-1/2' src={certificateDatas[certificateIndex].pics[0]} alt={`${certificateDatas[certificateIndex].pics[0]}.png`} />
                    <p className='transition ease-in duration-300 italic text-sm text-blue-700 hover:text-slate-800 hover:cursor-pointer' onClick={showHandler}>Click here to see the preview</p>
                </div>
                {/* Controll button */}
                <div className="flex justify-center">
                    <div className="transition ease-in-out duration-200 w-10 h-10 mr-1 rounded-full hover:cursor-pointer hover:shadow-md hover:shadow-slate-400 hover:-translate-y-1" onClick={prevHandler}>
                        <img src={leftArrowPic} alt={`${leftArrowPic}.png`} />
                    </div>
                    <div className="transition ease-in-out duration-200 w-10 h-10 rounded-full hover:cursor-pointer hover:shadow-md hover:shadow-slate-400 hover:-translate-y-1" onClick={nextHandler}>
                        <img src={rightArrowPic} alt={`${rightArrowPic}.png`} />
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default Certifications;