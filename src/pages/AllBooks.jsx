import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllBooks = () => {
    const [itemsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0);
    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');


    useEffect(() => {
        getData();
    }, [currentPage, filter, itemsPerPage, sort])
    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-books?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}`)
        setBooks(data);
    }

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/books-count?filter=${filter}`)
            setCount(data.count);
        }
        getCount();
    }, [filter])
    console.log(count);

    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(e => e + 1)

    // handlePagination btn
    const handlePaginationButton = (value) => {
        setCurrentPage(value);
    }

    // handleReset btn
    const handleResetButton = () => {
        setFilter('');
        setSort('');
    }

    const handleDelete = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_API_URL}/books/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            getData();
                            // const remaining = myAdded.filter(myAdd => myAdd._id !== _id);
                            // setMyAdded(remaining);
                        }
                    })
            }
        });
        
        // try {
        //     const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/books/${id}`)
        //     console.log(data);
        //     toast.success('Deleted Successfully')
        //     // Refresh UI
        //     getData();
        // } catch (err) {
        //     console.log(err.message);
        //     toast.error(err.message);
        // }
    }

    return (
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
            <h1 className="text-2xl font-bold text-center mb-10">Our All Category Books</h1>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                    <div>
                        <select
                            onChange={e => {
                                setFilter(e.target.value)
                                setCurrentPage(1)
                            }}
                            value={filter}
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
                    <div>
                        <select
                            onChange={e => {
                                setSort(e.target.value)
                                setCurrentPage(1)
                            }}
                            value={sort}
                            name='sort'
                            id='sort'
                            className='border p-4 rounded-md'
                        >
                            <option value=''>Sort by Rating</option>
                            <option value='descending'>Descending Order</option>
                            <option value='ascending'>Ascending Order</option>
                        </select>
                    </div>
                    <button onClick={handleResetButton} className='btn'>Reset</button>
                </div>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

                    {
                        books.map(book => <div key={book._id} className="card bg-base-100 mb-3 shadow-xl border hover:scale-[1.05] transition-all">
                            <figure><img src={book.image} alt="Book" /></figure>
                            <div className="p-6 space-y-2">
                                <h2 className="card-title">{book.bookName}</h2>
                                <p>{book.authorName}</p>
                                <p className="font-semibold">Category: {book.category}</p>
                                <p className="font-bold">Rating: {book.rating}</p>
                                <p className="font-bold">Quantity: {book.quantity}</p>
                                <div className="card-actions">
                                    <button onClick={() => handleDelete(book._id)} className="w-full text-center px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Delete</button>
                                    <Link to={`/update/${book._id}`} className="w-full text-center px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Update</Link>
                                    <Link to={`/bookDetails/${book._id}`} className="w-full text-center px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Details</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            <div className='flex justify-center mt-12'>
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePaginationButton(currentPage - 1)}
                    className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
                    <div className='flex items-center mx-1'>
                        <FaArrowLeftLong />
                        <span className='mx-1'>prev</span>
                    </div>
                </button>

                {pages.map(btnNum => (
                    <button
                        onClick={() => handlePaginationButton(btnNum)}
                        key={btnNum}
                        className={`hidden ${currentPage === btnNum ? 'bg-blue-500 text-white' : ''} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}

                <button
                    disabled={currentPage === numberOfPages}
                    onClick={() => handlePaginationButton(currentPage + 1)}
                    className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                    <div className='flex items-center mx-1'>
                        <span className='mx-1'>Next</span>
                        <FaArrowRightLong />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default AllBooks;