import { DataService } from "@/services/data.service";
import Link from "next/link";
import Image from "next/image";

export default async function BulletinPage() {
  const posts = await DataService.getPosts();
  const pinnedPost = posts.find(p => p.isPinned);

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 italic">The <span className="text-accent underline decoration-accent/30 underline-offset-8">Bulletin</span>.</h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Stay up to date with the latest stories, reflections, and community announcements from The Sanga Initiative.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Feed */}
            <div className="lg:col-span-8 space-y-20">
              {posts.map((post) => (
                <article key={post.id} className="group">
                  <Link href={`/bulletin/${post.slug}`} className="block overflow-hidden rounded-[2.5rem] mb-8 premium-shadow relative aspect-[16/9]">
                    <Image 
                      src={post.coverImage} 
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {post.isPinned && (
                      <div className="absolute top-6 left-6">
                        <span className="bg-accent text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">Pinned</span>
                      </div>
                    )}
                  </Link>
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">{post.category}</span>
                      <span className="w-1 h-1 bg-slate-200 rounded-full" />
                      <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    <Link href={`/bulletin/${post.slug}`}>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 italic group-hover:text-accent transition-colors leading-tight">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link href={`/bulletin/${post.slug}`} className="inline-flex items-center text-slate-900 font-bold border-b-2 border-slate-900 hover:text-accent hover:border-accent transition-all pb-1 group/link">
                      Read more
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                
                {/* Search / Categories */}
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Browse by Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Stories', 'Updates', 'Reflections', 'Resources', 'Community'].map((cat) => (
                      <button key={cat} className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:border-accent hover:text-accent transition-colors">
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter Card */}
                <div className="bg-slate-900 p-8 md:p-10 rounded-[3rem] text-white">
                  <h3 className="text-2xl font-serif font-bold italic mb-4">Direct to your inbox.</h3>
                  <p className="text-white/50 text-sm mb-8 leading-relaxed">
                    Join 2,000+ others who get our weekly reflections and community updates.
                  </p>
                  <form className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 text-white placeholder:text-white/30"
                    />
                    <button className="w-full bg-accent text-white py-4 rounded-xl font-bold text-sm hover:bg-accent/90 transition-all">
                      Subscribe now
                    </button>
                  </form>
                </div>
                
                {/* Instagram feed simulation */}
                <div>
                   <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Follow @sangainitiative</h3>
                   <div className="grid grid-cols-3 gap-3">
                     {[1,2,3,4,5,6].map(i => (
                       <div key={i} className="aspect-square bg-slate-100 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
                         <Image src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=300&q=80`} alt="Social" width={100} height={100} className="object-cover" />
                       </div>
                     ))}
                   </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
