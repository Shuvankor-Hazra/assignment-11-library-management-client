import { useLoaderData } from "react-router-dom";

const AllBooks = () => {
    const books = useLoaderData();
    const pages = [1, 2, 3, 4, 5]
    return (
        // <div className="mb-20">
        //     <h1 className="text-2xl font-bold text-center mb-20">Our All Category Books</h1>
        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        //     {
        //         books.map(book => <div key={book._id} className="card bg-base-100 mb-3 shadow-xl hover:scale-[1.05] transition-all">
        //         <figure><img src={book.image} alt="Book" /></figure>
        //         <div className="p-6 space-y-2">
        //             <h2 className="card-title">{book.bookName}</h2>
        //             <p>{book.authorName}</p>
        //             <p className="font-semibold">Category: {book.category}</p>
        //             <p className="font-bold">Rating: {book.rating}</p>
        //             <div className="card-actions justify-end">
        //                 <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Update</button>
        //             </div>
        //         </div>
        //     </div>)
        //     }
        //     </div>
        // </div>
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
            <h1 className="text-2xl font-bold text-center mb-10">Our All Category Books</h1>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                    <div>
                        <select
                            name='category'
                            id='category'
                            className='border p-4 rounded-lg'
                        >
                            <option value=''>Filter By Category</option>
                            <option value='Novel'>Novel</option>
                            <option value='Thriller'>Thriller</option>
                            <option value='History'>History</option>
                            <option value='Sci-Fi'>Sci-Fi</option>
                        </select>
                    </div>

                    <form>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                placeholder='Enter Job Title'
                                aria-label='Enter Job Title'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                    <div>
                        <select
                            name='category'
                            id='category'
                            className='border p-4 rounded-md'
                        >
                            <option value='Novel'>Novel</option>
                            <option value='Thriller'>Thriller</option>
                            <option value='History'>History</option>
                            <option value='Sci-Fi'>Sci-Fi</option>
                        </select>
                    </div>
                    <button className='btn'>Reset</button>
                </div>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

                    {
                        books.map(book => <div key={book._id} className="card bg-base-100 mb-3 shadow-xl hover:scale-[1.05] transition-all">
                            <figure><img src={book.image} alt="Book" /></figure>
                            <div className="p-6 space-y-2">
                                <h2 className="card-title">{book.bookName}</h2>
                                <p>{book.authorName}</p>
                                <p className="font-semibold">Category: {book.category}</p>
                                <p className="font-bold">Rating: {book.rating}</p>
                                <div className="card-actions justify-end">
                                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Update</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            <div className='flex justify-center mt-12'>
                <button className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>

                        <span className='mx-1'>prev</span>
                    </div>
                </button>

                {pages.map(btnNum => (
                    <button
                        key={btnNum}
                        className={`hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}

                <button className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default AllBooks;