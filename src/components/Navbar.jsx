import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import logo from '../../public/logo.png';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addBook'>Add Book</Link></li>
        <li><Link to='/allBooks'>All Books</Link></li>
        <li><Link to='/borrowed'>Borrowed Books</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 my-6">
            <div className="navbar-start">
                <div className="dropdown z-50 mr-3">
                    <div tabIndex={0} role="button" className="w-full btn btn-md text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-200 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="cursor-pointer text-xl md:text-2xl font-bold flex items-end gap-2"><img src={logo} alt="Logo" className="w-8 md:w-12" />LibraryRoom</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-lg menu-horizontal">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex justify-center gap-3">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip" data-tip={user?.displayName}>
                                    <div className="w-full rounded-full ">
                                        <img referrerPolicy="no-referrer" alt="Profile image" src={user?.photoURL} />
                                    </div>
                                </div>
                            </div>
                            <Link onClick={logOut} className="w-full px-6 py-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Log Out</Link>
                        </div> :

                        <div className="flex items-center gap-1">
                            <Link to="/login" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Log In</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;