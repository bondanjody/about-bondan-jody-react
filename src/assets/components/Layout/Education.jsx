const Education = props => {
    return <div className="bg-slate-600 py-4">
                <h2 className="text-2xl text-center text-white mb-4">Education</h2>
                <div className="md:flex md:justify-center md:px-2 md:items-center">
                    <div className="w-3/4 mx-auto border border-orange-400 rounded-xl overflow-hidden md:w-1/3 md:h-44">
                        <div className="bg-orange-400 p-4 text-center font-semibold">
                            <h4>SMKN 1 Bulukerto</h4>
                        </div>
                        <div className="p-4 text-white text-sm">
                            <p>🕰️ 2015 - 2018</p>
                            <p>📚 Software Engineering</p>
                        </div>
                    </div>
                    <div className="mt-2 w-3/4 mx-auto border border-orange-400 rounded-xl overflow-hidden md:w-1/3 md:h-44 md:mt-0">
                        <div className="bg-orange-400 p-4 text-center font-semibold">
                            <h4>Universitas Bina Sarana Informatika</h4>
                        </div>
                        <div className="p-4 text-white text-sm">
                            <p>🕰️ 2021 - now (Semester 4)</p>
                            <p>📚 Computer Science</p>
                        </div>
                    </div>
                </div>
            </div>
}

export default Education;