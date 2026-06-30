function Services() {
  const services = [
    {
      number: '01',
      title: 'SEO Optimization',
      desc: 'Keyword research, on-page optimization, and technical SEO to boost your search rankings.'
    },
    {
      number: '02',
      title: 'Social Media Marketing',
      desc: 'Content creation, community management, and paid social campaigns that drive engagement.'
    },
    {
      number: '03',
      title: 'Content Strategy',
      desc: 'Blogs, videos, and infographics that tell your brand story and attract your target audience.'
    },
    {
      number: '04',
      title: 'PPC Advertising',
      desc: 'Google Ads and Meta Ads campaigns optimized for maximum ROI.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-light/60 mb-8">
            <span>SERVICES</span>
            <span>MUSA</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-black text-light mb-4">
            SERVICES
          </h2>
          <div className="font-script text-4xl text-light">What I Do</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border-t border-light/20 pt-8 hover:border-primary transition-colors group">
              <div className="flex items-start gap-4">
                <span className="font-serif text-4xl text-primary font-bold">{service.number}</span>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-light mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-light/60 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
