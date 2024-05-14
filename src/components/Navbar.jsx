import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import logo from '../../public/logo.png';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleThemeToggle = (e) => {
        if (e.target.checked) {
            setTheme('synthwave')
        } else {
            setTheme('light')
        }
    }
    console.log(theme);

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addBook'>Add Book</Link></li>
        <li><Link to='/allBooks'>All Books</Link></li>
        <li><Link to='/borrowed'>Borrowed Books</Link></li>
    </>

    return (
        <div className="">
            <div className="navbar mt-2 py-6 bg-base-300 rounded-xl max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown z-50 mr-3">
                        <div tabIndex={0} role="button" className="w-full btn btn-sm text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-200 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="cursor-pointer text-md md:text-2xl font-bold flex items-end md:gap-2"><img src={logo} alt="Logo" className="hidden md:block w-8 md:w-10" />LibraryRoom</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-lg menu-horizontal">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    {/* Dark mode */}
                    <div onChange={handleThemeToggle} className=" mr-2 ">
                        <label className="flex cursor-pointer gap-2">
                            <input type="checkbox" className="toggle theme-controller" />
                        </label>
                    </div>
                    {
                        user ?
                            <div className="flex justify-center gap-3">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip" data-tip={user?.displayName}>
                                        <div className="w-full rounded-full">
                                            <img referrerPolicy="no-referrer" alt="Profile image" src={user?.photoURL} />
                                        </div>
                                    </div>
                                </div>
                                <Link onClick={logOut} className=" btn bg-gray-600 text-white">Log Out</Link>
                            </div> :

                            <div className="flex items-center gap-1">
                                <Link to="/login" className=" w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Log In</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;