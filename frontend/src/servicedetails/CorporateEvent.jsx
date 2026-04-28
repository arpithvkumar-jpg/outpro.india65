function CorporateEvent() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO IMAGE */}
      <div className="relative h-[350px]">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
          alt="Corporate Event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Corporate Event Management
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Overview */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          At Outpro.India, we specialize in delivering seamless corporate event
          experiences. From planning to execution, we ensure every detail is
          handled with precision, allowing you to focus on your business goals.
        </p>

        {/* Services */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2E7D32] mb-4">
            What We Provide
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Vendor coordination & management</li>
            <li>Equipment setup and logistics</li>
            <li>On-ground execution support</li>
            <li>End-to-end event planning</li>
            <li>Professional event staffing</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2E7D32] mb-4">
            Why Choose Us
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Experienced corporate event team</li>
            <li>Reliable vendor network</li>
            <li>Attention to detail & quality</li>
            <li>On-time execution</li>
            <li>Customized solutions for every client</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-[#2E7D32] text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-3">
            Let’s Plan Your Next Corporate Event
          </h3>
          <p className="mb-4">
            Partner with us to create impactful and memorable experiences.
          </p>
          <a className="bg-white text-[#2E7D32] px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition cursor-pointer">
            Contact Us
          </a>
        </div>

      </div>
    </div>
  );
}

export default CorporateEvent;