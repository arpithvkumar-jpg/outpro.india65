import { FaFutbol, FaBullhorn, FaTruck, FaUsers, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Services() {
  const [services, setServices] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Icon mapping (IMPORTANT)
  const iconMap = {
    "Event Planning": <FaFutbol />,
    "Event Marketing": <FaBullhorn />,
    "Corporate Event Management": <FaTruck />,
    "Technical & Logistical Support": <FaUsers />,
    "Social Media & Engagement": <FaInstagram />,
  };

  return (
    <div className="bg-gradient-to-br from-[#0F2027] via-[#2C7744] to-[#A8E063] py-20">
      <div className="max-w-7xl mx-auto px-4 text-white">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Our Services
          </h2>
          <p className="text-gray-200 mt-3">
            Engineering extraordinary sports & adventure experiences
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-700 
              transition duration-300 transform hover:-translate-y-2 
              hover:shadow-[0_0_25px_rgba(255,84,0,0.4)] hover:border-[#2E7D32] cursor-pointer"
            >
              {/* Icon */}
              <div className="text-[#2E7D32] text-2xl mb-4">
                {iconMap[service.title]}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-black">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4">
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-gray-300 px-3 py-1 text-xs rounded-full 
                    hover:bg-[#2E7D32] hover:text-white transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="mt-5 text-[#2E7D32] font-medium hover:underline"
              
               onClick={() => {
    if (service.title === "Event Planning") navigate("/event-planning");
    if (service.title === "Event Marketing") navigate("/event-marketing");
    if (service.title === "Corporate Event Management") navigate("/corporate-event");
    if (service.title === "Technical & Logistical Support") navigate("/technical-support");
    if (service.title === "Social Media & Engagement") navigate("/social-media");
  }}
              
              >
                Learn More →
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Services;