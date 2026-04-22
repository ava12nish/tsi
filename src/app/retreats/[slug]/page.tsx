import { DataService } from "@/services/data.service";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function RetreatDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const retreat = await DataService.getRetreatBySlug(slug);

  if (!retreat) {
    notFound();
  }

  const minPrice = Math.min(...retreat.tickets.map(t => t.price));

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image 
          src={retreat.mainImage} 
          alt={retreat.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <Link 
                href="/retreats" 
                className="inline-flex items-center text-white/80 hover:text-white mb-8 text-sm font-bold uppercase tracking-widest transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Retreats
              </Link>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                {retreat.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center font-medium">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(retreat.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - {new Date(retreat.endDate).toLocaleDateString('en-US', { day: 'numeric', year: 'numeric' })}
                </div>
                <div className="flex items-center font-medium">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {retreat.location.name}, {retreat.location.city}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none prose-slate">
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 italic">About this Retreat</h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  {retreat.longDescription}
                </p>
                
                <hr className="my-12 border-slate-100" />
                
                <h3 className="text-2xl font-bold text-slate-900 mb-6">What's Included</h3>
                <p className="text-slate-600 mb-10 leading-relaxed">
                  {retreat.accommodations}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-10">
                  <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      What to Bring
                    </h4>
                    <ul className="space-y-3">
                      {retreat.whatToBring.map((item, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Policies
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {retreat.policies}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Sidebar - Pricing & CTAs */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white p-8 md:p-10 rounded-[3rem] premium-shadow border border-slate-100 italic">
                  <div className="mb-8">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Passes from</p>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl font-bold text-slate-900">${minPrice}</span>
                      <span className="text-slate-500 font-medium">/ person</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-10">
                    {retreat.tickets.map((ticket) => (
                      <div key={ticket.id} className="p-4 rounded-2xl border border-slate-100 bg-slate-50">
                        <div className="flex justify-between items-center mb-1">
                          <h5 className="font-bold text-slate-900">{ticket.name}</h5>
                          <span className="font-bold text-primary">${ticket.price}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1">{ticket.description}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {ticket.capacity - ticket.sold} slots left
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {retreat.status === 'upcoming' ? (
                    <Link 
                      href={`/register/${retreat.slug}`}
                      className="block w-full bg-primary text-white py-5 rounded-full text-center font-bold text-lg hover:bg-primary/90 transition-all premium-shadow"
                    >
                      Register Now
                    </Link>
                  ) : (
                    <button 
                      disabled
                      className="block w-full bg-slate-200 text-slate-500 py-5 rounded-full text-center font-bold text-lg cursor-not-allowed"
                    >
                      {retreat.status === 'sold-out' ? 'Sold Out' : 'Registration Closed'}
                    </button>
                  )}
                  
                  <p className="text-center text-xs text-slate-400 mt-6 font-medium">
                    Limited spots available. One-time payment via Stripe.
                  </p>
                </div>
                
                <div className="bg-slate-900 p-8 rounded-[3rem] text-white">
                  <h4 className="text-xl font-bold mb-4 italic">Need financial aid?</h4>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    TSI is committed to making our retreats accessible to everyone, regardless of financial circumstances.
                  </p>
                  <Link href="/scholarships" className="text-primary font-bold text-sm border-b border-primary/30 hover:border-primary pb-1 transition-all">
                    Apply for a scholarship
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
