import { DataService } from "@/services/data.service";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ retreatSlug: string }>;
}

export default async function RegisterPage({ params }: PageProps) {
  const { retreatSlug } = await params;
  const retreat = await DataService.getRetreatBySlug(retreatSlug);

  if (!retreat) {
    notFound();
  }

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Side: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[3rem] premium-shadow border border-slate-100">
                <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2 italic">Register for Retreat</h1>
                <p className="text-slate-500 mb-10">Complete the form below to secure your spot.</p>
                
                <form className="space-y-8">
                  {/* Ticket Selection */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">1. Select Ticket Type</h3>
                    <div className="space-y-4">
                      {retreat.tickets.map((ticket) => (
                        <label 
                          key={ticket.id} 
                          className="relative flex items-center p-6 rounded-2xl border-2 border-slate-100 cursor-pointer hover:border-primary/50 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                        >
                          <input type="radio" name="ticketType" value={ticket.id} className="w-5 h-5 text-primary focus:ring-primary border-slate-300" defaultChecked={retreat.tickets[0].id === ticket.id} />
                          <div className="ml-6 flex-grow">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-bold text-slate-900">{ticket.name}</span>
                              <span className="font-bold text-primary">${ticket.price}</span>
                            </div>
                            <p className="text-xs text-slate-500">{ticket.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">2. Attendee Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">First Name</label>
                        <input type="text" placeholder="John" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Last Name</label>
                        <input type="text" placeholder="Doe" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" required />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
                        <input type="email" placeholder="john@example.com" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" required />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Special Requirements (Dietary, etc.)</label>
                        <textarea placeholder="Let us know any allergies or special needs..." rows={3} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6">
                    <button type="submit" className="w-full bg-primary text-white py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all premium-shadow">
                      Proceed to Secure Payment
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-6 leading-relaxed">
                      By proceeding, you agree to TSI's terms and cancellation policies. You will be redirected to Stripe for secure checkout.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Side: Summary Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-6">
                <div className="bg-slate-900 rounded-[3rem] overflow-hidden text-white premium-shadow">
                  <div className="relative h-48">
                    <Image src={retreat.mainImage} alt={retreat.title} fill className="object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  </div>
                  <div className="p-8 md:p-10 -mt-12 relative z-10">
                    <h2 className="text-2xl font-serif font-bold italic mb-6">{retreat.title}</h2>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start space-x-4">
                        <svg className="w-5 h-5 text-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Dates</p>
                          <p className="text-sm font-medium">
                            {new Date(retreat.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - {new Date(retreat.endDate).toLocaleDateString('en-US', { day: 'numeric', year: 'numeric' })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <svg className="w-5 h-5 text-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <div>
                          <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Location</p>
                          <p className="text-sm font-medium">{retreat.location.name}, {retreat.location.city}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 italic">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/60">Selected Ticket</span>
                        <span className="font-bold">Pending selection</span>
                      </div>
                      <div className="flex justify-between items-center text-xl font-bold">
                        <span>Total Due</span>
                        <span className="text-primary">$0.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex items-center space-x-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Secure Payment</h5>
                    <p className="text-xs text-slate-500 leading-relaxed italic">Your transaction is protected with 128-bit SSL encryption through Stripe.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
