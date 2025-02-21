
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Bounce } from 'react-reveal';
import Fade from 'react-reveal/Fade';
import Swal from 'sweetalert2';

const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_44pkkrs', 'template_peqegfr', form.current, 'lBok03_3TbZK-CeHt')
            .then((result) => {
                Swal.fire({
                title: 'Successfully Send Your Email',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
                })
                console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className=' mt-20'>
            <Bounce top>
                <h2 className="text-center font-bold mb-14
                    text-3xl md:text-5xl text-transparent 
                    bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-700"
                >
                    Contact Me
                </h2>
            </Bounce>
            <div className='mx-auto max-w-3xl'>
                <Fade top right>
                    <div>
                        <form className='' ref={form} onSubmit={sendEmail}>
                            <div>
                                <div className="form-control w-full mb-6">
                                    <input required type="text" name="user_name"
                                        placeholder="Enter Your Name" className="input input-bordered  text-xl"/>
                                </div>
                                <div className="form-control w-full mb-6">
                                    <input required type="email" name="user_email"
                                        placeholder="Enter Your Email Address" className="input input-bordered   text-xl
                                        " />
                                </div>
                                <div className="form-control w-full mb-6">
                                    <textarea required type="text" name="message"
                                        placeholder="Write Your Message" className="input input-bordered h-[150px] 
                                         text-xl" />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <input type="submit" value="Send" className='btn border-none w-1/2 text-black text-2xl font-light bg-gradient-to-r from-[#fa39ad] to-[#ffcc74]'/>
                                </div>
                            </div>
                        </form>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default ContactMe;