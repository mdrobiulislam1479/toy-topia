import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const ToySlider = () => {
  const slides = [
    {
      image: "https://i.ibb.co.com/k6c4DQT7/pexels-markusspiske-168866.jpg",
    },
    {
      image: "https://i.ibb.co.com/3ysB3mGx/pexels-mikebirdy-191360.jpg",
    },
    {
      image: "https://i.ibb.co.com/S7tTp5Ck/pexels-muffin-1705287.jpg",
    },
  ];

  return (
    <div className="pt-24 pb-6 px-4 max-w-[1440px] mx-auto" data-aos="zoom-in">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={slide.image}
                className="w-full h-52 md:h-96 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ToySlider;
