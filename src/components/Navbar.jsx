import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


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
                <div className="dropdown z-50">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="cursor-pointer text-2xl font-bold">LibraryRoom</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-3">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip" data-tip={user?.displayName}>
                                    <div className="w-10 md:w-12 rounded-full ">
                                        <img referrerPolicy="no-referrer" alt="User Profile image" src={user?.photoURL} />
                                    </div>
                                </div>
                            </div>
                            <Link onClick={logOut} className="btn btn-sm md:btn-md md:px-8 md:text-lg md:font-bold">Log Out</Link>
                        </div> :

                        <div className="flex items-center gap-1">
                            <Link to="/login" className="btn btn-sm md:btn-md md:px-8 md:text-lg md:font-bold">Log In</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;