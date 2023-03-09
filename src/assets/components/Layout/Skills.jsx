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
    return <div className="w-full mt-2">
                <h2 className="border-l-4 border-teal-500 px-2 text-xl font-semibold">Skills</h2>
                {/* Skills container */}
                <div className="mt-2 lg:px-16">
                    <div className="p-4 h-16 border rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={htmlPic} alt={htmlPic} className="w-10 inline-block mr-4" />   
                        <p>HTML</p>
                    </div>
                    <div className="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={cssPic} alt={cssPic} className="w-10 inline-block mr-4" />   
                        <p>CSS</p>
                    </div>
                    <div className="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={tailwindPic} alt={tailwindPic} className="w-10 inline-block mr-4" />   
                        <p>Tailwind CSS</p>
                    </div>
                    <div className="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={jsPic} alt={jsPic} className="w-10 inline-block mr-4" />   
                        <p>JavaScript</p>
                    </div>
                    <div className="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={phpPic} alt={phpPic} className="w-10 inline-block mr-4" />   
                        <p>PHP</p>
                    </div>
                    <div className="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={mysqlPic} alt={mysqlPic} className="w-10 inline-block mr-4" />   
                        <p>MySQL</p>
                    </div>
                    <div className="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={pythonPic} alt={pythonPic} className="w-10 inline-block mr-4" />   
                        <p>Python</p>
                    </div>
                    <div className="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={gitPic} alt={gitPic} className="w-10 inline-block mr-4" />   
                        <p>Git and GitHub</p>
                    </div>
                    <div className="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={linuxPic} alt={linuxPic} className="w-10 inline-block mr-4" />   
                        <p>Linux</p>
                    </div>
                    {/* <div className="p-4 h-16 border rounded-lg w-96 flex items-center hover:cursor-pointer">
                        <img src={htmlPic} alt={htmlPic} className="w-10 inline-block mr-4" />   
                        <p>HTML</p>
                    </div>
                    <div className="p-4 h-16 border rounded-lg w-1/2 flex items-center hover:cursor-pointer">
                        <img src={cssPic} alt={cssPic} className="w-10 inline-block mr-4" />   
                        <p>CSS</p>
                    </div>
                    <div className="p-4 h-16 border rounded-lg w-1/2 flex items-center hover:cursor-pointer">
                        <img src={tailwindPic} alt={tailwindPic} className="w-10 inline-block mr-4" />   
                        <p>Tailwind CSS</p>
                    </div>
                    <div className="p-4 h-16 border rounded-lg w-1/2 flex items-center hover:cursor-pointer">
                        <img src={jsPic} alt={jsPic} className="w-10 inline-block mr-4" />   
                        <p>JavaScript</p>
                    </div>
                    <div className="p-4 h-16 border rounded-lg w-1/2 flex items-center hover:cursor-pointer">
                        <img src={phpPic} alt={phpPic} className="w-10 inline-block mr-4" />   
                        <p>PHP</p>
                    </div>
                    <div className="p-4 h-16 border rounded-lg w-1/2 flex items-center hover:cursor-pointer">
                        <img src={mysqlPic} alt={mysqlPic} className="w-10 inline-block mr-4" />   
                        <p>MySQL</p>
                    </div>
                    <div className="p-4 h-16 border rounded-lg w-1/2 flex items-center hover:cursor-pointer">
                        <img src={pythonPic} alt={pythonPic} className="w-10 inline-block mr-4" />   
                        <p>Python</p>
                    </div>
                    <div className="p-4 h-16 border rounded-lg w-1/2 flex items-center hover:cursor-pointer">
                        <img src={gitPic} alt={gitPic} className="w-10 inline-block mr-4" />   
                        <p>Git and GitHub</p>
                    </div>
                    <div className="p-4 h-16 border rounded-lg w-1/2 flex items-center hover:cursor-pointer">
                        <img src={linuxPic} alt={linuxPic} className="w-10 inline-block mr-4" />   
                        <p>Linux</p>
                    </div> */}
                </div>
            </div>
}

export default Skills;