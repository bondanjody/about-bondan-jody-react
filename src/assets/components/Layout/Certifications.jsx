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
import { Fragment, useState } from 'react';
import CertificationPreview from './CertificationPreview';

const Certifications = () => {
    const [certificateIndex, setCertificateIndex] = useState(0);
    const [showPreview, setShowPreview] = useState(false);

    // Certificate Data
    const certificateDatas = [
        {
            title: 'Belajar Dasar Pemrograman Javascript',
            issuedBy: 'Dicoding',
            pics: [javascriptDasarCert1, javascriptDasarCert2, javascriptDasarCert3]
        },
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
            title: 'Developer Life Hacks Menggunakan ChatGPT',
            issuedBy: 'Dicoding',
            pics: [devHacksCert]
        },
        {
            title: 'Everything You Need to know About Flutter Forward!',
            issuedBy: 'Dicoding',
            pics: [flutterCert]
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

    return <Fragment>
        {showPreview && <CertificationPreview datas={certificateDatas[certificateIndex]} />}
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
                    <p className='italic text-sm text-blue-700 hover:underline hover:cursor-pointer'>Click here to see the preview</p>
                </div>
                {/* Controll button */}
                <div className="flex justify-center">
                    <div className="w-10 h-10 mr-1 hover:cursor-pointer" onClick={prevHandler}>
                        <img src={leftArrowPic} alt={`${leftArrowPic}.png`} />
                    </div>
                    <div className="w-10 h-10 hover:cursor-pointer" onClick={nextHandler}>
                        <img src={rightArrowPic} alt={`${rightArrowPic}.png`} />
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default Certifications;