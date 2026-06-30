function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-muted mb-12">
            <span>...</span>
            <span>Digital Marketing Specialist</span>
            <span>Musa Portfolio</span>
          </div>
        </div>

        <div className="relative">
          <h1 className="text-center">
            <span className="block font-script text-6xl md:text-8xl text-secondary mb-[-20px] md:mb-[-30px]">
              Creative
            </span>
            <span className="block font-serif text-7xl md:text-[180px] font-black text-primary leading-none">
              PORTFOLIO
            </span>
          </h1>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <img 
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fashion%20model%20stylish%20creative%20portrait%20black%20and%20white&image_size=square_hd"
              alt="Digital Marketer Portrait"
              className="w-64 md:w-80 h-auto grayscale shadow-2xl"
            />
          </div>

          <div className="absolute top-10 right-10 text-6xl md:text-8xl text-secondary">
            *
          </div>
        </div>

        <div className="mt-80 text-center">
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Turning ideas into impactful digital campaigns that drive growth and engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#case-studies" className="bg-primary text-white px-8 py-4 font-semibold uppercase tracking-wide hover:bg-primary/90 transition-colors">
              View Case Studies
            </a>
            <a href="#contact" className="border-2 border-secondary text-secondary px-8 py-4 font-semibold uppercase tracking-wide hover:bg-secondary hover:text-light transition-colors">
              Let's Talk
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="bg-secondary text-light px-8 py-4 font-semibold uppercase tracking-wide hover:bg-secondary/80 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
