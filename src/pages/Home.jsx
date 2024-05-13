import About from "../components/About";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div>
            <Carousel />
            <About />
            <Category />
            <Contact />
        </div>
    );
};

export default Home;