import { DataService } from "@/services/data.service";
import Link from "next/link";
import Image from "next/image";

export default async function RetreatsPage() {
  const retreats = await DataService.getRetreats();

  return (
    <div className="pt-24 min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 italic">
              Find your <span className="text-primary">Sanctuary</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              From the quiet of the mountains to the energy of the city, our retreats provide the space you need to reconnect with yourself and your community.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters Placeholder */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
              {['All Retreats', 'Regional', 'National', 'International', 'Workshops'].map((filter, i) => (
                <button 
                  key={filter} 
                  className={`px-6 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap ${
                    i === 0 ? "bg-slate-900 text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-primary/50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="text-sm text-slate-500 font-medium">
              Showing {retreats.length} upcoming retreats
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retreats.map((retreat) => (
              <Link 
                key={retreat.id} 
                href={`/retreats/${retreat.slug}`}
                className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden premium-shadow border border-slate-100 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src={retreat.mainImage} 
                    alt={retreat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-wider">
                      {retreat.category}
                    </span>
                  </div>
                  {retreat.status === 'sold-out' && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                      <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest">Sold Out</span>
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs font-bold text-primary uppercase tracking-widest mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(retreat.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(retreat.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                    {retreat.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-8 line-clamp-2">
                    {retreat.subtitle || retreat.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                    <div className="flex items-center text-slate-500 text-sm font-medium">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {retreat.location.city}, {retreat.location.state}
                    </div>
                    <span className="text-slate-900 font-bold">
                      from ${Math.min(...retreat.tickets.map(t => t.price))}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
