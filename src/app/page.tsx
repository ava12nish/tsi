import { Hero } from "@/components/landing/Hero";
import { FeaturedRetreats } from "@/components/landing/FeaturedRetreats";
import { Values } from "@/components/landing/Values";
import { BulletinPreview } from "@/components/landing/BulletinPreview";
import Link from "next/link";
import Image from "next/image";
import { DataService } from "@/services/data.service";

export default async function Home() {
  const products = await DataService.getFeaturedProducts();

  return (
    <>
      <Hero />
      <FeaturedRetreats />
      <Values />

      {/* Featured Merch Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden premium-shadow bg-slate-100">
                {products[0] && (
                  <Image 
                    src={products[0].images[0]} 
                    alt={products[0].name}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/5" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full -z-0 blur-2xl" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Official Merch</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                Wear the mission. <br className="hidden md:block" />
                <span className="italic text-primary">Support the vision.</span>
              </h3>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Our classic collection is more than just apparel. Every purchase helps fund scholarships for our upcoming retreats, making spiritual education accessible to all.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 font-bold">01</div>
                  <p className="text-slate-700 font-medium font-serif italic text-xl">Premium sustainable materials</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 font-bold">02</div>
                  <p className="text-slate-700 font-medium font-serif italic text-xl">Proceeds fund youth retreats</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 font-bold">03</div>
                  <p className="text-slate-700 font-medium font-serif italic text-xl">Exclusive limited seasonal drops</p>
                </div>
              </div>
              <Link 
                href="/merch" 
                className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all premium-shadow"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BulletinPreview />

      {/* Final Join CTA */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 italic">Be part of the community.</h2>
            <p className="text-white/60 text-lg md:text-xl mb-12 leading-relaxed">
              TSI is more than an organization—it's a home for those seeking connection, depth, and purpose. Whether you're a student, a professional, or a seeker, there's a space for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/join"
                className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all premium-shadow"
              >
                Join the Initiative
              </Link>
              <Link
                href="/newsletter"
                className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Get Newsletter Updates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
