// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

// import images
import img1 from '../assets/image/slider1.jpg';
import img2 from '../assets/image/slider2.jpg';
import img3 from '../assets/image/slider3.jpg';
import img4 from '../assets/image/slider4.jpg';
import img5 from '../assets/image/slider5.jpg';
import img6 from '../assets/image/slide6.jpg';

export default function Carousel() {
    return (
        <div className='mb-12 mt-6'>
            <Swiper
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide image={img1} text="Vast Repository of Knowledge, Explore Limitless Worlds" sub="Gateway to imagination, knowledge, and adventure: discover, learn, and explore within our vibrant book collection" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={img2} text="Vast Repository of Knowledge, Explore Limitless Worlds" sub="Gateway to imagination, knowledge, and adventure: discover, learn, and explore within our vibrant book collection" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={img3} text="Vast Repository of Knowledge, Explore Limitless Worlds" sub="Gateway to imagination, knowledge, and adventure: discover, learn, and explore within our vibrant book collection" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={img4} text="Vast Repository of Knowledge, Explore Limitless Worlds" sub="Gateway to imagination, knowledge, and adventure: discover, learn, and explore within our vibrant book collection" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={img5} text="Vast Repository of Knowledge, Explore Limitless Worlds" sub="Gateway to imagination, knowledge, and adventure: discover, learn, and explore within our vibrant book collection" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={img6} text="Vast Repository of Knowledge, Explore Limitless Worlds" sub="Gateway to imagination, knowledge, and adventure: discover, learn, and explore within our vibrant book collection" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
