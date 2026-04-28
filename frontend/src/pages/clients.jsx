import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

function TestimonialsWhite() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            What Our People Say
          </h2>
          <p className="text-gray-500 mt-2">
            Trusted by athletes, brands, and organizations
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-md border">

                <div className="flex items-start gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full border"
                  />

                  <div>
                    <div className="text-yellow-400 mb-2">
                      ⭐⭐⭐⭐⭐
                    </div>

                    <p className="text-gray-700 mb-3">
                      “{item.text}”
                    </p>

                    <h4 className="font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {item.role}
                    </span>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>


    </div>
  );
}

export default TestimonialsWhite;