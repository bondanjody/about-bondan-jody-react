import phpPic from '../../images/640px-PHP-logo.svg.png';
import cssPic from '../../images/css.png';
import gitPic from '../../images/git.png';
import htmlPic from '../../images/html.png';
import jsPic from '../../images/js.png';
import linuxPic from '../../images/linux.png';
import mysqlPic from '../../images/mysql.png';
import pythonPic from '../../images/python.png';
import tailwindPic from '../../images/tailwind.png';

const Skills = props => {
    return <div className="w-full mt-4 md:mt-2">
                <h2 className="border-l-4 border-teal-500 px-2 text-xl font-semibold">Skills</h2>
                {/* Skills container */}
                <div className="m-2 lg:mx-16">
                    <div className="p-4 h-16 rounded-lg flex items-center hover:bg-gray-700 hover:text-white hover:shadow-lg hover:cursor-pointer">
                        <img src={htmlPic} alt={htmlPic} className="w-10 inline-block mr-4" /> 
                        <div className='w-full'>
                            <p>HTML</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '100%'}}> 100%</div>
                            </div>
                        </div>  
                    </div>
                    <div className="p-4 h-16 mt-2 rounded-lg flex items-center hover:bg-gray-700 hover:text-white hover:shadow-lg hover:cursor-pointer">
                        <img src={cssPic} alt={cssPic} className="w-10 inline-block mr-4" />   
                        <div className='w-full'>
                            <p>CSS</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '95%'}}> 95%</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 h-16 mt-2 rounded-lg flex items-center hover:text-white hover:bg-gray-700 hover:shadow-lg hover:cursor-pointer">
                        <img src={tailwindPic} alt={tailwindPic} className="w-10 inline-block mr-4" />   
                        <div className='w-full'>
                            <p>Tailwind CSS</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '85%'}}> 85%</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 h-16 mt-2 rounded-lg flex items-center hover:text-white hover:bg-gray-700 hover:shadow-lg hover:cursor-pointer">
                        <img src={jsPic} alt={jsPic} className="w-10 inline-block mr-4" />   
                        <div className='w-full'>
                            <p>JavaScript</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '92%'}}> 92%</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 h-16 mt-2 rounded-lg flex items-center hover:text-white hover:bg-gray-700 hover:shadow-lg hover:cursor-pointer">
                        <img src={phpPic} alt={phpPic} className="w-10 inline-block mr-4" />   
                        <div className='w-full'>
                            <p>PHP</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '90%'}}> 90%</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 h-16 mt-2 rounded-lg flex items-center hover:text-white hover:bg-gray-700 hover:shadow-lg hover:cursor-pointer">
                        <img src={mysqlPic} alt={mysqlPic} className="w-10 inline-block mr-4" />   
                        <div className='w-full'>
                            <p>MySQL</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '78%'}}> 78%</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 h-16 mt-2 rounded-lg flex items-center hover:text-white hover:bg-gray-700 hover:shadow-lg hover:cursor-pointer">
                        <img src={pythonPic} alt={pythonPic} className="w-10 inline-block mr-4" />   
                        <div className='w-full'>
                            <p>Python</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '88%'}}> 88%</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 h-16 mt-2 rounded-lg flex items-center hover:text-white hover:bg-gray-700 hover:shadow-lg hover:cursor-pointer">
                        <img src={gitPic} alt={gitPic} className="w-10 inline-block mr-4" />   
                        <div className='w-full'>
                            <p>Git and GitHub</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '90%'}}> 90%</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 h-16 mt-2 rounded-lg flex items-center hover:text-white hover:bg-gray-700 hover:shadow-lg hover:cursor-pointer">
                        <img src={linuxPic} alt={linuxPic} className="w-10 inline-block mr-4" />   
                        <div className='w-full'>
                            <p>Linux</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '82%'}}> 82%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default Skills;