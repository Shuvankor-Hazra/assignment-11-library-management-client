import aboutImg from '../assets/image/aboutLibrary.jpg';

const About = () => {
    return (
        <div className="pb-6 pt-12">
            <div className="text-center my-10">
                <h2 className="text-2xl md:text-3xl font-bold ">About Us</h2>
                <p className="md:text-xl md:w-1/2 mx-auto py-3 text-gray-500">Journey through literary realms; explore diverse narratives, ideas, and cultures in our sanctuary of knowledge and imagination.</p>
            </div>
            <div className="lg:flex items-center lg:mb-14 bg-base-300 my-10 rounded-xl">
                <figure className="lg:w-1/2 rounded-xl p-3">
                    <img className="rounded-xl " src={aboutImg} alt="About Image" />
                </figure>
                <div className="lg:w-1/2 card-body px-3 lg:px-6 space-y-6">
                    <h2 className="text-xl md:text-3xl font-bold mb-6">Gateway to Infinite Literary Worlds</h2>
                    <div className="space-y-5">
                        <p className="text-xl"><span className="font-bold">Enrich Your Mind at Our Book Library:</span> Discover endless adventures and knowledge within our vast collection of books and resources.</p>

                        <p className="text-xl"><span className="font-bold">Immerse Yourself in Literature:</span> Discover worlds, escape reality, and broaden horizons through our extensive collection. Your journey awaits.</p>

                        <p className="text-xl"><span className="font-bold">Embark on Literary Adventures:</span> Explore diverse genres, uncover hidden gems, and lose yourself in captivating stories within our welcoming haven of books.</p>

                        <p className="text-xl"><span className="font-bold">Dive into Boundless Knowledge: </span> Step into a sanctuary of stories, where imagination knows no bounds. From classics to contemporary tales, our library invites you to explore, dream, and discover.</p>
                    </div>
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default About;