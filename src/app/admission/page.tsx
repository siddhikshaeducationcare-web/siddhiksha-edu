import type { Metadata } from "next";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { AdmissionForm } from "./AdmissionForm";

export const metadata: Metadata = {
  title: "Admission",
  description:
    "Register your child for admission at Siddhiksha Education Care. State Board and CBSE tuition for Classes 1-12 in Chennai.",
};

const benefits = [
  "Experienced and qualified faculty",
  "Small batch sizes for individual attention",
  "Regular assessments and feedback",
  "Proven track record of top results",
  "Flexible timing options",
  "Free trial class available",
];

export default function AdmissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-gold-300 uppercase tracking-widest mb-4">
            Join Us
          </span>
          <h1 className="font-montserrat font-black text-white text-4xl sm:text-5xl mb-6">
            Admission <span className="text-gold-400">Registration</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Take the first step towards academic excellence. Fill in the form below
            and our team will get in touch with you shortly.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Why enroll */}
              <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-5">
                  Why Enroll With Us?
                </h3>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-gray-600 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-5">
                  Courses Available
                </h3>
                <div className="space-y-3">
                  {[
                    { board: "State Board", classes: "Classes 1–12", subjects: "All Subjects + Maths, Science, Tamil" },
                    { board: "CBSE", classes: "Classes 1–10", subjects: "All Subjects + Maths, Science" },
                  ].map(({ board, classes, subjects }) => (
                    <div key={board} className="p-4 rounded-xl bg-royal-50 border border-royal-100">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-royal-800 text-sm">{board}</span>
                        <span className="text-xs text-royal-600 bg-royal-100 px-2 py-0.5 rounded-full">{classes}</span>
                      </div>
                      <p className="text-xs text-gray-500">{subjects}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div className="bg-gradient-to-br from-royal-700 to-royal-900 rounded-3xl p-7 text-white">
                <h3 className="font-montserrat font-bold text-xl mb-5">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-gold-300" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs">Phone</p>
                      <a href="tel:+91XXXXXXXXXX" className="text-white font-medium text-sm hover:text-gold-300 transition-colors">
                        +91 XXXXX XXXXX
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-gold-300" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs">Email</p>
                      <a href="mailto:info@siddhikshaedu.com" className="text-white font-medium text-sm hover:text-gold-300 transition-colors">
                        info@siddhikshaedu.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-gold-300" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs">Location</p>
                      <p className="text-white font-medium text-sm">Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AdmissionForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
