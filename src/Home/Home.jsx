import "../App.css"
import Education from "../Pages/Education/Education";
import Skills from "../Pages/Skils/Skills";
import Banner from "./Banner/Banner";
import About from './../Pages/About/About';
import Footer from "../Pages/Shared/Footer/Footer";
import Projects from "../Pages/Projects/Projects";

//className="bg-gradient-to-r from-[#febc4c] from-10% via-[#f3f3ff] via-40% to-[#dbdbfa] to-90%"

const Home = () => {
  return (
    
        <div >
            <Banner></Banner>
            <Skills></Skills>
            <Education></Education>
            <About></About>
            <div className="bg-gradient-to-r from-[#febc4c] from-5% via-[#f3f3ff] via-50% to-[#dbdbfa] to-90% pb-20 pt-5">
            <Projects></Projects>
            </div>
            
            <Footer></Footer>
            
        </div>
  );
};

export default Home;