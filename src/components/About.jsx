function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-light p-8 md:p-12">
            <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-muted mb-8">
              <span>ABOUT</span>
              <span>MUSA</span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl font-black text-secondary mb-4">
              ABOUT ME
            </h2>
            <span className="text-4xl text-secondary mb-6 inline-block">*</span>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <p className="text-muted leading-relaxed mb-6">
                  Hi! I'm Musa, a passionate digital marketing specialist with 5+ years of experience crafting data-driven campaigns that connect brands with their audiences.
                </p>
                <p className="text-muted leading-relaxed">
                  From SEO strategy to social media management, I blend creativity with analytics to deliver measurable results.
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fashion%20portrait%20black%20and%20white%20aesthetic&image_size=square" 
                  alt="About Musa" 
                  className="w-full h-auto grayscale shadow-lg"
                />
              </div>
            </div>

            <div className="mt-8 font-script text-4xl text-secondary">
              Introduction
            </div>
          </div>

          <div className="bg-secondary text-light p-8 md:p-12">
            <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-muted mb-8">
              <span>EXPERTISE</span>
              <span>MUSA</span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl font-black text-light mb-4">
              STRENGTHS
            </h2>
            <span className="text-4xl text-light mb-6 inline-block">*</span>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <img 
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=creative%20woman%20portrait%20blue%20jacket%20aesthetic&image_size=square" 
                  alt="Strengths" 
                  className="w-full h-auto shadow-lg"
                />
              </div>
              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="font-semibold text-light mb-2">SEO & Content Strategy</h4>
                  <p className="text-muted text-sm leading-relaxed">Optimizing content to rank higher and drive organic traffic.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-light mb-2">Social Media Management</h4>
                  <p className="text-muted text-sm leading-relaxed">Building engaged communities across all platforms.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-light mb-2">Paid Advertising</h4>
                  <p className="text-muted text-sm leading-relaxed">Creating ROI-driven campaigns on Google and Meta.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-light mb-2">Analytics & Reporting</h4>
                  <p className="text-muted text-sm leading-relaxed">Turning data into actionable insights.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
