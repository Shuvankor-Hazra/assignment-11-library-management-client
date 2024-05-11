import { useLoaderData } from "react-router-dom";


const AllBooks = () => {
    const books = useLoaderData();
    return (
        <div>
            {books.length}
        </div>
    );
};

export default AllBooks;