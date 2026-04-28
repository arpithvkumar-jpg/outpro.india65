import React from "react";
import profile from "../assets/profile.jpg"
function Leadership() {

    return(
        <>
        <div className="w-full py-16 px-6 md:px-16">

  {/* Leadership Section */}
  <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
    Our Leadership
  </h3>

  <div className="flex justify-center mb-16 gap-10">
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center w-72 hover:scale-105 transition duration-300">
      
      <img 
        src={profile}
        alt="Shaurya Srivastava"
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-green-500"
      />

      <h4 className="text-xl font-semibold text-gray-900">Shaurya Srivastava</h4>
      <p className="text-green-600 font-medium">Director & Co-Founder</p>
    </div>
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center w-72 hover:scale-105 transition duration-300">
      
      <img 
        src={profile}
        alt="Nikhil Rathore"
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-green-500"
      />

      <h4 className="text-xl font-semibold text-gray-900">Nikhil Rathore</h4>
      <p className="text-green-600 font-medium">CEO & Co-Founder</p>
    </div>
  </div>
  


  {/* Team Section */}
  <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
    Our Team
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
    {/* Card 1 */}
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300">
      <img 
        src={profile}
        alt="parth Porwal"
        className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-green-400"
      />
      <h4 className="text-lg font-semibold text-gray-900">parth Porwal</h4>
      <p className="text-green-600">Member Associated</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300">
      <img 
        src={profile}
        alt="Niranjan Nambiar"
        className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-green-400"
      />
      <h4 className="text-lg font-semibold text-gray-900">Niranjan Nambiar</h4>
      <p className="text-green-600">Team Leader</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300">
      <img 
        src={profile}
        alt="Pavan Kumar"
        className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-green-400"
      />
      <h4 className="text-lg font-semibold text-gray-900">Pavan Kumar</h4>
      <p className="text-green-600">CTO</p>
    </div>

  </div>

</div>
        </>
    )
}
export default Leadership;