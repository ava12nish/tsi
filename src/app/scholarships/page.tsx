import React from 'react';

export default function ScholarshipsPage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold text-slate-900 mb-8 italic">Scholarships</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We believe that financial constraints should never stand in the way of spiritual growth. TSI offers partial and full scholarships for all our retreats.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto bg-white p-12 rounded-[3.5rem] premium-shadow border border-slate-100">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 italic text-center">Apply for Support</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Full Name</label>
                <input type="text" className="w-full px-5 py-4 border border-slate-100 bg-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email</label>
                <input type="email" className="w-full px-5 py-4 border border-slate-100 bg-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Why do you want to attend?</label>
                <textarea rows={4} className="w-full px-5 py-4 border border-slate-100 bg-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
