
import { Bounce } from "react-reveal";

const Education = () => {
    return (
        <div className="bg-slate-600 py-24">
            <h2 className="text-center font-extrabold mb-14
                    text-3xl md:text-5xl text-transparent 
                    bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Education</h2>

            <div className="max-w-6xl gap-8 mx-auto grid grid-cols-1 md:grid-cols-2">
                <div className="grid grid-rows-3">
                    <Bounce top>
                        <div data-aos="flip-right" data-aos-duration="2000" className='bg-gradient-to-r from-[#fa39ad]  to-[#febc4c] 
                      rounded-2xl'>
                            <div className='text-white text-xl font-semibold flex flex-col md:pl-10'>
                                <p className='mt-10 md:mt-14'>Jashore University of Science and Technology</p>
                                <p>Computer Science and Engineering</p>
                                <p>CGPA: 3.38 (upto 5<sup>th</sup> semester)</p>
                            </div>
                            <div className="flex text-xl mx-8 py-8 font-light text-white items-center justify-between gap-8">
                                <div className="border-2 p-2 rounded-lg hover:bg-slate-700">January 2020</div>
                                <div className="border-2 p-2 rounded-lg hover:bg-slate-700">To Present</div>
                            </div>
                        </div>
                    </Bounce>
                    
                    <div></div>
                    <Bounce left>
                        <div data-aos="flip-right" data-aos-duration="2000" className='bg-gradient-to-r from-[#fa39ad]  to-[#febc4c] 
                     rounded-2xl'>
                            <div className='text-white text-xl font-semibold flex flex-col md:pl-10'>
                                <p className='mt-10 md:mt-14'>Chuadanga Government College</p>
                                <p>Science (Higher Secondary Certificate)</p>
                                <p>GPA: 5.00</p>
                            </div>
                            <div className="flex text-xl mx-8 py-8 font-light text-white items-center justify-between gap-8">
                                <div className="border-2 p-2 rounded-lg hover:bg-slate-700">August 2017</div>
                                <div className="border-2 p-2 rounded-lg hover:bg-slate-700">April 2019</div>
                            </div>
                        </div>
                    </Bounce>

                    
                </div>
                <div className="grid grid-rows-3">
                    <div></div>
                    <Bounce right><div data-aos="flip-right" data-aos-duration="2000" className='bg-gradient-to-r from-[#fa39ad]  to-[#febc4c] rounded-2xl'>
                        <div className='text-white text-xl font-semibold flex flex-col md:pl-10'>
                            <p className='mt-10 md:mt-14'>Chuadanga Govt. Girls' High School </p>
                            <p>Science (Secondary Secondary Certificate)</p>
                            <p>GPA: 5.00</p>
                        </div>
                        <div className="flex text-xl mx-8 py-8 font-light text-white items-center justify-between gap-8">
                            <div className="border-2 p-2 rounded-lg hover:bg-slate-700">January 2009</div>
                            <div className="border-2 p-2 rounded-lg hover:bg-slate-700">February 2017</div>
                        </div>
                    </div></Bounce>
                
                </div>

                

            </div>
            <div></div>
        </div>
    );
};

export default Education;
