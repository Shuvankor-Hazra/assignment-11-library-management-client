import { useLoaderData } from "react-router-dom";


const AllBooks = () => {
    const books = useLoaderData();
    return (
        <div className="mb-20">
            <h1 className="text-2xl font-bold text-center my-20">Our All Category Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
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
    );
};

export default AllBooks;