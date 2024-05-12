
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddBook = () => {
    const navigate = useNavigate();

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const bookName = form.bookName.value;
        const quantity = form.quantity.value;
        const authorName = form.authorName.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const bookData = {
            image,
            bookName,
            quantity,
            authorName,
            category,
            rating,
            description
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/book`, bookData)
            console.log(data);
            toast.success('Book Added successfully')
            navigate('/allBooks')
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    }

    return (
        <div className='md:flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className='p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Add a Book
                </h2>

                <form onSubmit={handleFormSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='image'>
                                Book Image URL
                            </label>
                            <input
                                id='image'
                                name='image'
                                type='text'
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='bookName'>
                                Book Name
                            </label>
                            <input
                                id='bookName'
                                type='text'
                                name='bookName'
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='quantity'>
                                Book Quantity
                            </label>
                            <input
                                id='quantity'
                                type='text'
                                name='quantity'
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='authorName'>
                                Author Name
                            </label>
                            <input
                                id='authorName'
                                type='text'
                                name='authorName'
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-700 ' htmlFor='category'>
                                Category
                            </label>
                            <select
                                name='category'
                                id='category'
                                className='border p-2 rounded-md'
                            >
                                <option value='Novel'>Novel</option>
                                <option value='Thriller'>Thriller</option>
                                <option value='History'>History</option>
                                <option value='Sci-Fi'>Sci-Fi</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 ' htmlFor='rating'>
                                Rating
                            </label>
                            <select
                                name='rating'
                                type='number'
                                id='rating'
                                className='border p-2 rounded-md'
                            >
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>

                    </div>

                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='description'>
                            Description
                        </label>
                        <textarea
                        required
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='description'
                            id='description'
                        ></textarea>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            ADD
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddBook;