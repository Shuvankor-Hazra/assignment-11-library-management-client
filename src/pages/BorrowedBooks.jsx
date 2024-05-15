import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";



const BorrowedBooks = () => {
    const {user} = useContext(AuthContext);
    // const borrowBooks = useLoaderData();
    const [borrows, setBorrows] = useState([]);

    const handleReturn = (_id) => {
        console.log(_id);
        fetch(`${import.meta.env.VITE_API_URL}/borrow/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Returned!",
                        text: "Your file has been Returned.",
                        icon: "success"
                    });
                    const remaining = borrows.filter(book => book._id !== _id);
                    setBorrows(remaining);
                }
            })
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/borrow/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setBorrows(data);
            })
    }, [user])

    return (
        <div className="my-20">
            <div className="text-center text-3xl font-bold mb-20">
                <h1>Your Borrowed Books, Total:- {borrows.length}</h1>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    borrows.map(borrow => <div key={borrow._id} className="card bg-base-100 mb-3 shadow-xl border hover:scale-[1.05] transition-all">
                        <figure><img src={borrow.image} alt="Book" /></figure>
                        <div className="p-6 space-y-2">
                            <h2 className="card-title">{borrow.bookName}</h2>
                            <p> Author: {borrow.authorName}</p>
                            <p className="font-semibold">Category: {borrow.category}</p>
                            <p className="text-xl font-bold">Borrow Date: {borrow.borrowDate}</p>
                            <p className="text-xl font-bold">Return Date: {borrow.returnDate}</p>
                            <div className="card-actions">
                                <button onClick={() => handleReturn(borrow._id)} className="w-full text-center px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Return</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;