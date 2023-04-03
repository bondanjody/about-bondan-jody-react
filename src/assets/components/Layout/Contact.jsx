import gmailPic from '../../images/gmail.png';
import fbPic from '../../images/fb.png';
import igPic from '../../images/ig.png';
import twitterPic from '../../images/twitter.png';
import githubPic from '../../images/github.png';

const Contact = () => {
    const linkStyleGeneral = "transition ease-in duration-300flex items-center mt-2 hover:text-teal-700 hover:cursor-pointer";

    return  <div className="bg-slate-800 py-4 md:flex">
                <div className="text-white text-3xl p-4 md:flex md:justify-center md:items-center md:text-4xl md:w-1/2">
                    <h2>Contact Me on :</h2>
                </div>
                <div className='px-4 text-slate-400'>
                    <div className={`${linkStyleGeneral}`}>
                        <img src={gmailPic} alt={`${gmailPic}.png`} className="w-5 inline-block mr-4" />
                        <a href='/' className='text-sm'>bondanjodys@gmail.com</a>
                    </div>
                    <div className={`${linkStyleGeneral}`}>
                        <img src={githubPic} alt={`${githubPic}.png`} className="w-5 inline-block mr-4" />
                        <a href='https://github.com/bondanjody' target='__blank' className='text-sm'>bondanjody</a>
                    </div>
                    <div className={`${linkStyleGeneral}`}>
                        <img src={fbPic} alt={`${fbPic}.png`} className="w-5 inline-block mr-4" />
                        <a href='https://www.facebook.com/BondanJody' target='__blank' className='text-sm'>Bondan Jody</a>
                    </div>
                    <div className={`${linkStyleGeneral}`}>
                        <img src={twitterPic} alt={`${twitterPic}.png`} className="w-5 inline-block mr-4" />
                        <a href='https://www.twitter.com/bondan_js' target='__blank' className='text-sm'>bondan_js</a>
                    </div>
                    <div className={`${linkStyleGeneral}`}>
                        <img src={igPic} alt={`${igPic}.png`} className="w-5 inline-block mr-4" />
                        <a href='https://www.instagram.com/bondanjs' target='__blank' className='text-sm'>bondanjs</a>
                    </div>
                </div>
            </div>
}

export default Contact;