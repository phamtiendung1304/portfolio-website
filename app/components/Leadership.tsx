import { leadership } from "../data/portfolio";

export default function Leadership() {
  return (
    <section id="leadership" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-3">
            03 / Leadership
          </p>
          <h2 className="font-display text-4xl font-semibold text-slate-900 mb-4">
            Building Communities &{" "}
            <span className="gradient-text">Driving Impact</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* CMET section */}
        <div className="grid lg:grid-cols-5 gap-10 mb-16">
          {/* Left: CMET Story */}
          <div className="lg:col-span-3">
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #040e24, #1a4dbf)" }}
              >
                CM
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-slate-900">
                  {leadership.cmet.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {leadership.cmet.role} · {leadership.cmet.period}
                </p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              {leadership.cmet.description}
            </p>

            <h4 className="font-semibold text-slate-800 mb-4 text-sm">Key Achievements</h4>
            <div className="space-y-3 mb-8">
              {leadership.cmet.achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#040e24", color: "#c9a96e", fontSize: "10px" }}
                  >
                    ✓
                  </div>
                  <p className="text-sm text-slate-600">{item}</p>
                </div>
              ))}
            </div>

            {/* Ecosystem segments */}
            <div>
              <h4 className="font-semibold text-slate-800 mb-3 text-sm">Ecosystem Segments</h4>
              <div className="flex flex-wrap gap-2">
                {leadership.cmet.segments.map((seg) => (
                  <span
                    key={seg}
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: "#f1f5f9",
                      border: "1px solid #e2e8f0",
                      color: "#334155",
                    }}
                  >
                    {seg}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual stats */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 h-fit">
            {[
              { value: "20+", label: "Team Members", sub: "Across 4 divisions" },
              { value: "3+", label: "Corporate Partners", sub: "Sponsorships" },
              { value: "5+", label: "Events Organized", sub: "Knowledge sessions" },
              { value: "300+", label: "Students Reached", sub: "Total audience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl card-hover"
                style={{
                  background: "linear-gradient(135deg, #040e24, #0a2563)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="font-display text-3xl font-semibold mb-1"
                  style={{ color: "#c9a96e" }}
                >
                  {stat.value}
                </div>
                <div className="text-white text-xs font-medium mb-0.5">{stat.label}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TEDx section */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid #e2e8f0",
          }}
        >
          <div
            className="px-8 py-6"
            style={{ background: "linear-gradient(90deg, #040e24, #0f3a8f)" }}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">🎤</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {leadership.tedx.title}
                </h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {leadership.tedx.role} · {leadership.tedx.period}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <p className="text-sm text-slate-500 mb-6">
              Organized TEDx-style talks and technology talkshows at NEU, bringing together student communities with industry practitioners and academic experts.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {leadership.tedx.events.map((event, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl"
                  style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
                >
                  <div
                    className="text-xs font-mono px-2 py-0.5 rounded mb-3 inline-block"
                    style={{ background: "#e2e8f0", color: "#64748b" }}
                  >
                    Event {String(i + 1).padStart(2, "0")}
                  </div>
                  <h5 className="font-semibold text-slate-800 text-sm mb-2 leading-snug">
                    {event.title}
                  </h5>
                  <p className="text-xs text-slate-500">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
