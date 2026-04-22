import React from 'react';
import Link from 'next/link';

const VALUES = [
  {
    title: "Connection",
    description: "Building deep, meaningful relationships that span beyond retreats into lifelong spiritual friendships.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Empowerment",
    description: "Developing leadership skills and spiritual confidence to impact the world around us.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Community",
    description: "Creating a safe, vibrant space where everyone feels they belong and can contribute their unique gifts.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "bg-emerald-50 text-emerald-600"
  }
];

export function Values() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 text-center">Our Foundation</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6 italic">Built on authentic spiritual relationships.</h3>
          <p className="text-slate-600 text-lg">
            We believe that spiritual growth happens best in community. TSI is committed to three core pillars that guide everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((value) => (
            <div key={value.title} className="bg-white p-10 rounded-3xl premium-shadow border border-slate-100 hover:-translate-y-2 transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-8`}>
                {value.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary/5 rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between border border-primary/10">
          <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
            <h4 className="text-3xl font-serif font-bold text-slate-900 mb-4 italic">Ready to join the movement?</h4>
            <p className="text-slate-600">
              Our community is active across the globe. Find your local chapter and start your journey today.
            </p>
          </div>
          <Link 
            href="/join" 
            className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all premium-shadow whitespace-nowrap"
          >
            Find a Community
          </Link>
        </div>
      </div>
    </section>
  );
}
