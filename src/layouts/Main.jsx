import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Main = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Navbar />
            <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Main;