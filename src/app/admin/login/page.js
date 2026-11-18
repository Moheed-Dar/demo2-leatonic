import Link from "next/link";
import LoginForm from "@/app/admin/login/LoginForm";

// ✅ YEH LINE ADD KARO — Vercel ko pre-render karne se rokega
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Leatonic — Admin Login",
  description: "Login to Leatonic admin panel",
};

export default function AdminLoginPage() {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-[#0a1929] overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ===== LEATONIC LOGO WATERMARK (gradient box + "L") ===== */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 gap-6">
        {/* Big "L" gradient watermark */}
        <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-[2.5rem] bg-linear-to-br from-[#97b4f8] to-[#5b7def] opacity-[0.06] flex items-center justify-center shadow-2xl">
          <span className="text-white font-bold text-[16rem] sm:text-[20rem] leading-none select-none">
            L
          </span>
        </div>
      </div>

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-[#2B7FFF]/8 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-62.5 bg-[#2B7FFF]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Back to Home — Fixed Position */}
      <Link
        href="/"
        className="fixed top-5 left-5 z-50 flex items-center gap-2 text-white/50 hover:text-white/80 text-sm font-medium transition-all bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        <span className="hidden sm:inline">Back to Home</span>
      </Link>

      {/* Leatonic Brand — Top Center */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-linear-to-br from-[#97b4f8] to-[#5b7def] shadow-lg shadow-[#5b7def]/30">
          <span className="text-white font-bold text-base select-none">L</span>
        </div>
        <span className="text-white text-lg font-bold tracking-tight select-none">
          Leatonic
        </span>
      </div>

      {/* Form Container — Constrained Width */}
      <div className="relative z-10 w-full max-w-105 mx-4">
        <LoginForm />
      </div>
    </div>
  );
}