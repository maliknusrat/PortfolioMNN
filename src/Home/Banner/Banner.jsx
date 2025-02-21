import { TypeAnimation } from "react-type-animation";
import img from "../../assets/portfolio.png"
import { FaDownload } from "react-icons/fa";
import "./Banner.css"

const Banner = () => {
    return (
        <div className="pt-20 pb-10">
           <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center">
            <div>
                <img className="  border-2 rounded-lg  border-[#febc4c]" src={img} alt="" />
            </div>
            <div className='p-2 md:p-0'>
                <h2 className=" text-4xl font-bold mb-4">Hi, I am</h2>
                <h2 className="text-3xl md:text-4xl mb-6 font- font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">MALIK NUSRAT NAHAR NUHIN</h2>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'MERN Stack Developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Specialize With React.js',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block', fontFamily: 'fantasy' }}
                    repeat={Infinity}
                    className="text-2xl md:text-5xl text-justify mb-14 font-bold "
                />
                <p className=' text-2xl text-justify font-sans mb-10'>
                    Creative front-end developer shaping digital landscapes with HTML, CSS, and JavaScript. Crafting visually stunning and user-centric web experiences.
                </p>
                <div className="mb-10">
                    <a href="MNNN_Resume.pdf" download="Resume_of_MNNN">
                        <button className='flex gap-5 items-center font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-600 border border-sky-500 rounded-2xl p-3'>
                            Download Resume<FaDownload className='text-orange-500'></FaDownload>
                        </button>
                    </a>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Banner;