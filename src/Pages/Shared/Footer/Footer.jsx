import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="">
            <footer className="footer footer-center p-10 bg-black text-primary-content">
                <aside>
                    <p className="font-bold italic">
                        "Work hard in silence,let your success be your noise" <br />Frank Ocean
                    </p>
                    <p>Copyright © 2023 - All right reserved by <br/> MALIK NUSRAT NAHAR NUHIN</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col text-3xl gap-4">
                        <a href="https://www.facebook.com/maliknusrat.nuhin?mibextid=ZbWKwL"><FaFacebook></FaFacebook></a>
                         <a href="https://github.com/maliknusrat"><FaGithub></FaGithub></a>
                         <a href="https://www.linkedin.com/in/nusratnuhin-3a2992221"><FaLinkedin></FaLinkedin></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;