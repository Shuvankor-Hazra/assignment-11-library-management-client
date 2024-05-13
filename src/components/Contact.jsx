import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (

        <div className="pb-10">
            <div className="text-center my-10">
                <h2 className="text-2xl md:text-3xl font-bold ">Contact Us</h2>
                <p className="md:text-xl md:w-2/3 mx-auto py-3 text-gray-500">Typically refers to reaching out for assistance, support, or inquiries through various communication channels.</p>
            </div>
            <div className="min-h-[500px] border-2 mb-12 rounded-lg lg:flex bg-base-300 md:p-10">
                <div className="lg:w-1/2 p-6">
                    <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-center">Feel Free to Contact Us!!</h1>
                    <div className="flex justify-between gap-3">
                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered mb-3 w-1/2"
                            required />
                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered mb-3 w-1/2"
                            required />
                    </div>
                    <input
                        name="name"
                        type="text"
                        placeholder="Your Subject"
                        className="input input-bordered w-full mb-3"
                        required />
                    <textarea
                        className="border rounded-lg w-full p-3"
                        placeholder="Your Message"
                        name="message"
                        id=""
                        rows="9">

                    </textarea>
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 mt-5">Send Email</button>
                </div>

                <div className="lg:w-1/2 p-6 space-y-10 md:mt-16">
                    <div className="border border-black rounded-xl p-5 flex gap-6 items-center">
                        <div className="text-3xl "><MdLocationOn /></div>
                        <div>
                            <h2>OUR LOCATION</h2>
                            <p>123th, Roundstreet, INA.</p>
                        </div>
                    </div>
                    <div className="border border-black rounded-xl p-5 flex gap-6 items-center">
                        <div className="text-3xl "><FaPhoneAlt /></div>
                        <div>
                            <h2>Get In Touch</h2>
                            <p>+123-456-7890</p>
                        </div>
                    </div>
                    <div className="border border-black rounded-xl p-5 flex gap-6 items-center">
                        <div className="text-3xl "><MdEmail /></div>
                        <div>
                            <h2>Email</h2>
                            <p>Hello@Awesomesite.Com</p>
                        </div>
                    </div>
                    <div className=" text-center">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">View On Map</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;