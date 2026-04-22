import React from 'react';

export default function AdminMerchPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2 italic font-serif">Merch & Inventory</h1>
          <p className="text-slate-500">Manage products, monitor stock levels, and fulfill orders.</p>
        </div>
        <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all premium-shadow flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          New Product
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] premium-shadow border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-slate-900">Current Catalog</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50">
                  <th className="px-8 py-4">Product</th>
                  <th className="px-8 py-4">Price</th>
                  <th className="px-8 py-4">Inventory</th>
                  <th className="px-8 py-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { name: "Classic TSI Hoodie", category: "Apparel", price: "$45.00", stock: 45, status: "Active" },
                  { name: "Sanga Tote Bag", category: "Accessories", price: "$18.00", stock: 12, status: "Low Stock" },
                  { name: "Reflections Journal", category: "Print", price: "$22.00", stock: 0, status: "Out of Stock" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-6">
                      <p className="text-sm font-bold text-slate-900 mb-1">{row.name}</p>
                      <p className="text-xs text-slate-400">{row.category}</p>
                    </td>
                    <td className="px-8 py-6 text-sm font-medium text-slate-600">{row.price}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-bold ${row.stock === 0 ? 'text-rose-500' : row.stock < 15 ? 'text-amber-500' : 'text-slate-900'}`}>
                          {row.stock} units
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
                        row.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 
                        row.status === 'Low Stock' ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'bg-rose-50 text-rose-600 border border-rose-200'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 italic">
          <h3 className="font-bold text-slate-900 mb-6">Order Fulfillments</h3>
          <div className="space-y-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-5 rounded-2xl premium-shadow border border-slate-100">
                <div className="flex justify-between items-start mb-2">
                   <p className="text-sm font-bold text-slate-900">Order #120{i}</p>
                   <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-md uppercase font-bold tracking-widest">New</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">2 items • $65.00 • 2 hours ago</p>
                <div className="flex space-x-2">
                   <button className="flex-grow bg-slate-900 text-white text-xs font-bold py-2 rounded-lg hover:bg-slate-800 transition-colors">Mark Shipped</button>
                   <button className="w-10 h-10 border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 text-primary font-bold text-sm hover:underline">View all orders</button>
        </div>
      </div>
    </div>
  );
}
