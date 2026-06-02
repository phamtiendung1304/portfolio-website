"use client";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #040e24 0%, #071940 40%, #0a2563 100%)" }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute top-1/4 right-10 w-64 h-64 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #2563eb, transparent)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full opacity-8"
        style={{
          background: "radial-gradient(circle, #c9a96e, transparent)",
          filter: "blur(60px)",
        }}
      />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div>
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase mb-8 animate-fade-up"
            style={{
              background: "rgba(201,169,110,0.15)",
              border: "1px solid rgba(201,169,110,0.3)",
              color: "#e8d5a8",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#c9a96e" }}
            />
            Open to Internship Opportunities · 2025
          </div>

          {/* Name */}
          <h1
            className="font-display text-5xl lg:text-6xl font-semibold text-white leading-tight mb-2 animate-fade-up delay-100"
          >
            Pham Tien Dung
          </h1>
          <div
            className="h-0.5 w-16 mb-6 animate-fade-up delay-200"
            style={{ background: "linear-gradient(90deg, #c9a96e, transparent)" }}
          />

          {/* Title */}
          <p
            className="text-xl lg:text-2xl font-light mb-6 animate-fade-up delay-200"
            style={{ color: "#93b4ff" }}
          >
            Data Analytics · Risk Management · Quantitative Finance
          </p>

          {/* Description */}
          <p
            className="text-base leading-relaxed mb-10 max-w-xl animate-fade-up delay-300"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {personalInfo.introduction}
          </p>

          {/* Stats row */}
          <div className="flex gap-8 mb-10 animate-fade-up delay-400">
            {[
              { value: "5+", label: "Analytics Projects" },
              { value: "300+", label: "Students Reached" },
              { value: "NEU", label: "Math Olympiad" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display text-2xl font-semibold"
                  style={{ color: "#c9a96e" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs tracking-wide"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-500">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #1a4dbf, #2563eb)",
                boxShadow: "0 8px 30px rgba(37,99,235,0.4)",
              }}
            >
              View Projects →
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(201,169,110,0.5)",
                color: "#e8d5a8",
                background: "rgba(201,169,110,0.08)",
              }}
            >
              Download Resume ↓
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right — Profile card */}
        <div className="hidden lg:flex justify-center animate-fade-in delay-400">
          <div
            className="relative w-80"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              padding: "36px",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Avatar placeholder */}
            <div className="w-24 h-24 rounded-2xl mx-auto mb-6 overflow-hidden"
             style={{ boxShadow: "0 8px 32px rgba(37,99,235,0.3)" }}
            >
             <img
               src="/photo.jpg"
               alt="Pham Tien Dung"
               className="w-full h-full object-cover"
             />
            </div>

            <div className="text-center mb-6">
              <h3 className="font-display text-xl font-semibold text-white mb-1">Pham Tien Dung</h3>
              <p className="text-sm" style={{ color: "#93b4ff" }}>
                Economic Mathematics · NEU
              </p>
            </div>

            {/* Info rows */}
            {[
              { label: "Major", value: "Economic Mathematics" },
              { label: "University", value: "NEU, Hanoi" },
              { label: "Focus", value: "Quant Finance & ML" },
              { label: "Status", value: "Seeking Internship" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center py-2.5"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {item.label}
                </span>
                <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {item.value}
                </span>
              </div>
            ))}

            {/* Tech stack chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["Python", "ML", "SQL", "Risk", "Finance"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(37,99,235,0.2)",
                    color: "#93b4ff",
                    border: "1px solid rgba(37,99,235,0.3)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Corner accent */}
            <div
              className="absolute top-0 right-0 w-16 h-16 rounded-tr-3xl opacity-30"
              style={{
                background: "linear-gradient(225deg, #c9a96e, transparent)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
          SCROLL
        </span>
        <div
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }}
        />
      </div>
    </section>
  );
}
