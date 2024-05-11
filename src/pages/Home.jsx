import About from "../components/About";
import Carousel from "../components/Carousel";
import Category from "../components/Category";

const Home = () => {
    return (
        <div>
            <Carousel />
            <About />
            <Category/>
        </div>
    );
};

export default Home;