import { useLoaderData } from "react-router-dom";


const BorrowedBooks = () => {
    const borrowBooks = useLoaderData();
    return (
        <div>
            Borrowed Books: {borrowBooks.length}
        </div>
    );
};

export default BorrowedBooks;