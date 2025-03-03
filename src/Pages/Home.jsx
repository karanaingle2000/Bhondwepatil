import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  return (
    <div>
      <div classNameNameName="w-full max-w-6xl mx-auto my-6">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          classNameName="rounded-lg shadow-lg w-full h-[400px] overflow-hidden"
        >
          <SwiperSlide classNameName="flex justify-center items-center">
            <img
              src="./images/sliders/slide-1.jpg"
              alt="Slider 1"
              classNameName="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide classNameName="flex justify-center items-center">
            <img
              src="./images/sliders/slide-2.jpg"
              alt="Slider 2"
              classNameName="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide classNameName="flex justify-center items-center">
            <img
              src="./images/sliders/slide-3.jpg"
              alt="Slider 3"
              classNameName="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide classNameName="flex justify-center items-center">
            <img
              src="./images/sliders/slide-4.jpg"
              alt="Slider 4"
              classNameName="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex items-center justify-center text-center bg-gray-100 min-h-screen p-6">
  <div className="flex items-center gap-6">
    <div className="flex  gap-4">
      <img src="./images/sliders/slide-4.jpg" alt="logo" className="w-60 h-80 object-cover rounded-lg shadow-lg" />
      <img src="./images/sliders/slide-4.jpg" alt="pic" className="w-60 h-80 object-cover rounded-lg shadow-lg mt-20" />
    </div>
    <div className="text-left max-w-2xl ml-48">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Welcome to</h1>
      <h1 className="text-4xl font-extrabold text-blue-600 text-center  ">Bhondawe Patil Public School</h1>
      <p className="mt-2 text-gray-700 text-lg leading-relaxed text-center">
        Welcome to the abode of intellect where the purpose of education is to equip the child with the most excellent technological proficiency; to empower him with the skills in order to realize his God-gifted potential; to create the right climate so that the child may develop fully as a complete human being. At    BHONDAWE PATIL PUBLIC SCHOOL, one's intellect is transformed into an illuminated reflection of knowledge and a broad outlook towards life.
      </p>
    </div>

  </div>

</div>












</div>


    
  );
};

export default Home;
