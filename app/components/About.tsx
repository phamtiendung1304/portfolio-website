import { skills } from "../data/portfolio";

const skillCategories = [
  { key: "quantitative", label: "Quantitative Methods", icon: "∑", color: "#071940" },
  { key: "technical", label: "Technical Stack", icon: "⌨", color: "#0a2563" },
  { key: "finance", label: "Finance & Risk", icon: "⚖", color: "#0f3a8f" },
  { key: "tools", label: "Tools & Libraries", icon: "🔧", color: "#1a4dbf" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-3">
            01 / About
          </p>
          <h2 className="font-display text-4xl font-semibold text-slate-900 mb-4">
            The Intersection of{" "}
            <span className="gradient-text">Mathematics & Markets</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                My path to quantitative finance began on the athletics track, not in a classroom.
                Competing at provincial and national levels before age 16 taught me the discipline
                of iterative improvement, performance analytics, and performing under pressure —
                principles I now apply to financial modeling and data analysis.
              </p>
              <p>
                During COVID-19, I redirected that competitive energy toward mathematics. What
                began as academic focus evolved into a deep fascination with how mathematical
                structures describe economic reality — from stochastic processes in asset pricing
                to optimization theory in portfolio management.
              </p>
              <p>
                At NEU, studying Economic Mathematics under the Faculty of Mathematical Economics,
                I&apos;ve pursued the convergence of rigorous quantitative methods with real-world
                financial applications: credit risk modeling, time-series forecasting, and
                multi-asset optimization.
              </p>
              <p>
                Beyond coursework, I founded CMET to build the learning community I wished existed
                — one where students, lecturers, and industry professionals exchange ideas across
                the boundaries of mathematics, technology, and finance.
              </p>
            </div>

            {/* Personal details */}
            <div
              className="mt-10 p-6 rounded-2xl"
              style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
            >
              <h4 className="font-semibold text-slate-800 mb-4 text-sm uppercase tracking-wider">
                Academic Profile
              </h4>
              <div className="space-y-3">
                {[
                  { label: "University", value: "National Economics University (NEU)" },
                  { label: "Faculty", value: "Mathematical Economics" },
                  { label: "Major", value: "Economic Mathematics" },
                  { label: "Career Target", value: "Data/Risk/Business Analytics · Quant Finance" },
                  { label: "Location", value: "Hanoi, Vietnam" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="text-xs text-slate-400 w-28 flex-shrink-0 pt-0.5">
                      {item.label}
                    </span>
                    <span className="text-sm text-slate-700 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Skills grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skillCategories.map((cat) => (
              <div
                key={cat.key}
                className="p-5 rounded-2xl card-hover"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
                    style={{ background: cat.color }}
                  >
                    {cat.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">{cat.label}</h4>
                </div>
                <div className="space-y-2">
                  {skills[cat.key as keyof typeof skills].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-xs text-slate-600"
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: cat.color }}
                      />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests strip */}
        <div
          className="mt-16 p-8 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #040e24, #0a2563)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative">
            <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-4">
              Career Interests
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Data Analytics",
                "Credit Risk Modeling",
                "Portfolio Optimization",
                "Quantitative Finance",
                "Machine Learning in Finance",
                "Business Intelligence",
                "Basel II/III",
                "Financial Strategy",
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
