export default function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{ borderColor: "#e2e8f0", background: "#f8fafc" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ background: "linear-gradient(135deg, #0a2563, #2563eb)" }}
          >
            PD
          </div>
          <span className="font-display text-sm font-medium text-slate-700">
            Pham Tien Dung
          </span>
        </div>
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} · Economic Mathematics · NEU · Hanoi
        </p>
        <p className="text-xs text-slate-400">
          Built with Next.js · TypeScript · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
