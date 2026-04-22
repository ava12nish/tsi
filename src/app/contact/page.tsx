import React from 'react';

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic">Get in <span className="text-primary italic">Touch</span>.</h1>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl">
              Have questions about an upcoming retreat? Interested in collaborating? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 italic">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                   <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 shrink-0">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                     <p className="text-slate-500">info@sangainitiative.org</p>
                   </div>
                </div>
                <div className="flex items-start space-x-6">
                   <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 shrink-0">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 mb-1">Our Chapters</h4>
                     <p className="text-slate-500">New York • Pennsylvania • Florida • California • Texas</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] premium-shadow border border-slate-100 italic">
               <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8 italic">Send a Message</h3>
               <form className="space-y-6">
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase ml-1">Name</label>
                   <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email</label>
                   <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase ml-1">Message</label>
                   <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20" />
                 </div>
                 <button className="w-full bg-slate-900 text-white py-5 rounded-full font-bold text-lg hover:bg-slate-800 transition-all">Send Message</button>
               </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
