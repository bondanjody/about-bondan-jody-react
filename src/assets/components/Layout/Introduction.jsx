import pasFotoPic from '../../images/pas-foto.png';

const Introduction = props => {
    return  <div className="m-4 container w-3/4 mx-auto bg-teal-700 shadow-lg shadow-slate-800 rounded-md p-2 flex justify-center">
                <div className='w-1/3 flex justify-center'>
                    <img src={pasFotoPic} className='rounded-md' alt={`${pasFotoPic}.png`} />
                </div>
                {/* Description */}
                <div className="p-4 text-lg text-white w-2/3 flex flex-col justify-center">
                    <h1 className="text-2xl font-bold text-slate"><span className='bg-white text-teal-700 px-1 rounded-lg'>Hello, welcome !</span></h1>
                    <p>My name is <span className="text-3xl font-semibold">Bondan Jody Setyawan</span>.</p> 
                    <p>I am 23 years-old.</p>
                    <p>And I am a 🌐 Web Developer focusing on Fronted. </p>
                </div>
            </div>
}

export default Introduction;