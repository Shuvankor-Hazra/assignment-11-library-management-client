import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/category`);
            setCategories(data);
        }
        getData();
    }, [])

    return (
        <div>
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold ">Our Categories</h2>
                <p className="md:text-xl md:w-1/2 mx-auto py-3 text-gray-500">Books transport readers to distant lands, evoke emotions, and inspire curiosity, offering a refuge where minds wander freely.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-20">
                {
                    categories.map(category => <div key={category._id}>
                        <div className="card bg-base-100 shadow-xl hover:scale-[1.05] transition-all">
                            <figure><img src={category.image} alt="Book" /></figure>
                            <div className="card-body">
                                <h2 className="text-center text-2xl font-bold mb-6">{category.category}</h2>
                                <div className="card-actions">
                                    <Link to={`/categoryDetails/`} className="text-center w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">{category.button_text}</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;