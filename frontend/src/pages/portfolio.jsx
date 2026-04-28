import React, { useEffect, useState } from "react";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const handlePlay = async (video) => {
    try {
      video.muted = false;
      await video.play();
    } catch (error) {
      console.log("Video play failed:", error);
    }
  };

  const handlePause = (video) => {
    video.pause();
    video.muted = true;
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Work
          </h2>
          <p className="text-gray-500 mt-2">
            Real events. Real impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => {
            console.log("Project video:", project.video);
            return (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >

              {/* MEDIA */}
              <div className="relative h-56 overflow-hidden">

                {project.type === "video" ? (
                  <video
                  preload="none"
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    onError={(e) => console.log("Video error:", e.target.error)}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 pointer-events-none"></div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {project.desc}
                </p>

                {/* DETAILS */}
                <ul className="mt-3 text-sm text-gray-500 space-y-1">
                  {project.details?.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1 text-xs rounded-full hover:bg-[#2E7D32] hover:text-white transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          )})}

        </div>
      </div>
    </div>
  );
}

export default Portfolio;