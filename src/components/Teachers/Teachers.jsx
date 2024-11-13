
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


const Teachers = () => {
    return (
        <div className='mt-28'>
            <h2>Our Special Techers</h2>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><div>
                        <h4>Teachers 1</h4>
                        <img src="" alt="Image" />
                    </div></SwiperSlide>
                    <SwiperSlide><div>
                        <h4>Teachers 2</h4>
                        <img src="" alt="Image" />
                    </div></SwiperSlide>
                    <SwiperSlide><div>
                        <h4>Teachers 3</h4>
                        <img src="" alt="Image" />
                    </div></SwiperSlide>
                    <SwiperSlide><div>
                        <h4>Teachers 4</h4>
                        <img src="" alt="Image" />
                    </div></SwiperSlide>
                    <SwiperSlide><div>
                        <h4>Teachers 5</h4>
                        <img src="" alt="Image" />
                    </div></SwiperSlide>
                    <SwiperSlide><div>
                        <h4>Teachers 6</h4>
                        <img src="" alt="Image" />
                    </div></SwiperSlide>
                    <SwiperSlide><div>
                        <h4>Teachers 7</h4>
                        <img src="" alt="Image" />
                    </div></SwiperSlide>
                    <SwiperSlide><div>
                        <h4>Teachers 8</h4>
                        <img src="" alt="Image" />
                    </div></SwiperSlide>
                    <SwiperSlide><div>
                        <h4>Teachers 9</h4>
                        <img src="" alt="Image" />
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Teachers;