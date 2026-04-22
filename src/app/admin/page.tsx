import React from 'react';

export default function AdminPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Overview</h1>
        <p className="text-slate-500">Welcome back. Here's what's happening with TSI today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Active Retreats", value: "3", change: "+1", color: "text-blue-600" },
          { label: "New Registrations", value: "24", change: "+12%", color: "text-emerald-600" },
          { label: "Merch Sales", value: "$1,240", change: "+8%", color: "text-amber-600" },
          { label: "Community Inquiries", value: "18", change: "5 new", color: "text-purple-600" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl premium-shadow border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{stat.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              <span className={`text-xs font-bold ${stat.color} bg-slate-50 px-2 py-1 rounded-lg`}>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Registrations Table */}
        <div className="lg:col-span-8 bg-white rounded-[2.5rem] premium-shadow border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-slate-900">Recent Registrations</h3>
            <button className="text-primary text-sm font-bold hover:underline">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50">
                  <th className="px-8 py-4">Attendee</th>
                  <th className="px-8 py-4">Retreat</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { name: "Alex Johnson", email: "alex@example.com", retreat: "Northeast Summer", status: "Confirmed", amount: "$150" },
                  { name: "Sarah Miller", email: "sarah@gmail.com", retreat: "Winter Sangam", status: "Pending", amount: "$120" },
                  { name: "Michael Chen", email: "mchen@corp.com", retreat: "Northeast Summer", status: "Confirmed", amount: "$150" },
                  { name: "Priya Sharma", email: "psharma@edu.in", retreat: "Youth Workshop", status: "Cancelled", amount: "$0" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5">
                      <p className="text-sm font-bold text-slate-900">{row.name}</p>
                      <p className="text-xs text-slate-400">{row.email}</p>
                    </td>
                    <td className="px-8 py-5 text-sm text-slate-600">{row.retreat}</td>
                    <td className="px-8 py-5">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-widest ${
                        row.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600' :
                        row.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-sm font-bold text-slate-900">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Alerts */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white premium-shadow">
            <h3 className="font-bold mb-6">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-xl py-3 px-4 text-sm font-bold text-left flex items-center justify-between transition-all">
                <span>Add New Retreat</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-xl py-3 px-4 text-sm font-bold text-left flex items-center justify-between transition-all">
                <span>Create Bulletin Post</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-xl py-3 px-4 text-sm font-bold text-left flex items-center justify-between transition-all">
                <span>Export Attendee List</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 premium-shadow">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center">
               <span className="w-2 h-2 bg-rose-500 rounded-full mr-3" />
               Critical Alerts
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 shrink-0 uppercase font-bold text-[10px]">Stock</div>
                <div>
                   <p className="text-sm font-bold text-slate-900">Low Inventory: Classic Hoodie</p>
                   <p className="text-xs text-slate-400">Only 3 units remaining in Medium.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0 uppercase font-bold text-[10px]">Cap</div>
                <div>
                   <p className="text-sm font-bold text-slate-900">Summer Retreat closing soon</p>
                   <p className="text-xs text-slate-400">95% capacity reached.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
