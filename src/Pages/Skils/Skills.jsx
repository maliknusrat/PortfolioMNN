import javascript from "../../../public/skills/javascript.jpg";
import nodejs from "../../../public/skills/nodejs.jpg";
import mongodb from "../../../public/skills/mongodb.jpg";
import react from "../../../public/skills/react.jpg";
import firebase from "../../../public/skills/firebase.jpg";
import python from "../../../public/skills/python.jpg";
import c from "../../../public/skills/c.jpg";
import java from "../../../public/skills/java.jpg";
import bootstrap from "../../../public/skills/bootstrap.jpg";
import tailwind from "../../../public/skills/tailwind.jpg";
import html from "../../../public/skills/html.jpg";
import css from "../../../public/skills/css.jpg";
const Skills = () => {
    return (
        <div className="pt-5 pb-10 bg-gradient-to-r from-[#febc4c] from-10% via-[#f3f3ff] via-40% to-[#dbdbfa] to-60%">
            <div className="max-w-7xl mx-auto">
            <h2 className="text-center font-extrabold mb-14
                    text-3xl md:text-5xl text-transparent 
                    bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 my-20">Skills</h2>
            <div className="grid grid-cols-1 place-content-center md:grid-cols-3 gap-8">
                
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={javascript} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Javascript</h2>
                        </div>
                    </div>
                
                
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={nodejs} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Node.js</h2>
                        </div>
                    </div>
              
             
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={mongodb} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">MongoDB</h2>
                        </div>
                    </div>
                
             
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={react} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">React</h2>
                        </div>
                    </div>
             
                
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={firebase} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Firebase</h2>
                        </div>
                    </div>
              
                
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={python} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Python</h2>
                        </div>
                    </div>
               
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={c} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">C/C++</h2>
                        </div>
                    </div>
                
                
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={java} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Java</h2>
                        </div>
                    </div>
               
                
                        <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={bootstrap} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Bootstrap</h2>
                        </div>
                    </div>
                
               
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={tailwind} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Tailwind</h2>
                        </div>
                    </div>
               
                
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={html} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">HTML</h2>
                        </div>
                    </div>
              
               
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={css} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">CSS</h2>
                        </div>
                    </div>
             
            </div>
            <div className="mt-32 mb-32">
                <p className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-600 border border-sky-500
                font-bold text-2xl rounded-2xl p-3 text-center" data-aos="fade-down" data-aos-duration="1000">Interpersonal Skills</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-14">
                    <div className="text-white font-semibold text-2xl mt-10 p-3
                    flex flex-col items-center justify-center border border-teal-600 rounded-3xl"
                    data-aos="fade-left" data-aos-duration="1000">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-orange-400">TeamWork</p>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-orange-400">Well Communication</p>
                    </div>
                    <div className="text-black font-semibold text-2xl mt-5 p-3
                    flex flex-col items-center justify-center border border-teal-600 rounded-3xl"
                    data-aos="fade-right" data-aos-duration="1000">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-orange-400">Explore New Technologies</p>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-orange-400">Hard-wroking</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
            
    );
};

export default Skills;