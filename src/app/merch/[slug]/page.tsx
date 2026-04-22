import { DataService } from "@/services/data.service";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
// We'll handle client-side cart logic in a separate component since this is a Server Component
import { ProductActions } from "@/components/merch/ProductActions";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await DataService.getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-slate-100 premium-shadow">
              <Image 
                src={product.images[0]} 
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 cursor-pointer border-2 border-transparent hover:border-primary transition-all">
                  <Image src={img} alt={`${product.name} ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col py-4">
            <nav className="mb-8">
              <ol className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                <li><Link href="/merch" className="hover:text-primary transition-colors">Store</Link></li>
                <li className="mx-2">/</li>
                <li className="text-slate-900">{product.category}</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 italic leading-tight">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-primary mb-8">${product.price}</p>
            
            <div className="prose prose-slate prose-sm mb-10 max-w-none">
              <p className="text-slate-600 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Client Component for Interactions */}
            <ProductActions product={product} />

            <div className="mt-12 pt-12 border-t border-slate-100 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Free Shipping</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">On orders over $75</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Easy Returns</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">30-day exchange window</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
