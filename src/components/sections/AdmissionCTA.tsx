import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function AdmissionCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0f1d3d 0%, #1e3a8a 50%, #1d4ed8 100%)",
        }}
      />
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gold-300 text-sm font-medium mb-6">
          🎓 Admissions Open — 2025-26 Academic Year
        </div>

        <h2 className="font-montserrat font-black text-white text-4xl sm:text-5xl mb-6 leading-tight">
          Give Your Child the
          <span className="text-gold-400"> Best Start</span>
        </h2>

        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Join the hundreds of families who trust Siddhiksha Education Care for
          expert coaching, individual attention, and results that speak for themselves.
          Limited seats available.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/admission"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-white font-bold rounded-xl hover:bg-gold-400 transition-all duration-200 shadow-2xl shadow-gold-500/30 hover:-translate-y-0.5 text-base"
          >
            Register for Admission
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:+91XXXXXXXXXX"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-200 text-base"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-12 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8 text-white/50 text-sm">
          {[
            "✓ No Hidden Fees",
            "✓ Free Trial Class",
            "✓ Small Batches",
            "✓ Expert Teachers",
          ].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
