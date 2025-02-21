    


const About = () => {
    return (
        <div className="max-w-7xl mx-auto mt-32 mb-10">
             
                <h2 className="text-center font-extrabold mb-14
                    text-3xl md:text-5xl text-transparent 
                    bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                >
                    Personal Information
                </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                
                    <div className=" text-xl md:text-2xl font-thin">
                        <div className="grid grid-cols-2 place-content-center mb-3">
                            <p className="ml-14">Name:</p>
                            <p>Malik Nusrat Nahar Nuhin</p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Age:</p>
                            <p>22</p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Phone Number:</p>
                            <p>+880 1977078238</p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Address:</p>
                            <p>Chuadanga, Bangladesh</p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Language:</p>
                            <p>Bangla and English</p>
                        </div>
                    </div>             
                    <div className=" text-xl md:text-2xl font-extralight">
                        <div className="grid grid-cols-2 place-content-center mb-3">
                            <p className="ml-14">Nationality:</p>
                            <p>Bangladeshi</p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">National ID:</p>
                            <p>60******96</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                            <p className="ml-14">Email:</p>
                            <p className="ml-14 md:ml-0">maliknusrat798@gmail.com</p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Github:</p>
                            <p><a href="https://github.com/maliknusrat" className="text-blue-500">Malik Nusrat Nahar Nuhin</a></p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Linkedin:</p>
                            <p><a href="https://www.linkedin.com/in/nusratnuhin-3a2992221/" className="text-blue-500">Malik Nusrat Nahar Nuhin</a></p>
                        </div>
                    </div>
                
            </div>
            
        </div>
    );
};

export default About;