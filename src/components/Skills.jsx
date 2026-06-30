function Skills() {
  const skillCategories = [
    {
      title: "SEO & Analytics",
      skills: ["Google Analytics", "Google Search Console", "Ahrefs", "SEMrush", "Keyword Research", "On-page SEO", "Technical SEO"]
    },
    {
      title: "Social Media",
      skills: ["Instagram", "TikTok", "LinkedIn", "Facebook", "X (Twitter)", "Meta Business Suite", "Content Planning"]
    },
    {
      title: "Paid Advertising",
      skills: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "A/B Testing", "Budget Management", "ROAS Optimization"]
    },
    {
      title: "Content & Design",
      skills: ["Canva", "Figma", "CapCut", "Adobe Creative Suite", "Copywriting", "Content Strategy", "Email Marketing"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-muted mb-8">
            <span>Skills & Tools</span>
            <span>Musa</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-black text-secondary mb-4">
            Skills & Tools
          </h2>
          <div className="font-script text-4xl text-secondary">What I work with</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-8 border border-muted/30 hover:border-primary transition-colors">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-4 py-2 bg-muted/20 text-secondary font-semibold text-sm hover:bg-primary hover:text-white transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
