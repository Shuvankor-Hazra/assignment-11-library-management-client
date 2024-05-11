/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const BookCard = ({book}) => {
    const {
        _id,
        // image,
        bookName,
        // quantity,
        authorName,
        category,
        rating,
        description
        
    } = book || {};
    return (
        <Link to={`/book/${_id}`} className='w-full max-w-sm px-4 py-3 mt-5 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
            <div className='flex items-center justify-between'>
                <span className='text-xs font-light text-gray-800 '>
                Author Name: {authorName}
                </span>
                <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
                    {category}
                </span>
            </div>

            <div>
                <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                    {bookName}
                </h1>

                <p title={description} className='mt-2 text-sm text-gray-600 '>
                    {description.substring(0, 70)}...
                </p>
                <p className='mt-2 text-sm font-bold text-gray-600 '>
                    Rating: {rating}
                </p>
            </div>
        </Link>
    );
};

export default BookCard;