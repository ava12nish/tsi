import Link from "next/link";
import Image from "next/image";
import { DataService } from "@/services/data.service";

export async function FeaturedRetreats() {
  const retreats = await DataService.getFeaturedRetreats();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Upcoming Gatherings</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">
              Transformative retreats designed for <span className="italic">growth</span>.
            </h3>
          </div>
          <Link 
            href="/retreats" 
            className="mt-6 md:mt-0 text-slate-900 font-bold border-b-2 border-primary hover:text-primary transition-colors pb-1"
          >
            Browse all retreats
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {retreats.map((retreat) => (
            <Link 
              key={retreat.id} 
              href={`/retreats/${retreat.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-slate-100 aspect-[16/9] md:aspect-[21/9]"
            >
              <Image
                src={retreat.mainImage}
                alt={retreat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full flex flex-col md:flex-row md:items-end md:justify-between space-y-4 md:space-y-0">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                      {retreat.category}
                    </span>
                    <span className="text-white/80 text-xs font-medium uppercase tracking-widest">
                      {new Date(retreat.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {retreat.title}
                  </h4>
                  <p className="text-white/70 text-sm mt-3 line-clamp-1 max-w-md">
                    {retreat.subtitle}
                  </p>
                </div>
                
                <div className="hidden sm:block">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-slate-900 transition-colors">
                    View Details
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
