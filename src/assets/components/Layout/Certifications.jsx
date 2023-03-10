import leftArrowPic from '../../images/leftarrow.png';
import rightArrowPic from '../../images/rightarrow.png';
import sertifikatPic from '../../images/Sertifikatdutabangsa1.jpg';

const Certifications = () => {
    return <div className="w-full mt-4 md:mt-2">
        <h2 className="border-l-4 border-teal-500 px-2 text-xl font-semibold mb-1 md:mb-2">Certifications</h2>
        <div className="mx-1 border rounded-md p-4">
            <div className='mb-2'>
                <h3 className='text-2xl font-bold'>Certifications Title</h3>
                <p className='text-sm'>Issued by Organization</p>
            </div>
            {/* Certification Image */}
            <div className='flex flex-col items-center mb-2'>
                <img className='md:w-1/2' src={sertifikatPic} alt={`${sertifikatPic}.png`} />
                <p className='italic text-sm text-blue-700 hover:underline hover:cursor-pointer'>Click here to see the preview</p>
            </div>
            {/* Controll button */}
            <div className="flex justify-center">
                <div className="w-10 h-10 mr-1 hover:cursor-pointer">
                    <img src={leftArrowPic} alt={`${leftArrowPic}.png`} />
                </div>
                <div className="w-10 h-10 hover:cursor-pointer">
                    <img src={rightArrowPic} alt={`${rightArrowPic}.png`} />
                </div>
            </div>
        </div>
    </div>
}

export default Certifications;