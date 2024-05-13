import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from '../../public/logo.png';

const Footer = () => {
    return (
        <footer className='bg-base-300 shadow-sm'>
            <hr />
            <div className='max-w-6xl pt-14 pb-10 px-3 mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <div className='flex gap-2 items-center'>
                        <Link to='/' className="cursor-pointer text-xl md:text-2xl font-bold flex items-end gap-2"><img src={logo} alt="Logo" className="w-8 md:w-12" />LibraryRoom</Link>
                    </div>

                    <div className='flex flex-wrap justify-center mt-6 -mx-4'>
                        <Link to='/' href='#'
                            className='mx-2 text-md text-gray-500 transition-colors duration-300 hover:text-black'
                            aria-label='Reddit'>
                            Home
                        </Link>
                        <Link to='addBook' href='#'
                            className='mx-2 text-md text-gray-600 transition-colors duration-300 hover:text-black '
                            aria-label='Reddit'>
                            Add Book
                        </Link>

                        <Link to='allBooks' href='#'
                            className='mx-2 text-md text-gray-600 transition-colors duration-300 hover:text-black '
                            aria-label='Reddit'>
                            All Books
                        </Link>

                        <Link to='borrowed' href='#'
                            className='mx-2 text-md text-gray-600 transition-colors duration-300 hover:text-black'
                            aria-label='Reddit'>
                            Borrowed Books
                        </Link>
                    </div>
                </div>

                <hr className='my-6 border-black md:my-10' />

                <div className='flex flex-col items-center sm:flex-row sm:justify-between space-y-6'>
                    <p className='text-md text-gray-500 '>
                        © Copyright 2024. All Rights Reserved.
                    </p>

                    <div className='flex gap-3 text-xl'>
                        <a href='#'
                            className='mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'>
                            <FaFacebook />
                        </a>

                        <a href='#'
                            className='mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Facebook'>
                            <FaLinkedin />
                        </a>

                        <a href='#'
                            className='mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Github'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer