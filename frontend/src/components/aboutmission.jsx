import React from "react";
function Aboutmission(){
    return(
        <div className="bg-gradient-to-br from-[#0F2027] via-[#2C7744] to-[#A8E063] py-16">
  <div className="max-w-6xl mx-auto px-4">

    <div className="grid md:grid-cols-2 gap-8">

      {/* Mission Card */}
      <div className="bg-white p-8 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          🎯 Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg text-center">
          To empower athletes and sports enthusiasts by providing exceptional
          event management services that create memorable experiences and foster
          a culture of excellence in sports.
        </p>
      </div>

      {/* Vision Card */}
      <div className="bg-white p-8 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          🌍 Our Vision
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg text-center">
          To become India’s most trusted and innovative sports event management
          company, setting new benchmarks in experience, engagement, and execution.
        </p>
      </div>

    </div>

  </div>
</div>
    )
}
export default Aboutmission;