import React from "react";
import hero from "../assets/hero.jpg"
import Label1 from "./label1";
import { useNavigate } from "react-router-dom";




function Heropage(){
  const navigate = useNavigate();
    return(
         <>

        <div
  className="h-screen w-full bg-cover bg-center relative"
  style={{ backgroundImage: `url(${hero})` }}
>
 
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
     Engineering the Future of Sports & <br />
      <span className="text-[#4CAF50]">Adventure Experiences</span>
    </h2>

    <p className="text-lg md:text-1xl text-gray-200 mb-10 max-w-2xl font-medium">
      At Outpro.India, we combine strategic planning, creative execution, and on-ground expertise to deliver world-class sports and adventure experiences like never before.
    </p>

    <div className="flex gap-6">
      <button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-6 py-3 rounded-lg shadow-lg  hover:scale-105 transition cursor-pointer"
      onClick={()=>navigate('./portfolio')}
      >
        Explore Now
      </button>

      <a className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition cursor-pointer">
      Contact us
      </a>
    </div>

  </div>
  
</div>
<Label1 />





   </>

    )
}
export default Heropage;