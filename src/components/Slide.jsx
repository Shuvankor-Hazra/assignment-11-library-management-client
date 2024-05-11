import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Slide = ({ image, text, sub }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem] rounded-xl'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70 rounded-xl'>
                <div className='text-center flex flex-col gap-10'>
                    <div>
                        <h1 className='mx-auto w-3/4 text-4xl font-bold text-white lg:text-4xl'>
                            {text}
                        </h1>
                        <br />
                        <p className='mx-auto w-1/2 text-white'>
                            {sub}
                        </p>
                    </div>

                    <div className="space-x-12">
                        <Link className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                            Read More
                        </Link>

                        <Link className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-500 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide