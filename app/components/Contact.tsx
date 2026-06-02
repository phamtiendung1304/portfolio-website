"use client";
import { useState } from "react";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await fetch("https://formspree.io/f/xwvzgbvd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    });
    setSent(true);
  } catch {
    alert("Có lỗi xảy ra. Vui lòng thử lại.");
  }
};

  const contactLinks = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/phamtiendung",
      href: personalInfo.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/phamtiendung",
      href: personalInfo.github,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-28"
      style={{ background: "linear-gradient(135deg, #040e24 0%, #071940 60%, #0a2563 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-3">
            06 / Contact
          </p>
          <h2 className="font-display text-4xl font-semibold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <div
            className="h-0.5 w-16 mb-4"
            style={{ background: "linear-gradient(90deg, #c9a96e, transparent)" }}
          />
          <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
            I&apos;m actively seeking internship opportunities in Data Analytics, Risk Management,
            and Quantitative Finance. Open to research collaborations and knowledge exchanges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact info */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Get In Touch
            </h3>
            <div className="space-y-4 mb-10">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all group"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(201,169,110,0.15)",
                      color: "#c9a96e",
                      border: "1px solid rgba(201,169,110,0.2)",
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">{link.label}</p>
                    <p className="text-sm text-white/80 group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <span className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors text-sm">
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* Location */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-xs text-slate-500 mb-1">Based in</p>
              <p className="text-white font-medium">📍 Hanoi, Vietnam</p>
              <p className="text-slate-400 text-xs mt-1">
                Available for remote internships and on-site opportunities in Hanoi
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Send a Message
            </h3>

            {sent ? (
              <div
                className="p-8 rounded-2xl text-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,169,110,0.3)",
                }}
              >
                <div className="text-4xl mb-4">✉️</div>
                <h4 className="font-display text-xl text-white mb-2">Message Sent!</h4>
                <p className="text-slate-400 text-sm">
                  Thank you for reaching out. I&apos;ll respond within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", label: "Full Name", type: "input", placeholder: "Your Name" },
                  { name: "email", label: "Email Address", type: "input", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs text-slate-400 mb-2 uppercase tracking-wider">
                      {field.label}
                    </label>
                    <input
                      type={field.name === "email" ? "email" : "text"}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formState[field.name as keyof typeof formState]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "white",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(201,169,110,0.5)";
                        e.target.style.background = "rgba(255,255,255,0.07)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.1)";
                        e.target.style.background = "rgba(255,255,255,0.05)";
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs text-slate-400 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about the opportunity, collaboration, or question..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(201,169,110,0.5)";
                      e.target.style.background = "rgba(255,255,255,0.07)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.1)";
                      e.target.style.background = "rgba(255,255,255,0.05)";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all hover:scale-[1.02] hover:shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #1a4dbf, #2563eb)",
                    color: "white",
                    boxShadow: "0 8px 30px rgba(37,99,235,0.3)",
                  }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
