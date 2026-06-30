function Achievements() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "150+", label: "Campaigns Launched" },
    { value: "300%", label: "Avg. ROI Increase" },
    { value: "50+", label: "Happy Clients" },
    { value: "2M+", label: "Monthly Reach" },
    { value: "100k+", label: "Email Subscribers Grown" }
  ]

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6">
              <div className="font-serif text-5xl md:text-7xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-muted font-semibold text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
