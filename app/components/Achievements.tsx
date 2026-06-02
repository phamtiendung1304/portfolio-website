import { achievements, certifications } from "../data/portfolio";

const categoryColorMap: Record<string, string> = {
  Athletics: "#7c3aed",
  Mathematics: "#0f3a8f",
  University: "#071940",
  Leadership: "#c9a96e",
  Research: "#0a2563",
  Certification: "#1a4dbf",
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-28" style={{ background: "#f8fafc" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-3">
            04 / Achievements
          </p>
          <h2 className="font-display text-4xl font-semibold text-slate-900 mb-4">
            Milestones &{" "}
            <span className="gradient-text">Recognition</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-8 text-sm uppercase tracking-widest">
              Timeline
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-5 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, #0a2563, #e2e8f0)" }}
              />

              <div className="space-y-8">
                {achievements.map((item, i) => {
                  const color = categoryColorMap[item.category] || "#0a2563";
                  return (
                    <div key={i} className="flex gap-6 relative">
                      {/* Node */}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-base flex-shrink-0 z-10 shadow-sm"
                        style={{ background: "white", border: `2px solid ${color}` }}
                      >
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div
                        className="flex-1 p-4 rounded-xl mb-1"
                        style={{
                          background: "white",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <h4 className="font-semibold text-slate-800 text-sm leading-snug">
                            {item.title}
                          </h4>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full flex-shrink-0 font-mono"
                            style={{
                              background: `${color}15`,
                              color: color,
                              border: `1px solid ${color}30`,
                            }}
                          >
                            {item.year}
                          </span>
                        </div>
                        <span
                          className="text-xs font-medium mb-2 inline-block"
                          style={{ color }}
                        >
                          {item.category}
                        </span>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-8 text-sm uppercase tracking-widest">
              Certifications & Credentials
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="card-hover p-5 rounded-2xl flex items-center gap-4"
                  style={{
                    background: "white",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${cert.color}10`, border: `1px solid ${cert.color}20` }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 text-sm">{cert.title}</h4>
                    <p className="text-xs text-slate-500">{cert.issuer}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium block mb-1"
                      style={{
                        background:
                          cert.status === "Completed"
                            ? "#d1fae5"
                            : cert.status === "In Progress"
                            ? "#dbeafe"
                            : "#fef3c7",
                        color:
                          cert.status === "Completed"
                            ? "#065f46"
                            : cert.status === "In Progress"
                            ? "#1e40af"
                            : "#92400e",
                      }}
                    >
                      {cert.status}
                    </span>
                    <span className="text-xs text-slate-400">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h3 className="font-semibold text-slate-800 mb-4 text-sm uppercase tracking-widest">
                Languages
              </h3>
              <div className="space-y-3">
                {[
                  { lang: "Vietnamese", level: "Native", pct: 100 },
                  { lang: "English", level: "Professional Working (IELTS 7.0 target)", pct: 75 },
                ].map((item) => (
                  <div key={item.lang}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-slate-700 font-medium">{item.lang}</span>
                      <span className="text-xs text-slate-400">{item.level}</span>
                    </div>
                    <div
                      className="h-1.5 rounded-full"
                      style={{ background: "#e2e8f0" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.pct}%`,
                          background: "linear-gradient(90deg, #0a2563, #2563eb)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
