import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { RxCrossCircled } from "react-icons/rx";


const BookDetails = () => {
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
    const book = useLoaderData();
    const {
        image,
        bookName,
        quantity,
        authorName,
        category,
        rating,
        description } = book;

    const handleBorrow = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const borrowDate = form.borrowDate.value;
        const returnDate = form.returnDate.value;
        const borrowBook = {
            name,
            email,
            borrowDate,
            returnDate,
            image,
            bookName,
            quantity,
            authorName,
            category,
            rating,
            description
        };
        axios.post(`${import.meta.env.VITE_API_URL}/borrow`, borrowBook)
            .then(res => {
                console.log(res.data);
                toast.success('Borrow book completed');
                navigate('/borrowed')
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold">Book Details</h2>
            </div>
            <div className="lg:flex items-center lg:mb-14 bg-base-300 my-10 rounded-xl">
                <figure className="lg:w-1/2 p-6">
                    <img className="rounded-xl" src={image} alt="img" />
                </figure>
                <div className="lg:w-1/2 card-body px-3 lg:px-6">
                    <div className="space-y-5">
                        <p><span className="md:text-lg font-semibold">Book Name: </span>{bookName}</p>
                        <p><span className="md:text-lg font-semibold">Author Name: </span> {authorName}</p>
                        <p><span className="md:text-lg font-semibold">Category: </span>{category}</p>
                        <p><span className="md:text-lg font-semibold">Description: </span> {description}</p>
                        <p><span className="md:text-lg font-semibold">Rating: </span> {rating}</p>
                        <p><span className="md:text-lg font-semibold">Quantity: </span> {quantity}</p>
                        <button
                            onClick={() => document.getElementById('borrow-modal').showModal()}
                            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Borrow</button>
                    </div>

                    {/* Modal */}
                    <dialog id="borrow-modal" className="modal">
                        <div className="modal-box p-16">
                            <div className="text-xl text-center">
                                <p className="md:text-xl font-bold">{book.bookName}</p>
                                <p className="md:text-lg font-semibold">Author : {book.authorName}</p>
                            </div>
                            <form onSubmit={handleBorrow}>
                                <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                                    <div>
                                        <label className='text-gray-700 ' htmlFor='name'>
                                            Name
                                        </label>
                                        <input
                                            id='name'
                                            type='text'
                                            name='name'
                                            disabled
                                            defaultValue={user.displayName}
                                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        />
                                    </div>
                                    <div>
                                        <label className='text-gray-700 ' htmlFor='email'>
                                            Email
                                        </label>
                                        <input
                                            id='email'
                                            type='email'
                                            name='email'
                                            disabled
                                            defaultValue={user.email}
                                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        />
                                    </div>
                                    <div>
                                        <label className='text-gray-700 ' htmlFor='borrowDate'>
                                            Borrow Date
                                        </label>
                                        <div
                                            name='borrowDate'>
                                            <DatePicker
                                                disabled
                                                name="borrowDate"
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />

                                        </div>
                                    </div>
                                    <div>
                                        <label className='text-gray-700 ' htmlFor='returnDate'>
                                            Return Date
                                        </label>
                                        <div name='returnDate'>
                                            <DatePicker
                                                name="returnDate"
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />

                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="mt-6 w-full text-center px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                    Submit
                                </button>
                            </form>
                            <div className="">
                                <form method="dialog">
                                    <button className="rounded-xl hover:bg-inherit text-5xl absolute top-0 right-0"><RxCrossCircled /></button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;