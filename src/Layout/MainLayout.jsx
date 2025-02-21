import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import "../App.css"




const MainLayout = () => {
    return (
        <div className="app-contailer flex top-0 justify-center items-center">
            <div className="circle rounded-full"></div>
            {/* <div className="circle mt-[500px] ml-[300px] rounded-full"></div> */}
            <div className="absolute flex flex-col top-0 w-full">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default MainLayout;