import { projects } from "../data/portfolio";

const categoryColors: Record<string, string> = {
  "Risk Management": "#071940",
  "Data Analytics": "#0f3a8f",
  "Financial Analysis": "#1a4dbf",
  "Quantitative Finance": "#0a2563",
  "Business Intelligence": "#2563eb",
};

export default function Projects() {
  return (
    <section id="projects" className="py-28" style={{ background: "#f8fafc" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-3">
            02 / Projects
          </p>
          <h2 className="font-display text-4xl font-semibold text-slate-900 mb-4">
            Applied Research &{" "}
            <span className="gradient-text">Analytics Portfolio</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
            Each project addresses a real-world problem using rigorous quantitative methods.
            All code is open-source and documented for reproducibility.
          </p>
        </div>

        {/* Featured projects (highlight: true) */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {projects
            .filter((p) => p.highlight)
            .map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-3 gap-5">
          {projects
            .filter((p) => !p.highlight)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}

interface Project {
  id: number;
  title: string;
  category: string;
  problem: string;
  dataset: string;
  methodology: string;
  results: string;
  technologies: string[];
  github: string;
  highlight: boolean;
  icon: string;
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const accentColor = categoryColors[project.category] || "#0a2563";

  return (
    <div
      className="card-hover rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "white",
        border: "1px solid #e2e8f0",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {/* Card top */}
      <div
        className="p-6 pb-4"
        style={{
          background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative">
          <span className="text-3xl mb-3 block">{project.icon}</span>
          <div
            className="inline-block text-xs px-3 py-1 rounded-full font-medium mb-3"
            style={{
              background: "rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            {project.category}
          </div>
          <h3
            className={`font-display font-semibold text-white leading-tight ${
              featured ? "text-xl" : "text-lg"
            }`}
          >
            {project.title}
          </h3>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="space-y-4 flex-1">
          <DetailRow label="Problem" value={project.problem} />
          {featured && <DetailRow label="Dataset" value={project.dataset} />}
          <DetailRow label="Methodology" value={project.methodology} />
          <DetailRow label="Results" value={project.results} highlight />
        </div>

        {/* Tech stack */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-md font-mono"
                style={{
                  background: "#f1f5f9",
                  color: "#475569",
                  border: "1px solid #e2e8f0",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: accentColor }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p
        className={`text-sm leading-relaxed ${
          highlight ? "font-medium text-slate-800" : "text-slate-600"
        }`}
      >
        {highlight ? (
          <span
            className="inline-flex items-start gap-1"
            style={{ color: "#0f3a8f" }}
          >
            <span className="mt-0.5">▸</span>
            {value}
          </span>
        ) : (
          value
        )}
      </p>
    </div>
  );
}
