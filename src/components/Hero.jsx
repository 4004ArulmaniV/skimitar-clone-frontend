function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center text-white flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600')",
      }}
    > 
     
      <div className="max-w-7xl mx-auto px-6">
        <div className="inline-block bg-blue-700 px-4 py-2 rounded-full mb-6">
      Industrial Automation & Training Excellence
      </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Industrial Solutions
          <br />
          & Professional Training
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
          Empowering industries and students through automation,
          embedded systems, software development, IoT and
          industry-oriented training programs.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/services"
            className="bg-blue-700 hover:bg-blue-800 px-8 py-4 rounded-lg transition"
          >
            Explore Services
          </a>

          <a
            href="/contact"
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;