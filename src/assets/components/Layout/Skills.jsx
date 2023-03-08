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
    return <div class="w-full mt-2">
                <h2 class="border-l-4 border-teal-500 px-2 text-xl font-semibold">Skills</h2>
                {/* Skills container */}
                <div class="mt-2 p-2">
                    <div class="p-4 h-16 border rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={htmlPic} alt={htmlPic} class="w-10 inline-block mr-4" />   
                        <p>HTML</p>
                    </div>
                    <div class="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={cssPic} alt={cssPic} class="w-10 inline-block mr-4" />   
                        <p>CSS</p>
                    </div>
                    <div class="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={tailwindPic} alt={tailwindPic} class="w-10 inline-block mr-4" />   
                        <p>Tailwind CSS</p>
                    </div>
                    <div class="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={jsPic} alt={jsPic} class="w-10 inline-block mr-4" />   
                        <p>JavaScript</p>
                    </div>
                    <div class="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={phpPic} alt={phpPic} class="w-10 inline-block mr-4" />   
                        <p>PHP</p>
                    </div>
                    <div class="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={mysqlPic} alt={mysqlPic} class="w-10 inline-block mr-4" />   
                        <p>MySQL</p>
                    </div>
                    <div class="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={pythonPic} alt={pythonPic} class="w-10 inline-block mr-4" />   
                        <p>Python</p>
                    </div>
                    <div class="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={gitPic} alt={gitPic} class="w-10 inline-block mr-4" />   
                        <p>Git and GitHub</p>
                    </div>
                    <div class="p-4 h-16 border mt-2 rounded-lg flex items-center hover:bg-slate-200 hover:shadow-lg hover:cursor-pointer">
                        <img src={linuxPic} alt={linuxPic} class="w-10 inline-block mr-4" />   
                        <p>Linux</p>
                    </div>
                </div>
            </div>
}

export default Skills;