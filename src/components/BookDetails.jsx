import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const BookDetails = () => {
    const { user } = useContext(AuthContext);
    const book = useLoaderData();
    const { image } = book;
    const [startDate, setStartDate] = useState(new Date());
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
                        <p><span className="md:text-lg font-semibold">Book Name: </span>{book.bookName}</p>
                        <p><span className="md:text-lg font-semibold">Author Name: </span> {book.authorName}</p>
                        <p><span className="md:text-lg font-semibold">Category: </span>{book.category}</p>
                        <p><span className="md:text-lg font-semibold">Description: </span> {book.description}</p>
                        <p><span className="md:text-lg font-semibold">Rating: </span> {book.rating}</p>
                        <p><span className="md:text-lg font-semibold">Quantity: </span> {book.quantity}</p>
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
                            <form>
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
                                        <label className='text-gray-700 ' htmlFor='email'>
                                            Return Date
                                        </label>
                                        <div name='date'>
                                            <DatePicker className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />

                                        </div>
                                    </div>
                                    <button className='mt-3 text-white bg-black border border-gray-200 rounded-md  focus:ring-opacity-40  focus:outline-none focus:ring'>
                                        Submit
                                    </button>
                                </div>

                            </form>
                            <div className="">
                                <form method="dialog">
                                    <button className="btn btn-outline rounded-xl text-xl absolute top-1 right-1">X</button>
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