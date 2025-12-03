import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const feedbacks = [
  {
    name: "Emily Carter",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    comment:
      "ToyTopia has the best selection of toys! My kids love everything we've bought. Fast delivery and great customer service.",
  },
  {
    name: "Michael Lee",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    comment:
      "Good quality toys at reasonable prices. The website is easy to use and the support team is very helpful.",
  },
  {
    name: "Sophia Patel",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    comment:
      "Amazing experience! The toys are unique and my daughter is so happy. Will definitely shop again!",
  },
  {
    name: "David Kim",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    comment:
      "Superb customer support and a wonderful variety of toys. My son is thrilled with his new robot!",
  },
  {
    name: "Ava Smith",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    comment:
      "Quick delivery and the toys are exactly as described. Will recommend ToyTopia to my friends!",
  },
  {
    name: "Lucas Brown",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    comment:
      "My kids are obsessed with the educational toys. Great quality and fun for learning!",
  },
];

const CustomerSay = () => {
  return (
    <section className="max-w-[1440px] mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12" data-aos="zoom-in">
        <h2 className="text-3xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-lg">
          Real feedback from happy parents and kids who love ToyTopia!
        </p>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {feedbacks.map((fb, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-all duration-300 border border-primary/10 box-border w-[90vw] sm:w-[320px] min-w-0 max-w-full h-[340px] mx-auto"
              data-aos="fade-up"
            >
              <img
                src={fb.avatar}
                alt={fb.name}
                className="w-20 h-20 rounded-full border-4 border-primary/30 mb-4 object-cover"
              />
              <h4 className="font-bold text-lg text-primary mb-1">{fb.name}</h4>
              <p className="text-gray-600 mt-3 text-sm text-center">
                "{fb.comment}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerSay;
