import React from "react";
import about from "../assets/aboutus.jpg";
import Aboutmission from "../components/aboutmission";
import Leadership from "../components/leadership.jsx";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <>
      {/* SECTION */}
      <div className="w-full min-h-screen mt-16 px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-14 flex items-center bg-gray-50">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={about}
              alt="About Us"
              className="w-full h-64 sm:h-80 md:h-[420px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Us
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
              At <span className="font-semibold text-black">Outpro.India</span>, we believe every sporting moment deserves world-class execution.
              <br /><br />
              Born from a passionate community of athletes and organizers in Jaipur, Outpro.India started with a simple goal — to elevate how sports events are experienced.
              <br /><br />
              Today, we blend precision, creativity, and passion to deliver seamless, high-impact experiences — from local tournaments to large-scale corporate and institutional events.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/services")}
              className="mt-6 w-full sm:w-auto px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Learn More
            </button>
          </div>

        </div>
      </div>

      {/* OTHER SECTIONS */}
      <Aboutmission />
      <Leadership />
    </>
  );
}

export default About;