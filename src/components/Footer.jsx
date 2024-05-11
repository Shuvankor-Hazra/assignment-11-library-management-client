import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-base-300 shadow-sm'>
            <hr />
            <div className='max-w-6xl py-8 mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <div className='flex gap-2 items-center'>
                        <Link to='/' className="cursor-pointer text-2xl font-bold">LibraryRoom</Link>
                    </div>

                    <div className='flex flex-wrap justify-center mt-6 -mx-4'>
                        <a href='#'
                            className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'>
                            Home
                        </a>
                        <a href='#'
                            className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'>
                            Add Book
                        </a>

                        <a href='#'
                            className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'>
                            All Books
                        </a>

                        <a href='#'
                            className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'>
                            Borrowed Books
                        </a>
                    </div>
                </div>

                <hr className='my-6 border-sky-500 md:my-10' />

                <div className='flex flex-col items-center sm:flex-row sm:justify-between space-y-6'>
                    <p className='text-sm text-gray-500 '>
                        © Copyright 2024. All Rights Reserved.
                    </p>

                    <div className='flex gap-3'>
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