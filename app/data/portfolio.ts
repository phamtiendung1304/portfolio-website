export const personalInfo = {
  name: "Pham Tien Dung",
  nameVi: "Phạm Tiến Dũng",
  title: "Economic Mathematics Student",
  subtitle: "Data Analytics · Risk Management · Quantitative Finance",
  introduction:
    "Economic Mathematics student at NEU, passionate about transforming complex datasets into strategic insights. Former provincial athlete turned quantitative analyst — I bridge rigorous mathematical modeling with real-world financial applications.",
  university: "National Economics University (NEU)",
  major: "Economic Mathematics (Toán Kinh Tế)",
  year: "Class of 2026",
  email: "phamtiendung11233206@gmail.com",
  linkedin: "https://linkedin.com/in/phamtiendung",
  github: "https://github.com/phamtiendung",
  location: "Hanoi, Vietnam",
};

export const projects = [
  {
    id: 1,
    title: "Credit Risk Scoring Model",
    category: "Risk Management",
    problem:
      "Traditional credit scoring models fail to capture behavioral signals from younger, underbanked customer segments, resulting in adverse selection and elevated NPL ratios.",
    dataset: "Synthetic loan dataset (50,000 records) with 40+ features including financial history, digital behavior, and demographic data",
    methodology:
      "Hybrid ensemble model combining Logistic Regression (baseline) with Gradient Boosting (XGBoost). SMOTE for class imbalance. SHAP values for model interpretability. Basel II/III compliance framework applied.",
    results: "AUC-ROC: 0.89 | Precision: 0.84 | Recall: 0.81 | 23% reduction in predicted NPL rate vs. benchmark",
    technologies: ["Python", "XGBoost", "SHAP", "Scikit-learn", "Pandas", "Matplotlib"],
    github: "https://github.com/phamtiendung/credit-risk-scoring",
    highlight: true,
    icon: "🏦",
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    category: "Data Analytics",
    problem:
      "Retail banking client experiencing 18% annual churn rate among millennial customers, seeking proactive retention strategy through predictive analytics.",
    dataset: "Bank customer dataset with 10,000+ records including transaction patterns, product usage, and engagement metrics",
    methodology:
      "Random Forest with hyperparameter tuning via GridSearchCV. Feature engineering on RFM (Recency, Frequency, Monetary) metrics. Survival analysis for time-to-churn estimation.",
    results: "AUC-ROC: 0.86 | Top-decile lift: 3.4x | Identified 5 key behavioral churn predictors",
    technologies: ["Python", "Scikit-learn", "Random Forest", "Seaborn", "Plotly", "SQL"],
    github: "https://github.com/phamtiendung/customer-churn",
    highlight: false,
    icon: "📊",
  },
  {
    id: 3,
    title: "Vietnamese Stock Market Analysis",
    category: "Financial Analysis",
    problem:
      "Assessing return predictability on HOSE using technical and fundamental signals, with focus on volatility clustering and regime detection.",
    dataset: "HOSE daily OHLCV data (2018–2024) for VN30 index constituents via VNDirect API",
    methodology:
      "ARIMA-GARCH for volatility modeling. ADF & KPSS stationarity tests. Johansen cointegration test for pairs trading. Kalman filter for dynamic beta estimation.",
    results: "GARCH(1,1) best fit for VN-Index. 4 cointegrated pairs identified. Rolling Sharpe > 1.2 on backtest (2022–2024)",
    technologies: ["Python", "statsmodels", "arch", "pandas", "matplotlib", "VNDirect API"],
    github: "https://github.com/phamtiendung/vnstock-analysis",
    highlight: false,
    icon: "📈",
  },
  {
    id: 4,
    title: "Portfolio Optimization Engine",
    category: "Quantitative Finance",
    problem:
      "Multi-asset allocation problem across Vietnamese banking deposits, gold, crypto, and equities under simulated market conditions with regulatory constraints.",
    dataset: "Simulated returns for 4 asset classes over 5-year horizon with Vietnam-specific risk parameters",
    methodology:
      "Mean-Variance Optimization (Markowitz). Black-Litterman model for incorporating views. Monte Carlo simulation (10,000 paths). CVaR optimization at 95% confidence. Efficient Frontier visualization.",
    results: "Optimal Sharpe Ratio: 1.67 | CVaR-minimized portfolio: 12.3% annual return, 8.1% vol | 35% improvement over equal-weight benchmark",
    technologies: ["Python", "scipy", "numpy", "PyPortfolioOpt", "Plotly", "cvxpy"],
    github: "https://github.com/phamtiendung/portfolio-optimization",
    highlight: true,
    icon: "⚖️",
  },
  {
    id: 5,
    title: "Business Analytics Dashboard",
    category: "Business Intelligence",
    problem:
      "SME retail chain lacking real-time visibility into store performance, inventory turnover, and customer segmentation across 12 locations.",
    dataset: "Retail transaction data: 200K+ transactions across 12 stores, 2 years of historical data",
    methodology:
      "RFM customer segmentation with K-Means clustering. ABC inventory analysis. SQL-based ETL pipeline. Interactive Plotly/Dash dashboard with drill-down capabilities.",
    results: "Identified 3 high-value customer segments (28% of customers → 61% revenue). 15% inventory cost reduction recommendation. Dashboard adopted by client management.",
    technologies: ["Python", "SQL", "Plotly Dash", "Pandas", "K-Means", "Power BI"],
    github: "https://github.com/phamtiendung/business-dashboard",
    highlight: false,
    icon: "🗃️",
  },
];

export const leadership = {
  cmet: {
    title: "CMET — Club of Mathematics, Economics & Technology",
    role: "Founder & President",
    period: "2023 – Present",
    description:
      "Founded and lead CMET at NEU as a multidisciplinary community bridging mathematics, economics, and emerging technology. Building a sustainable ecosystem connecting students, lecturers, corporate partners, and industry experts.",
    achievements: [
      "Recruited and manage a core team of 20+ members across 4 functional divisions",
      "Established partnerships with 3 corporate sponsors and 2 academic departments",
      "Organized 5+ knowledge-sharing events reaching 300+ student participants",
      "Developed long-term strategic roadmap positioning CMET as a campus-wide academic ecosystem",
      "Pioneered TEDx-style talks on AI, Big Data, and digital innovation at NEU",
    ],
    segments: ["Students", "Club Members", "Corporate Partners", "Academic Experts & Lecturers"],
  },
  tedx: {
    title: "TEDx & Technology Talkshow Series",
    role: "Lead Organizer",
    period: "2023 – Present",
    events: [
      {
        title: "Big Data 4.0: Where Are We in the Digital Age?",
        description: "Exploring Vietnam's position in the global data economy",
      },
      {
        title: "Breakthrough Technology & Social Impact",
        description: "How emerging tech reshapes society and opportunity",
      },
      {
        title: "AI & LLM Applications for Finance & Data Science",
        description: "Talkshow targeting Math, Finance, and Data Science students",
      },
      {
        title: "Entrepreneurship and Innovation",
        description: "Case studies from Vietnamese startup ecosystem",
      },
    ],
  },
};

export const achievements = [
  {
    year: "2016–2019",
    category: "Athletics",
    title: "Provincial & National Track Medalist",
    description: "Competed in track and field at provincial and national levels, earning multiple medals before age 16.",
    icon: "🏃",
  },
  {
    year: "2022",
    category: "Mathematics",
    title: "Academic Turnaround & Mathematics Excellence",
    description: "Significant academic transformation during final high school year, achieving top results in school and provincial/national mathematics competitions.",
    icon: "🏆",
  },
  {
    year: "2023",
    category: "University",
    title: "NEU Mathematical Olympiad",
    description: "Achieved distinction in National Economics University's internal Mathematical Olympiad competition.",
    icon: "🥇",
  },
  {
    year: "2023",
    category: "Leadership",
    title: "Founded CMET",
    description: "Established the Club of Mathematics, Economics & Technology at NEU, growing it from concept to a multi-departmental community.",
    icon: "🚀",
  },
  {
    year: "2024",
    category: "Research",
    title: "Economic Modeling Competition",
    description: "Developed portfolio optimization model across banking, precious metals, cryptocurrency, and equities in simulated market environment.",
    icon: "📐",
  },
  {
    year: "2024",
    category: "Leadership",
    title: "TEDx Organizer",
    description: "Led organization of TEDx-style events at NEU, coordinating speakers, sponsors, and audiences of 200+ attendees.",
    icon: "🎤",
  },
  {
    year: "2025 (Planned)",
    category: "Certification",
    title: "CFA Level I",
    description: "Pursuing CFA Level I certification to strengthen quantitative finance and investment analysis credentials.",
    icon: "📜",
  },
  {
    year: "2025 (Planned)",
    category: "Certification",
    title: "IELTS 7.0+",
    description: "Targeting Band 7.0+ to demonstrate professional English proficiency for international roles.",
    icon: "🌐",
  },
];

export const skills = {
  quantitative: [
    "Linear Algebra & Calculus",
    "Probability & Statistics",
    "Stochastic Processes",
    "Optimization Theory",
    "Time Series Analysis",
    "Financial Mathematics",
  ],
  technical: [
    "Python (Advanced)",
    "SQL",
    "R (Intermediate)",
    "Machine Learning",
    "Data Visualization",
    "Excel / VBA",
  ],
  finance: [
    "Credit Risk Modeling",
    "Portfolio Optimization",
    "Basel II/III Framework",
    "Financial Statement Analysis",
    "ROA / ROE Analysis",
    "Stress Testing",
  ],
  tools: [
    "Scikit-learn",
    "XGBoost / LightGBM",
    "Pandas / NumPy",
    "Plotly / Dash",
    "Power BI",
    "Git / GitHub",
  ],
};

export const certifications = [
  {
    title: "CFA Level I",
    issuer: "CFA Institute",
    status: "In Progress",
    year: "2025",
    color: "#071940",
    icon: "📊",
  },
  {
    title: "IELTS Academic 7.0+",
    issuer: "British Council / IDP",
    status: "Planned",
    year: "2025",
    color: "#0a2563",
    icon: "🌐",
  },
  {
    title: "Python for Data Science",
    issuer: "Coursera / IBM",
    status: "Completed",
    year: "2023",
    color: "#0f3a8f",
    icon: "🐍",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera / Stanford",
    status: "In Progress",
    year: "2024",
    color: "#1a4dbf",
    icon: "🤖",
  },
  {
    title: "SQL for Data Analysis",
    issuer: "DataCamp",
    status: "Completed",
    year: "2023",
    color: "#2563eb",
    icon: "🗄️",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Applying XGBoost to Credit Risk: Beyond the FICO Score",
    excerpt: "How gradient boosting models can outperform traditional logistic regression in credit scoring, and what Basel III says about model validation.",
    category: "Risk Management",
    date: "March 2024",
    readTime: "8 min read",
    slug: "xgboost-credit-risk",
  },
  {
    id: 2,
    title: "Portfolio Optimization Under Realistic Market Conditions",
    excerpt: "From Markowitz to Black-Litterman: incorporating regime uncertainty and tail risk into multi-asset allocation for Vietnamese investors.",
    category: "Quantitative Finance",
    date: "February 2024",
    readTime: "12 min read",
    slug: "portfolio-optimization-vietnam",
  },
  {
    id: 3,
    title: "The Danger of a Single Data Story",
    excerpt: "Inspired by Adichie's TED talk — why multidimensional thinking is essential in data analytics, and how single-metric dashboards can mislead.",
    category: "Data Analytics",
    date: "January 2024",
    readTime: "6 min read",
    slug: "danger-single-data-story",
  },
];
