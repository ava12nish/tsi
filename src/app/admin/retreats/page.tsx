import React from 'react';

export default function AdminRetreatsPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2 italic font-serif">Retreats Management</h1>
          <p className="text-slate-500">Create, edit, and monitor all upcoming TSI retreats.</p>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all premium-shadow flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Add New Retreat
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] premium-shadow border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-wrap gap-4 items-center justify-between">
           <div className="flex items-center space-x-4">
             <div className="relative">
               <input 
                type="text" 
                placeholder="Search retreats..." 
                className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-primary w-64"
               />
               <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
             </div>
             <select className="px-4 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none bg-white">
               <option>All Statuses</option>
               <option>Upcoming</option>
               <option>Sold Out</option>
               <option>Past</option>
             </select>
           </div>
           <div className="text-sm font-medium text-slate-500">
             3 Retreats found
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50">
                <th className="px-8 py-4">Retreat Information</th>
                <th className="px-8 py-4">Dates</th>
                <th className="px-8 py-4">Capacity</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { title: "Northeast Summer Retreat", location: "Port Royal, PA", date: "July 15-19, 2024", sold: 15, capacity: 150, status: "Upcoming", type: "Regional" },
                { title: "Winter Sangam 2024", location: "New York, NY", date: "Dec 10-13, 2024", sold: 80, capacity: 80, status: "Sold Out", type: "National" },
                { title: "Leadership Workshop", location: "Online", date: "June 2-4, 2024", sold: 45, capacity: 60, status: "Upcoming", type: "Workshop" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-slate-900 mb-1">{row.title}</p>
                    <p className="text-xs text-slate-400">{row.location} • {row.type}</p>
                  </td>
                  <td className="px-8 py-6 text-sm text-slate-600">{row.date}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-3 w-48">
                      <div className="flex-grow h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${row.sold >= row.capacity ? 'bg-amber-500' : 'bg-primary'}`} 
                          style={{ width: `${(row.sold/row.capacity) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-900">{row.sold}/{row.capacity}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
                      row.status === 'Upcoming' ? 'bg-primary/10 text-primary border border-primary/20' : 
                      'bg-amber-50 text-amber-600 border border-amber-200'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-all">
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></button>
                      <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
