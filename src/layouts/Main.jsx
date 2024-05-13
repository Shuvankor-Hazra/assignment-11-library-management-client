import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Main = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <Navbar />
            </div>
            <div className="max-w-7xl mx-auto px-3 lg:px-0 min-h-[calc(100vh-357px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;