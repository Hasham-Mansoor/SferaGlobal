import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";


import salt1 from "../../../assets/images/Pure-Industrial-Salt.png";
import salt2 from "../../../assets/images/Harvested-sea-salt.png";
import salt3 from "../../../assets/images/Bulk-Salt-Packaging.png";


const slides = [
  {
    image: salt1,
    title: "Pure Industrial Salt",
    subtitle: "Refined for Your Business Needs",
    button: "Explore Now",
    link: "/industrial-specialty-salts",
  },
  {
    image: salt2,
    title: "Harvested Sea Salt",
    subtitle: "Naturally Sourced, Professionally Delivered",
    button: "View Products",
    link: "/products",
  },
  {
    image: salt3,
    title: "Bulk Salt Packaging",
    subtitle: "Reliable Supply Chain for Global Markets",
    button: "Get in Touch",
    link: "/contact-us",
  },
];

const HeroBanner = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 7000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[70vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-opacity-50" />

              {/* Text content */}
              <div className="relative z-10 text-center text-white px-4 max-w-xl">
                <h1 className="text-[14px] md:text-3xl font-semibold mb-4">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-xl mb-6">{slide.subtitle}</p>

                <Link to={slide.link}>
                  <button className="bg-white text-[10px] font-semibold cursor-pointer text-[#17374f] px-2.5 py-2 font-xs rounded-full shadow-md hover:bg-gray-200 transition" >
                    {slide.button}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    
  );
};

export default HeroBanner;
