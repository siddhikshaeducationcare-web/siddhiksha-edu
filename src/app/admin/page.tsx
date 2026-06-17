import { Users, Trophy, MessageSquare, ClipboardList, TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Total Admissions", value: "248", icon: ClipboardList, change: "+12 this month", color: "bg-royal-50 text-royal-700", href: "/admin/admissions" },
  { label: "Faculty Members", value: "6", icon: Users, change: "All active", color: "bg-gold-50 text-gold-700", href: "/admin/faculty" },
  { label: "Achievements", value: "150+", icon: Trophy, change: "+8 this year", color: "bg-emerald-50 text-emerald-700", href: "/admin/achievements" },
  { label: "Testimonials", value: "32", icon: MessageSquare, change: "4 pending review", color: "bg-violet-50 text-violet-700", href: "/admin/testimonials" },
];

const recentAdmissions = [
  { name: "Kavitha S.", standard: "Class 10", board: "State Board", date: "Today", status: "pending" },
  { name: "Arjun M.", standard: "Class 8", board: "CBSE", date: "Yesterday", status: "contacted" },
  { name: "Priya R.", standard: "Class 12", board: "State Board", date: "2 days ago", status: "enrolled" },
  { name: "Rohit K.", standard: "Class 6", board: "CBSE", date: "3 days ago", status: "enrolled" },
  { name: "Meena V.", standard: "Class 11", board: "State Board", date: "4 days ago", status: "contacted" },
];

const statusColors: Record<string, string> = {
  pending: "bg-yellow-50 text-yellow-700 border-yellow-100",
  contacted: "bg-blue-50 text-blue-700 border-blue-100",
  enrolled: "bg-emerald-50 text-emerald-700 border-emerald-100",
  rejected: "bg-red-50 text-red-700 border-red-100",
};

export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-montserrat font-bold text-2xl text-gray-900 mb-1">
          Dashboard
        </h1>
        <p className="text-gray-500 text-sm">
          Welcome back! Here's an overview of Siddhiksha Education Care.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {stats.map(({ label, value, icon: Icon, change, color, href }) => (
          <Link
            key={label}
            href={href}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
            </div>
            <p className="font-montserrat font-black text-3xl text-gray-900 mb-1">{value}</p>
            <p className="text-gray-700 text-sm font-medium mb-0.5">{label}</p>
            <p className="text-gray-400 text-xs">{change}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent admissions */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="font-montserrat font-semibold text-gray-900">
              Recent Admissions
            </h2>
            <Link
              href="/admin/admissions"
              className="text-sm text-royal-700 hover:text-royal-900 font-medium flex items-center gap-1"
            >
              View all <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentAdmissions.map((admission, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-royal-50 flex items-center justify-center text-royal-700 font-bold text-sm">
                    {admission.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{admission.name}</p>
                    <p className="text-gray-400 text-xs">
                      {admission.standard} · {admission.board}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-right">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border capitalize ${statusColors[admission.status]}`}>
                    {admission.status}
                  </span>
                  <span className="text-xs text-gray-400 hidden sm:block">{admission.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-montserrat font-semibold text-gray-900 mb-5">
            Quick Actions
          </h2>
          <div className="space-y-3">
            {[
              { label: "Add Faculty Member", href: "/admin/faculty", icon: Users, color: "bg-royal-50 text-royal-700 hover:bg-royal-100" },
              { label: "Add Achievement", href: "/admin/achievements", icon: Trophy, color: "bg-gold-50 text-gold-700 hover:bg-gold-100" },
              { label: "Add Testimonial", href: "/admin/testimonials", icon: MessageSquare, color: "bg-violet-50 text-violet-700 hover:bg-violet-100" },
              { label: "View Admissions", href: "/admin/admissions", icon: ClipboardList, color: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100" },
              { label: "Website Settings", href: "/admin/settings", icon: TrendingUp, color: "bg-gray-50 text-gray-700 hover:bg-gray-100" },
            ].map(({ label, href, icon: Icon, color }) => (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl ${color} transition-colors duration-200 group`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="text-sm font-medium">{label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
