"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const INTEREST_AREAS = [
  "Volunteer Team",
  "Mentorship Program",
  "Regional Chapter",
  "Retreat Facilitation",
  "Content & Media",
  "Admin Support"
];

export default function JoinPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  
  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest) 
        : [...prev, interest]
    );
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 italic">Find your <span className="text-primary italic underline decoration-primary/30 underline-offset-8">Place</span>.</h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl font-serif italic">
              "Community is where we are known, challenged, and empowered to grow."
            </p>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left: Branding & Info */}
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">The Initiative</h2>
              <h3 className="text-4xl font-serif font-bold text-slate-900 mb-8 italic">More than a movement, <br />it's a home.</h3>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                TSI exists because of people like you. Whether you want to give back, find a mentor, or simply be part of a local chapter, there's a space for you to thrive.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                   <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
                     <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                     </svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 text-xl mb-2">Regional Chapters</h4>
                     <p className="text-slate-500 text-sm italic">Join a local community near you for regular meetups and sanga.</p>
                   </div>
                </div>
                <div className="flex items-start space-x-6">
                   <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                     <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                     </svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 text-xl mb-2">Volunteer Opportunities</h4>
                     <p className="text-slate-500 text-sm italic">Use your skills to help organize retreats, manage media, or lead projects.</p>
                   </div>
                </div>
                <div className="flex items-start space-x-6">
                   <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                     <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                     </svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 text-xl mb-2">Mentorship</h4>
                     <p className="text-slate-500 text-sm italic">Get paired with a mentor to guide your spiritual and personal development.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="bg-white p-8 md:p-12 rounded-[3.5rem] premium-shadow border border-slate-100">
               <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 italic">Interest Application</h3>
               <p className="text-slate-500 mb-10 text-sm">Tell us a bit about yourself and how you'd like to get involved.</p>
               
               <form className="space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-500 uppercase ml-1">Full Name</label>
                     <input type="text" placeholder="Your Name" className="w-full px-5 py-4 border border-slate-100 bg-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
                     <input type="email" placeholder="email@example.com" className="w-full px-5 py-4 border border-slate-100 bg-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white" />
                   </div>
                 </div>

                 <div className="space-y-4">
                   <label className="text-xs font-bold text-slate-500 uppercase ml-1">What are you interested in?</label>
                   <div className="grid grid-cols-2 gap-3">
                     {INTEREST_AREAS.map(area => (
                       <button
                         key={area}
                         type="button"
                         onClick={() => toggleInterest(area)}
                         className={`px-4 py-3 rounded-xl text-xs font-bold transition-all border-2 ${
                           selectedInterests.includes(area)
                           ? "border-primary bg-primary/5 text-primary"
                           : "border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200"
                         }`}
                       >
                         {area}
                       </button>
                     ))}
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase ml-1">Tell us more</label>
                   <textarea rows={4} placeholder="Tell us about your background, location, or particular interests..." className="w-full px-5 py-4 border border-slate-100 bg-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white" />
                 </div>

                 <button className="w-full bg-slate-900 text-white py-5 rounded-full font-bold text-lg hover:bg-slate-800 transition-all premium-shadow">
                   Send Application
                 </button>
               </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
