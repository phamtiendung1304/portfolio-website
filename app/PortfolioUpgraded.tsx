"use client";
import { useState, useEffect, useRef } from "react";

// ─── DATA (inlined from portfolio.ts) ───────────────────────────────────────

const personalInfo = {
  name: "Pham Tien Dung",
  nameVi: "Phạm Tiến Dũng",
  title: "Economic Mathematics Student",
  subtitle: "Data Analytics · Risk Management · Quantitative Finance",
  introduction:
    "Economic Mathematics student at NEU, passionate about transforming complex datasets into strategic insights. Former provincial athlete turned quantitative analyst — I bridge rigorous mathematical modeling with real-world financial applications.",
  university: "National Economics University (NEU)",
  major: "Economic Mathematics",
  year: "Class of 2026",
  email: "phamtiendung11233206@gmail.com",
  linkedin: "https://linkedin.com/in/phamtiendung",
  github: "https://github.com/phamtiendung",
  location: "Hanoi, Vietnam",
};

const projects = [
  {
    id: 1,
    title: "Credit Risk Scoring Model",
    category: "Risk Management",
    problem: "Traditional credit scoring models fail to capture behavioral signals from younger, underbanked customer segments, resulting in adverse selection and elevated NPL ratios.",
    methodology: "Hybrid ensemble model combining Logistic Regression with XGBoost. SMOTE for class imbalance. SHAP values for interpretability. Basel II/III compliance framework applied.",
    results: "AUC-ROC: 0.89 | Precision: 0.84 | Recall: 0.81 | 23% reduction in predicted NPL rate vs. benchmark",
    technologies: ["Python", "XGBoost", "SHAP", "Scikit-learn", "Pandas"],
    github: "https://github.com/phamtiendung/credit-risk-scoring",
    highlight: true,
    icon: "🏦",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    accent: "#071940",
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    category: "Data Analytics",
    problem: "Retail banking client experiencing 18% annual churn rate among millennial customers, seeking proactive retention strategy through predictive analytics.",
    methodology: "Random Forest with hyperparameter tuning via GridSearchCV. Feature engineering on RFM metrics. Survival analysis for time-to-churn estimation.",
    results: "AUC-ROC: 0.86 | Top-decile lift: 3.4x | Identified 5 key behavioral churn predictors",
    technologies: ["Python", "Scikit-learn", "Random Forest", "SQL"],
    github: "https://github.com/phamtiendung/customer-churn",
    highlight: false,
    icon: "📊",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    accent: "#0f3a8f",
  },
  {
    id: 3,
    title: "Vietnamese Stock Market Analysis",
    category: "Financial Analysis",
    problem: "Assessing return predictability on HOSE using technical and fundamental signals, with focus on volatility clustering and regime detection.",
    methodology: "ARIMA-GARCH for volatility modeling. ADF & KPSS stationarity tests. Johansen cointegration test for pairs trading. Kalman filter for dynamic beta estimation.",
    results: "GARCH(1,1) best fit for VN-Index. 4 cointegrated pairs identified. Rolling Sharpe > 1.2 on backtest (2022–2024)",
    technologies: ["Python", "statsmodels", "arch", "pandas"],
    github: "https://github.com/phamtiendung/vnstock-analysis",
    highlight: false,
    icon: "📈",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    accent: "#1a4dbf",
  },
  {
    id: 4,
    title: "Portfolio Optimization Engine",
    category: "Quantitative Finance",
    problem: "Multi-asset allocation problem across Vietnamese banking deposits, gold, crypto, and equities under simulated market conditions.",
    methodology: "Mean-Variance Optimization (Markowitz). Black-Litterman model. Monte Carlo simulation (10,000 paths). CVaR optimization at 95% confidence.",
    results: "Optimal Sharpe Ratio: 1.67 | CVaR-minimized portfolio: 12.3% annual return, 8.1% vol | 35% improvement over equal-weight benchmark",
    technologies: ["Python", "scipy", "PyPortfolioOpt", "cvxpy", "Plotly"],
    github: "https://github.com/phamtiendung/portfolio-optimization",
    highlight: true,
    icon: "⚖️",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
    accent: "#0a2563",
  },
  {
    id: 5,
    title: "Business Analytics Dashboard",
    category: "Business Intelligence",
    problem: "SME retail chain lacking real-time visibility into store performance, inventory turnover, and customer segmentation across 12 locations.",
    methodology: "RFM customer segmentation with K-Means clustering. ABC inventory analysis. SQL-based ETL pipeline. Interactive Plotly/Dash dashboard.",
    results: "3 high-value customer segments (28% customers → 61% revenue). 15% inventory cost reduction recommendation.",
    technologies: ["Python", "SQL", "Plotly Dash", "Power BI"],
    github: "https://github.com/phamtiendung/business-dashboard",
    highlight: false,
    icon: "🗃️",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    accent: "#2563eb",
  },
];

const skills = {
  quantitative: ["Linear Algebra & Calculus", "Probability & Statistics", "Stochastic Processes", "Optimization Theory", "Time Series Analysis", "Financial Mathematics"],
  technical: ["Python (Advanced)", "SQL", "R (Intermediate)", "Machine Learning", "Data Visualization", "Excel / VBA"],
  finance: ["Credit Risk Modeling", "Portfolio Optimization", "Basel II/III Framework", "Financial Statement Analysis", "ROA / ROE Analysis", "Stress Testing"],
  tools: ["Scikit-learn", "XGBoost / LightGBM", "Pandas / NumPy", "Plotly / Dash", "Power BI", "Git / GitHub"],
};

const achievements = [
  { year: "2016–2019", category: "Athletics", title: "Provincial & National Track Medalist", description: "Competed at provincial and national levels, earning multiple medals before age 16.", icon: "🏃", color: "#7c3aed" },
  { year: "2022", category: "Mathematics", title: "Academic Turnaround & Math Excellence", description: "Significant academic transformation, achieving top results in provincial mathematics competitions.", icon: "🏆", color: "#0f3a8f" },
  { year: "2023", category: "University", title: "NEU Mathematical Olympiad", description: "Achieved distinction in NEU's internal Mathematical Olympiad competition.", icon: "🥇", color: "#071940" },
  { year: "2023", category: "Leadership", title: "Founded CMET", description: "Established CMET at NEU, growing from concept to a multi-departmental community.", icon: "🚀", color: "#c9a96e" },
  { year: "2024", category: "Research", title: "Economic Modeling Competition", description: "Developed portfolio optimization model across banking, gold, crypto, and equities.", icon: "📐", color: "#0a2563" },
  { year: "2024", category: "Leadership", title: "TEDx Organizer", description: "Led organization of TEDx-style events coordinating 200+ attendees.", icon: "🎤", color: "#1a4dbf" },
  { year: "2025", category: "Certification", title: "CFA Level I", description: "Pursuing CFA Level I to strengthen quantitative finance credentials.", icon: "📜", color: "#2563eb" },
  { year: "2025", category: "Certification", title: "IELTS 7.0+", description: "Targeting Band 7.0+ for professional English proficiency.", icon: "🌐", color: "#0f3a8f" },
];

const leadership = {
  cmet: {
    title: "CMET — Club of Mathematics, Economics & Technology",
    role: "Founder & President",
    period: "2023 – Present",
    description: "Founded and lead CMET at NEU as a multidisciplinary community bridging mathematics, economics, and emerging technology. Building a sustainable ecosystem connecting students, lecturers, corporate partners, and industry experts.",
    achievements: [
      "Recruited and manage a core team of 20+ members across 4 functional divisions",
      "Established partnerships with 3 corporate sponsors and 2 academic departments",
      "Organized 5+ knowledge-sharing events reaching 300+ student participants",
      "Developed long-term strategic roadmap positioning CMET as a campus-wide academic ecosystem",
      "Pioneered TEDx-style talks on AI, Big Data, and digital innovation at NEU",
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  events: [
    { title: "Big Data 4.0: Where Are We?", topic: "Vietnam's position in the global data economy", img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&q=80" },
    { title: "Breakthrough Tech & Social Impact", topic: "How emerging tech reshapes society", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80" },
    { title: "AI & LLM for Finance Students", topic: "Applications in Math, Finance, Data Science", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80" },
    { title: "Entrepreneurship & Innovation", topic: "Cases from Vietnamese startup ecosystem", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80" },
  ],
};

// ─── TABS CONFIG ────────────────────────────────────────────────────────────

const TABS = [
  { id: "projects", label: "Projects", icon: "💡" },
  { id: "leadership", label: "Leadership", icon: "🚀" },
  { id: "achievements", label: "Achievements", icon: "🏆" },
  { id: "about", label: "About & Skills", icon: "⚙️" },
];

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

export default function PortfolioUpgraded() {
  const [activeTab, setActiveTab] = useState("projects");
  const [prevTab, setPrevTab] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchTab = (tabId) => {
    if (tabId === activeTab || animating) return;
    setAnimating(true);
    setPrevTab(activeTab);
    setTimeout(() => {
      setActiveTab(tabId);
      setAnimating(false);
      setExpandedProject(null);
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 220);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#030d1f", minHeight: "100vh", color: "#fff" }}>

      {/* ── HERO ── */}
      <HeroSection scrolled={scrolled} />

      {/* ── STICKY NAV TABS ── */}
      <div
        ref={contentRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "rgba(3,13,31,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", gap: 0, overflowX: "auto" }}>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                style={{
                  padding: "16px 24px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: activeTab === tab.id ? 600 : 400,
                  color: activeTab === tab.id ? "#fff" : "rgba(255,255,255,0.45)",
                  borderBottom: activeTab === tab.id ? "2px solid #3b82f6" : "2px solid transparent",
                  transition: "all 0.25s ease",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.01em",
                }}
              >
                <span style={{ marginRight: 6 }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── TAB CONTENT ── */}
      <div
        style={{
          opacity: animating ? 0 : 1,
          transform: animating ? "translateY(10px)" : "translateY(0)",
          transition: "opacity 0.22s ease, transform 0.22s ease",
          minHeight: 600,
        }}
      >
        {activeTab === "projects" && (
          <ProjectsSection expandedProject={expandedProject} setExpandedProject={setExpandedProject} />
        )}
        {activeTab === "leadership" && <LeadershipSection />}
        {activeTab === "achievements" && <AchievementsSection />}
        {activeTab === "about" && <AboutSection />}
      </div>

      {/* ── CONTACT FOOTER ── */}
      <ContactFooter />
    </div>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* BG image with overlay */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1400&q=80)",
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(3,13,31,0.96) 0%, rgba(7,25,64,0.88) 50%, rgba(10,37,99,0.80) 100%)" }} />

      {/* Animated orbs */}
      <div style={{ position: "absolute", top: "20%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.15), transparent 70%)", filter: "blur(40px)" }} />
      <div style={{ position: "absolute", bottom: "20%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,169,110,0.12), transparent 70%)", filter: "blur(50px)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "center" }}>
        <div>
          {/* Status badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, background: "rgba(201,169,110,0.12)", border: "1px solid rgba(201,169,110,0.25)", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9a96e", display: "inline-block", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#e8d5a8", textTransform: "uppercase" }}>Open to Internship · 2025</span>
          </div>

          <h1 style={{ fontSize: "clamp(40px,5vw,64px)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
            Phạm Tiến Dũng
          </h1>
          <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, #c9a96e, transparent)", borderRadius: 2, marginBottom: 20 }} />
          <p style={{ fontSize: 20, fontWeight: 300, color: "#93b4ff", marginBottom: 20 }}>
            Data Analytics · Risk Management · Quantitative Finance
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: 560, marginBottom: 36 }}>
            {personalInfo.introduction}
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: 36, marginBottom: 40 }}>
            {[["5+", "Analytics Projects"], ["300+", "Students Reached"], ["NEU", "Math Olympiad"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontSize: 26, fontWeight: 700, color: "#c9a96e", lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 4, letterSpacing: "0.05em" }}>{l}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="#projects" style={btnPrimary}>View Projects →</a>
            <a href="/resume.pdf" download style={btnOutlineGold}>Download Resume ↓</a>
            <a href="#contact" style={btnOutlineWhite}>Contact Me</a>
          </div>
        </div>

        {/* Profile card */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: 32, backdropFilter: "blur(20px)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: "linear-gradient(225deg, rgba(201,169,110,0.3), transparent)", borderRadius: "0 24px 0 0" }} />
          {/* Avatar */}
          <div style={{ width: 88, height: 88, borderRadius: 20, background: "linear-gradient(135deg, #0f3a8f, #2563eb)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 800, marginBottom: 20, boxShadow: "0 8px 32px rgba(37,99,235,0.3)" }}>
            PD
          </div>
          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Pham Tien Dung</h3>
            <p style={{ fontSize: 13, color: "#93b4ff", margin: 0 }}>Economic Mathematics · NEU</p>
          </div>
          {[["Major", "Economic Mathematics"], ["University", "NEU, Hanoi"], ["Focus", "Quant Finance & ML"], ["Status", "Seeking Internship"]].map(([l, v]) => (
            <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{l}</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>{v}</span>
            </div>
          ))}
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["Python", "ML", "SQL", "Risk", "Finance"].map((t) => (
              <span key={t} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 100, background: "rgba(37,99,235,0.2)", color: "#93b4ff", border: "1px solid rgba(37,99,235,0.3)" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)" }} />
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </section>
  );
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────

function ProjectsSection({ expandedProject, setExpandedProject }) {
  const featured = projects.filter((p) => p.highlight);
  const others = projects.filter((p) => !p.highlight);

  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
      <SectionHeader index="02" title="Applied Research &" highlight="Analytics Portfolio" />
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, maxWidth: 560, lineHeight: 1.7, marginBottom: 48 }}>
        Each project addresses a real-world problem using rigorous quantitative methods. All code is open-source and documented for reproducibility.
      </p>

      {/* Featured 2-col */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px,1fr))", gap: 20, marginBottom: 20 }}>
        {featured.map((p) => (
          <FeaturedCard key={p.id} project={p} expanded={expandedProject === p.id} onToggle={() => setExpandedProject(expandedProject === p.id ? null : p.id)} />
        ))}
      </div>

      {/* Others 3-col */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 16 }}>
        {others.map((p) => (
          <SmallCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({ project, expanded, onToggle }) {
  return (
    <div
      onClick={onToggle}
      style={{
        borderRadius: 20, overflow: "hidden", cursor: "pointer",
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${expanded ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.08)"}`,
        transition: "all 0.3s ease",
        backdropFilter: "blur(10px)",
      }}
      onMouseEnter={(e) => { if (!expanded) e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = expanded ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {/* Image header */}
      <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
        <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5)" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${project.accent}cc, transparent)` }} />
        <div style={{ position: "absolute", top: 16, left: 16 }}>
          <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
            {project.category}
          </span>
        </div>
        <div style={{ position: "absolute", top: 12, right: 16, fontSize: 28 }}>{project.icon}</div>
        <div style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0, lineHeight: 1.2, letterSpacing: "-0.01em" }}>{project.title}</h3>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "20px 22px" }}>
        {/* Results always visible */}
        <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)", marginBottom: 16 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 4px" }}>Results</p>
          <p style={{ fontSize: 13, color: "#93c5fd", margin: 0, lineHeight: 1.5 }}>{project.results}</p>
        </div>

        {/* Expandable details */}
        <div style={{ maxHeight: expanded ? 400 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
          <div style={{ paddingBottom: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Problem</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: 14 }}>{project.problem}</p>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Methodology</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{project.methodology}</p>
          </div>
        </div>

        {/* Tech stack + expand toggle */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
          {project.technologies.map((t) => (
            <span key={t} style={{ fontSize: 11, padding: "3px 9px", borderRadius: 6, background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "monospace" }}>{t}</span>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
            style={{ fontSize: 13, color: "#60a5fa", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
            <GithubIcon /> View on GitHub →
          </a>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{expanded ? "▲ less" : "▼ more"}</span>
        </div>
      </div>
    </div>
  );
}

function SmallCard({ project }) {
  return (
    <div
      style={{
        borderRadius: 16, overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
    >
      {/* Image strip */}
      <div style={{ height: 110, overflow: "hidden", position: "relative" }}>
        <img src={project.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.4)" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent, rgba(3,13,31,0.8))` }} />
        <div style={{ position: "absolute", top: 10, left: 12, fontSize: 22 }}>{project.icon}</div>
        <div style={{ position: "absolute", bottom: 10, left: 12 }}>
          <span style={{ fontSize: 10, padding: "3px 9px", borderRadius: 100, background: `${project.accent}99`, color: "rgba(255,255,255,0.9)", border: `1px solid ${project.accent}` }}>{project.category}</span>
        </div>
      </div>

      <div style={{ padding: "14px 16px" }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, margin: "0 0 8px", lineHeight: 1.3 }}>{project.title}</h4>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 12 }}>{project.results}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 12 }}>
          {project.technologies.slice(0, 3).map((t) => (
            <span key={t} style={{ fontSize: 10, padding: "2px 7px", borderRadius: 5, background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>{t}</span>
          ))}
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#60a5fa", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
          <GithubIcon size={13} /> GitHub →
        </a>
      </div>
    </div>
  );
}

// ─── LEADERSHIP ──────────────────────────────────────────────────────────────

function LeadershipSection() {
  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
      <SectionHeader index="03" title="Building Communities &" highlight="Driving Impact" />

      {/* CMET hero block */}
      <div style={{ borderRadius: 24, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", marginBottom: 32, position: "relative" }}>
        <div style={{ position: "relative", height: 260 }}>
          <img src={leadership.cmet.image} alt="CMET community" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(3,13,31,0.95) 30%, rgba(3,13,31,0.4) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, padding: "40px 48px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #040e24, #1a4dbf)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14 }}>CM</div>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>{leadership.cmet.title}</h3>
                <p style={{ fontSize: 13, color: "#93b4ff", margin: 0 }}>{leadership.cmet.role} · {leadership.cmet.period}</p>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", maxWidth: 600, lineHeight: 1.7, margin: 0 }}>{leadership.cmet.description}</p>
          </div>
        </div>

        {/* Stats + achievements row */}
        <div style={{ background: "rgba(255,255,255,0.03)", padding: "28px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Key Achievements</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {leadership.cmet.achievements.map((a, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#040e24", border: "1px solid #c9a96e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#c9a96e", flexShrink: 0, marginTop: 2 }}>✓</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.5 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignContent: "start" }}>
            {[["20+", "Team Members", "Across 4 divisions"], ["3+", "Corporate Partners", "Sponsorships"], ["5+", "Events", "Knowledge sessions"], ["300+", "Students Reached", "Total audience"]].map(([v, l, s]) => (
              <div key={l} style={{ padding: "18px 16px", borderRadius: 14, background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.15)" }}>
                <div style={{ fontSize: 26, fontWeight: 700, color: "#c9a96e", lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>{l}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TEDx events grid */}
      <div style={{ marginBottom: 12 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 20, color: "rgba(255,255,255,0.8)" }}>🎤 TEDx & Technology Talkshow Series</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 14 }}>
          {leadership.events.map((ev, i) => (
            <div key={i} style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", transition: "transform 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ height: 120, overflow: "hidden", position: "relative" }}>
                <img src={ev.img} alt={ev.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.4)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(3,13,31,0.8))" }} />
                <div style={{ position: "absolute", top: 10, left: 12, fontSize: 10, padding: "3px 8px", borderRadius: 100, background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", backdropFilter: "blur(6px)" }}>
                  Event {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div style={{ padding: "14px 16px" }}>
                <h5 style={{ fontSize: 13, fontWeight: 600, margin: "0 0 6px", lineHeight: 1.3 }}>{ev.title}</h5>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", margin: 0 }}>{ev.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ACHIEVEMENTS ────────────────────────────────────────────────────────────

function AchievementsSection() {
  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
      <SectionHeader index="04" title="Milestones &" highlight="Recognition" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 48, alignItems: "start" }}>
        {/* Timeline */}
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 19, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, #0a2563, rgba(255,255,255,0.05))" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {achievements.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 20, position: "relative" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", flexShrink: 0, zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, background: "rgba(3,13,31,0.9)", border: `2px solid ${item.color}`, boxShadow: `0 0 12px ${item.color}40` }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1, padding: "14px 18px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = `${item.color}40`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 600, margin: 0, lineHeight: 1.3 }}>{item.title}</h4>
                    <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 100, background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40`, flexShrink: 0, marginLeft: 10, fontFamily: "monospace" }}>{item.year}</span>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: item.color, display: "block", marginBottom: 4 }}>{item.category}</span>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.6 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Certifications & Credentials</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
            {[
              { title: "CFA Level I", issuer: "CFA Institute", status: "In Progress", year: "2025", icon: "📊" },
              { title: "IELTS Academic 7.0+", issuer: "British Council", status: "Planned", year: "2025", icon: "🌐" },
              { title: "Python for Data Science", issuer: "Coursera / IBM", status: "Completed", year: "2023", icon: "🐍" },
              { title: "Machine Learning", issuer: "Coursera / Stanford", status: "In Progress", year: "2024", icon: "🤖" },
              { title: "SQL for Data Analysis", issuer: "DataCamp", status: "Completed", year: "2023", icon: "🗄️" },
            ].map((c, i) => (
              <div key={i} style={{ padding: "12px 14px", borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 20, flexShrink: 0 }}>{c.icon}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, margin: "0 0 2px" }}>{c.title}</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: 0 }}>{c.issuer}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: 10, padding: "3px 8px", borderRadius: 100, display: "block", marginBottom: 3, background: c.status === "Completed" ? "rgba(16,185,129,0.15)" : c.status === "In Progress" ? "rgba(59,130,246,0.15)" : "rgba(245,158,11,0.15)", color: c.status === "Completed" ? "#34d399" : c.status === "In Progress" ? "#60a5fa" : "#fbbf24" }}>{c.status}</span>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{c.year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <h3 style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Languages</h3>
          {[["Vietnamese", "Native", 100], ["English", "Professional (IELTS 7.0+)", 75]].map(([lang, level, pct]) => (
            <div key={lang} style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{lang}</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{level}</span>
              </div>
              <div style={{ height: 4, borderRadius: 2, background: "rgba(255,255,255,0.08)" }}>
                <div style={{ width: `${pct}%`, height: "100%", borderRadius: 2, background: "linear-gradient(90deg, #0a2563, #3b82f6)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT & SKILLS ──────────────────────────────────────────────────────────

function AboutSection() {
  const skillCategories = [
    { key: "quantitative", label: "Quantitative Methods", icon: "∑", color: "#071940", border: "#0f3a8f" },
    { key: "technical", label: "Technical Stack", icon: "⌨", color: "#0a2563", border: "#1a4dbf" },
    { key: "finance", label: "Finance & Risk", icon: "⚖", color: "#0f3a8f", border: "#2563eb" },
    { key: "tools", label: "Tools & Libraries", icon: "🔧", color: "#1a4dbf", border: "#3b82f6" },
  ];

  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
      <SectionHeader index="01" title="The Intersection of" highlight="Mathematics & Markets" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 48 }}>
        {/* Story */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 28 }}>
            <p style={{ margin: 0 }}>My path to quantitative finance began on the athletics track, not in a classroom. Competing at provincial and national levels before age 16 taught me the discipline of iterative improvement — principles I now apply to financial modeling.</p>
            <p style={{ margin: 0 }}>During COVID-19, I redirected that competitive energy toward mathematics. What began as academic focus evolved into a deep fascination with how mathematical structures describe economic reality.</p>
            <p style={{ margin: 0 }}>Beyond coursework, I founded CMET to build the learning community I wished existed — one where students, lecturers, and industry professionals exchange ideas across mathematics, technology, and finance.</p>
          </div>

          {/* Profile card */}
          <div style={{ padding: "20px 22px", borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Academic Profile</h4>
            {[["University", "National Economics University (NEU)"], ["Faculty", "Mathematical Economics"], ["Major", "Economic Mathematics"], ["Career Target", "Data / Risk / Quant Finance"], ["Location", "Hanoi, Vietnam"]].map(([l, v]) => (
              <div key={l} style={{ display: "flex", gap: 16, padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", width: 110, flexShrink: 0 }}>{l}</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignContent: "start" }}>
          {skillCategories.map((cat) => (
            <div key={cat.key} style={{ padding: "18px 18px", borderRadius: 16, background: "rgba(255,255,255,0.03)", border: `1px solid ${cat.border}30`, transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${cat.border}60`; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${cat.border}30`; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: cat.border, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#fff" }}>{cat.icon}</div>
                <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{cat.label}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {skills[cat.key].map((skill) => (
                  <div key={skill} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: cat.border, flexShrink: 0 }} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career interests bar */}
      <div style={{ padding: "28px 32px", borderRadius: 20, background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.15)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14, position: "relative" }}>Career Interests</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, position: "relative" }}>
          {["Data Analytics", "Credit Risk Modeling", "Portfolio Optimization", "Quantitative Finance", "Machine Learning in Finance", "Business Intelligence", "Basel II/III", "Financial Strategy"].map((interest) => (
            <span key={interest} style={{ fontSize: 13, padding: "7px 16px", borderRadius: 100, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.75)" }}>{interest}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT FOOTER ──────────────────────────────────────────────────────────

function ContactFooter() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <footer style={{ background: "linear-gradient(135deg, #020a1a 0%, #030d1f 60%, #040e24 100%)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 24px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader index="06" title="Let's" highlight="Connect" />
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", maxWidth: 480, lineHeight: 1.7, marginBottom: 48 }}>
          Actively seeking internship opportunities in Data Analytics, Risk Management, and Quantitative Finance. Open to research collaborations.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 56 }}>
          {/* Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: "✉️" },
              { label: "LinkedIn", value: "linkedin.com/in/phamtiendung", href: personalInfo.linkedin, icon: "💼" },
              { label: "GitHub", value: "github.com/phamtiendung", href: personalInfo.github, icon: "💻" },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(201,169,110,0.12)", border: "1px solid rgba(201,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{link.icon}</div>
                <div>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", margin: "0 0 2px" }}>{link.label}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", margin: 0 }}>{link.value}</p>
                </div>
                <span style={{ marginLeft: "auto", color: "rgba(255,255,255,0.3)", fontSize: 14 }}>→</span>
              </a>
            ))}
            <div style={{ padding: "14px 16px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", marginTop: 4 }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", margin: "0 0 4px" }}>Based in</p>
              <p style={{ fontSize: 14, fontWeight: 500, margin: "0 0 3px" }}>📍 Hanoi, Vietnam</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0 }}>Available for remote & on-site roles in Hanoi</p>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div style={{ padding: 40, borderRadius: 20, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,169,110,0.2)", textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 14 }}>✉️</div>
                <h4 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Message Sent!</h4>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>Thank you for reaching out. I'll respond within 24–48 hours.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[{ name: "name", label: "Full Name", placeholder: "Your Name", type: "text" }, { name: "email", label: "Email Address", placeholder: "your@email.com", type: "email" }].map((f) => (
                  <div key={f.name}>
                    <label style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{f.label}</label>
                    <input type={f.type} value={form[f.name]} placeholder={f.placeholder}
                      onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: 12, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box" }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(201,169,110,0.5)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }} />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Message</label>
                  <textarea value={form.message} placeholder="Tell me about the opportunity..." rows={4}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: 12, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: 14, outline: "none", resize: "none", boxSizing: "border-box" }}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(201,169,110,0.5)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }} />
                </div>
                <button onClick={() => form.name && form.email && form.message && setSent(true)}
                  style={{ padding: "13px 24px", borderRadius: 12, background: "linear-gradient(135deg, #1a4dbf, #2563eb)", color: "#fff", border: "none", fontSize: 14, fontWeight: 600, cursor: "pointer", letterSpacing: "0.02em", boxShadow: "0 6px 24px rgba(37,99,235,0.3)", transition: "transform 0.15s, box-shadow 0.15s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(37,99,235,0.4)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,99,235,0.3)"; }}>
                  Send Message →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #0a2563, #2563eb)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800 }}>PD</div>
            <span style={{ fontSize: 14, fontWeight: 600 }}>Pham Tien Dung</span>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© {new Date().getFullYear()} · Economic Mathematics · NEU · Hanoi</p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>Built with Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────

function SectionHeader({ index, title, highlight }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <p style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: "0.15em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: 8 }}>{index} / {title.toLowerCase().replace(" &", "")}</p>
      <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, margin: "0 0 12px", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
        {title}{" "}
        <span style={{ background: "linear-gradient(135deg, #3b82f6, #93b4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{highlight}</span>
      </h2>
      <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, #c9a96e, transparent)", borderRadius: 2 }} />
    </div>
  );
}

function GithubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// ─── BUTTON STYLES ───────────────────────────────────────────────────────────

const btnPrimary = {
  padding: "12px 28px", borderRadius: 100, background: "linear-gradient(135deg, #1a4dbf, #2563eb)",
  color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-block",
  boxShadow: "0 8px 28px rgba(37,99,235,0.35)", transition: "transform 0.15s",
};
const btnOutlineGold = {
  padding: "12px 28px", borderRadius: 100, border: "1px solid rgba(201,169,110,0.5)",
  color: "#e8d5a8", fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-block",
  background: "rgba(201,169,110,0.08)",
};
const btnOutlineWhite = {
  padding: "12px 28px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.2)",
  color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-block",
};
