function SocialMedia() {
  return (
    <div className="bg-white min-h-screen">

      <div className="relative h-[350px]">
        <img
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Social Media & Engagement
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">

        <p className="text-gray-700 text-lg mb-8">
          We create engaging content and campaigns to grow your audience and brand presence.
        </p>

        <h2 className="text-2xl font-semibold text-[#2E7D32] mb-4">What We Do</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-10">
          <li>Content creation</li>
          <li>Social media campaigns</li>
          <li>Audience engagement</li>
          <li>Growth strategy</li>
        </ul>

        <div className="bg-[#2E7D32] text-white p-8 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-3">Grow Your Brand</h3>
          <a className="bg-white text-[#2E7D32] px-6 py-2 rounded-full cursor-pointer">
            Get Started
          </a>
        </div>

      </div>
    </div>
  );
}

export default SocialMedia;