function CaseStudies() {
  const caseStudies = [
    {
      title: "E-Commerce Brand Growth",
      client: "GlowUp Beauty",
      duration: "6 Months",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=product%20photography%20beauty%20skincare%20aesthetic%20dark&image_size=square",
      challenge: "Low organic traffic and declining conversion rates",
      solution: "Complete SEO overhaul + targeted Meta Ads campaign",
      results: [
        "300% increase in organic traffic",
        "250% boost in conversion rate",
        "$250k+ in additional revenue",
        "Top 3 rankings for 20+ keywords"
      ]
    },
    {
      title: "SaaS Startup Launch",
      client: "TaskFlow Pro",
      duration: "3 Months",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=software%20saas%20dashboard%20clean%20modern&image_size=square",
      challenge: "New brand with zero market presence",
      solution: "LinkedIn + Google Ads + Content marketing strategy",
      results: [
        "10k+ signups in first 3 months",
        "4.8/5 average user rating",
        "Cost per acquisition reduced by 40%",
        "Featured in TechCrunch & Mashable"
      ]
    }
  ]

  return (
    <section id="case-studies" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-light/60 mb-8">
            <span>Case Studies</span>
            <span>Musa</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-black text-light mb-4">
            Case Studies
          </h2>
          <div className="font-script text-4xl text-light">Real results, real impact</div>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-auto shadow-2xl"
                />
              </div>
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <div className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">{study.client} • {study.duration}</div>
                <h3 className="font-serif text-4xl font-black text-light mb-6">{study.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Challenge</h4>
                    <p className="text-light/70">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Solution</h4>
                    <p className="text-light/70">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, rIdx) => (
                        <li key={rIdx} className="flex items-center gap-3 text-light">
                          <span className="text-primary text-2xl">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
