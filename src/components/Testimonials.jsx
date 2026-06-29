function Testimonials() {
  const testimonials = [
    {
      quote: "Musa transformed our digital presence. Our sales increased by 300% in just 6 months!",
      name: "Sarah Johnson",
      role: "CEO, BeautyBrand"
    },
    {
      quote: "Incredible attention to detail and data-driven approach. Highly recommend!",
      name: "Mike Chen",
      role: "Founder, TechStartup"
    },
    {
      quote: "The best digital marketer I've worked with. Results speak for themselves.",
      name: "Emily Rodriguez",
      role: "Marketing Director, FashionCo"
    }
  ];

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-8">
            <span>TESTIMONIALS</span>
            <span>MUSA</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-black text-secondary mb-4">
            WHAT CLIENTS SAY
          </h2>
          <div className="font-script text-4xl text-secondary">Kind Words</div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 border border-secondary/20 hover:border-primary transition-colors">
              <div className="text-4xl text-primary mb-4">"</div>
              <p className="text-secondary/70 leading-relaxed mb-6">{testimonial.quote}</p>
              <div>
                <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                <p className="text-secondary/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
