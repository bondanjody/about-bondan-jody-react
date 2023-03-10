import portfolio1 from '../../images/portfolio1.png';

const Portfolio = () => {
    return  <div className="w-full mt-4 mb-6 mx-auto">
                <h2 className="border-l-4 border-teal-500 px-2 text-xl font-semibold mb-1 md:mb-2">Portfolio</h2>
                <div className='md:w-3/4 mx-auto w-5/6 hover:shadow-xl md:hover:shadow-slate-500 rounded-2xl overflow-hidden'>
                    <img src={portfolio1} alt={`${portfolio1}.png`} className='rounded shadow-md md:shadow-none' />
                    {/* <a href="/">
                        <div className='bg-teal-700 text-white p-4 text-center hover:bg-orange-400'>
                            <p>Visit the page</p>
                        </div>
                    </a> */}
                    <div className='flex flex-col md:flex-row'>
                        <a href="/" className='block md:w-1/2 text-center p-4 bg-red-500 text-white hover:bg-slate-700'>Visit the page</a>
                        <a href="/" className='block md:w-1/2 text-center p-4 bg-orange-500 text-white hover:bg-slate-700'>Visit GitHub Repo</a>
                    </div>
                </div>
                
            </div>
}

export default Portfolio;