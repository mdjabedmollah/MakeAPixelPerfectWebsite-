import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Text Area */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl  font-bold">
            Dependable Care, Backed by Trusted <br /> Professionals.
          </h1>

          <p className="mt-4 text-base-content/70">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex justify-center">
            <div className="join w-full max-w-xl">
              <input
                type="text"
                placeholder="Search any doctor..."
                className="input input-bordered join-item w-full focus:outline-none "
              />
              <button className="btn btn-primary join-item">
                Search Now
              </button>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/heroImg.jpg"
            alt="Doctors"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <img
            src="/heroImg.jpg"
            alt="Doctors"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
