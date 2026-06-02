import { blogPosts } from "../data/portfolio";

const categoryColors: Record<string, string> = {
  "Risk Management": "#071940",
  "Quantitative Finance": "#0a2563",
  "Data Analytics": "#0f3a8f",
  "Career Development": "#1a4dbf",
};

export default function Blog() {
  return (
    <section id="blog" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-3">
            05 / Blog
          </p>
          <h2 className="font-display text-4xl font-semibold text-slate-900 mb-4">
            Insights & <span className="gradient-text">Writing</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
            Long-form thinking on data analytics, quantitative finance, risk management, and career development in the Vietnamese financial sector.
          </p>
        </div>

        {/* Featured post */}
        <div className="grid lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <article
              key={post.id}
              className="card-hover rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: i === 0 ? "linear-gradient(135deg, #040e24, #0a2563)" : "white",
                border: "1px solid #e2e8f0",
              }}
            >
              {/* Category badge */}
              <div className="p-6">
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full inline-block mb-4"
                  style={
                    i === 0
                      ? {
                          background: "rgba(201,169,110,0.2)",
                          color: "#c9a96e",
                          border: "1px solid rgba(201,169,110,0.3)",
                        }
                      : {
                          background: `${categoryColors[post.category]}10`,
                          color: categoryColors[post.category] || "#0a2563",
                          border: `1px solid ${categoryColors[post.category]}20`,
                        }
                  }
                >
                  {post.category}
                </span>

                <h3
                  className={`font-display font-semibold leading-snug mb-3 ${
                    i === 0 ? "text-xl text-white" : "text-lg text-slate-900"
                  }`}
                >
                  {post.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    i === 0 ? "text-white/60" : "text-slate-500"
                  }`}
                >
                  {post.excerpt}
                </p>

                <div
                  className={`flex items-center justify-between text-xs ${
                    i === 0 ? "text-white/40" : "text-slate-400"
                  }`}
                >
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Read link */}
              <div
                className="px-6 pb-5"
                style={
                  i !== 0
                    ? { borderTop: "1px solid #f1f5f9", paddingTop: "16px" }
                    : {}
                }
              >
                <span
                  className={`text-sm font-medium flex items-center gap-2 transition-all group ${
                    i === 0 ? "text-white/80" : "text-slate-700"
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  Read Article
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-slate-400 text-xs mt-10">
          More articles coming soon · Currently drafting on topics in Vietnamese credit markets and ML model governance
        </p>
      </div>
    </section>
  );
}
