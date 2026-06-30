function Projects() {
  const projects = [
    {
      title: 'E-Commerce Growth Campaign',
      category: 'Social Media & PPC',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=product%20photography%20hair%20care%20bottle%20aesthetic%20dark&image_size=square',
      results: '300% increase in sales'
    },
    {
      title: 'Brand Awareness Strategy',
      category: 'Content & SEO',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=skincare%20product%20photography%20aesthetic&image_size=square',
      results: '200% organic traffic growth'
    },
    {
      title: 'Startup Launch Campaign',
      category: 'Full Digital Strategy',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fashion%20model%20posing%20black%20and%20white&image_size=square',
      results: '10k+ new users in 30 days'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-secondary text-light p-8 md:p-12">
            <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-muted mb-8">
              <span>PROJECT 01</span>
              <span>MUSA</span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl font-black text-light mb-4">
              {projects[0].title}
            </h2>
            <div className="font-script text-4xl text-light mb-8">{projects[0].category}</div>

            <div className="mb-8">
              <img 
                src={projects[0].image} 
                alt={projects[0].title} 
                className="w-full h-auto shadow-lg"
              />
            </div>

            <p className="text-muted leading-relaxed mb-4">
              A comprehensive social media and PPC campaign that transformed sales for this e-commerce brand.
            </p>
            <div className="font-semibold text-primary">{projects[0].results}</div>
          </div>

          <div className="bg-light p-8 md:p-12">
            <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-muted mb-8">
              <span>EXPERIENCE</span>
              <span>MUSA</span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl font-black text-primary mb-4">
              EXPERIENCE
            </h2>
            <div className="font-script text-4xl text-secondary mb-8">Work</div>

            <div className="space-y-6">
              <div className="border-t border-muted/30 pt-4">
                <h4 className="font-semibold text-secondary mb-2">✦ Senior Digital Marketer - TechCorp</h4>
                <p className="text-muted text-sm">Led global campaigns reaching 2M+ users.</p>
              </div>
              <div className="border-t border-muted/30 pt-4">
                <h4 className="font-semibold text-secondary mb-2">✦ Marketing Manager - BrandStudio</h4>
                <p className="text-muted text-sm">Grew social following by 400% in 18 months.</p>
              </div>
              <div className="border-t border-muted/30 pt-4">
                <h4 className="font-semibold text-secondary mb-2">✦ SEO Specialist - GrowthHub</h4>
                <p className="text-muted text-sm">Increased organic traffic by 250%.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-secondary group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted mb-2">{project.category}</p>
              <p className="text-primary font-semibold">{project.results}</p>
            </div>
          ))}

          <div className="flex flex-col justify-center items-center p-8 bg-secondary text-light">
            <div className="font-script text-4xl text-light mb-2">Let's work</div>
            <h3 className="font-serif text-4xl md:text-5xl font-black text-light mb-6">TOGETHER</h3>
            <div className="space-y-2 text-center">
              <p className="text-muted">+1 (555) 123-4567</p>
              <p className="text-muted">hello@musamarketing.com</p>
              <p className="text-muted">musamarketing.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
