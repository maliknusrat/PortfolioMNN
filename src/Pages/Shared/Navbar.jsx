import { Image } from 'antd';
import img from "../../assets/pro.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navOptions = <>
  <li className=" font-semibold uppercase"><Link to="/">Home</Link></li>
  <li className=" font-semibold uppercase"><Link to="/about">About Me</Link></li>
  <li className=" font-semibold uppercase"><Link to="/skills">Skills</Link></li>
  <li className=" font-semibold uppercase"><Link to="/projects">Projects</Link></li>
  <li className=" font-semibold uppercase"><Link to='/contact'>Contact Me</Link></li>
</>
  return (
    <div className="bg-gradient-to-r from-[#febc4c] from-10% via-[#f3f3ff] via-40% to-[#dbdbfa] to-90%">
      <div className="navbar max-w-6xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">NUSRAT</a>
      </div>
        <div className="navbar-center hidden lg:flex">
          <ul className='flex items-center justify-center gap-8'>
            {navOptions}
          </ul>

        </div>
      <div className="navbar-end">
        <Image
          width={55} className='rounded-full'
          src={img}
        />
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;