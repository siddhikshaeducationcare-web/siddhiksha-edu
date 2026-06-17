import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Achievements", href: "/achievements" },
  { label: "Faculty", href: "/faculty" },
  { label: "Admission", href: "/admission" },
];

const courses = [
  { label: "State Board (Classes 1–12)", href: "/admission" },
  { label: "CBSE (Classes 1–10)", href: "/admission" },
  { label: "Mathematics", href: "/admission" },
  { label: "Science", href: "/admission" },
  { label: "Tamil", href: "/admission" },
];

export function Footer() {
  return (
    <footer className="bg-royal-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-royal-600 to-royal-800 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="block font-montserrat font-bold text-xl text-white leading-none">
                  Siddhiksha
                </span>
                <span className="block text-sm text-gold-400 font-medium">
                  Education Care
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              "A Place to Learn!" – Nurturing young minds with expert guidance,
              personalized attention, and a passion for academic excellence in
              Chennai.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:bg-royal-700 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-white mb-5 text-base">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors duration-200 text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-montserrat font-semibold text-white mb-5 text-base">
              Courses
            </h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.label}>
                  <Link
                    href={course.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors duration-200 text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-semibold text-white mb-5 text-base">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-royal-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-gold-400" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">
                  Chennai, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-royal-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gold-400" />
                </div>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-royal-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-gold-400" />
                </div>
                <a
                  href="mailto:info@siddhikshaedu.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  info@siddhikshaedu.com
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-royal-800/50 rounded-xl border border-royal-700/50">
              <p className="text-xs text-gray-400 mb-1">Office Hours</p>
              <p className="text-sm text-white font-medium">Mon – Sat: 9 AM – 7 PM</p>
              <p className="text-xs text-gray-400 mt-1">Sunday: 10 AM – 2 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-royal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Siddhiksha Education Care. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            State Board & CBSE Tuition Centre in Chennai
          </p>
        </div>
      </div>
    </footer>
  );
}
