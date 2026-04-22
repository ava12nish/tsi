import { DataService } from "@/services/data.service";
import Link from "next/link";
import Image from "next/image";

export default async function MerchPage() {
  const products = await DataService.getProducts();

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic">Support the <span className="text-primary">Initiative</span>.</h1>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl">
              Our official collection features premium, sustainably sourced apparel and accessories. Every purchase directly supports our youth scholarships.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
             <div className="flex items-center space-x-2">
              {['All Items', 'Apparel', 'Accessories', 'Prints'].map((cat, i) => (
                <button 
                  key={cat} 
                  className={`px-6 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap ${
                    i === 0 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="text-sm font-medium text-slate-500">
              {products.length} Products
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <Link key={product.id} href={`/merch/${product.slug}`} className="group">
                <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-slate-100 mb-6 premium-shadow">
                  <Image 
                    src={product.images[0]} 
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white text-slate-900 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-1">{product.name}</h3>
                  <p className="text-slate-500 font-medium">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
