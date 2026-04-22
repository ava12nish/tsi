import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Next Retreat: July 2024</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
              Experience the <span className="text-primary italic">Power</span> of Sanga.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Connecting youth, empowering leadership, and building vibrant communities through spiritual relationships and transformative experiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/retreats"
                className="bg-primary text-white px-8 py-4 rounded-full text-center font-bold text-lg hover:bg-primary/90 transition-all premium-shadow group"
              >
                Explore Retreats
                <svg className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-center font-bold text-lg hover:bg-slate-50 transition-all"
              >
                Our Mission
              </Link>
            </div>
            
            <div className="mt-12 flex items-center space-x-6 text-sm text-slate-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 relative overflow-hidden">
                    <Image 
                      src={`https://i.pravatar.cc/100?img=${i + 20}`} 
                      alt="User avatar" 
                      width={40} 
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p><span className="font-bold text-slate-900">500+</span> project alumni</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden premium-shadow transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120"
                alt="Community Retreat"
                width={800}
                height={600}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-bottom p-8">
                <div className="mt-auto">
                  <p className="text-white/80 text-sm font-medium mb-1">Upcoming Sanctuary</p>
                  <h3 className="text-white text-2xl font-bold">Gita Nagari Spring Gathering</h3>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-2xl -z-0 rotate-12" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full -z-0" />
            
            <div className="absolute -right-8 bottom-12 bg-white p-4 rounded-2xl premium-shadow border border-slate-100 z-20 hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Community Strength</p>
                  <p className="text-sm font-bold text-slate-900">12 Regional Chapters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
