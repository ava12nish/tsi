import Link from "next/link";
import Image from "next/image";
import { DataService } from "@/services/data.service";

export async function BulletinPreview() {
  const posts = await DataService.getPosts();
  const featuredPost = posts.find(p => p.isPinned) || posts[0];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">The Bulletin</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">
              News, reflections, and <span className="italic text-accent">community updates</span>.
            </h3>
          </div>
          <Link 
            href="/bulletin" 
            className="mt-6 md:mt-0 text-slate-900 font-bold border-b-2 border-accent hover:text-accent transition-colors pb-1"
          >
            Read the full bulletin
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Featured Post */}
          <Link 
            href={`/bulletin/${featuredPost.slug}`}
            className="lg:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-slate-900 aspect-[16/10] lg:aspect-auto"
          >
            <Image 
              src={featuredPost.coverImage} 
              alt={featuredPost.title}
              fill
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-accent px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                  Featured
                </span>
                <span className="text-white/60 text-xs font-medium uppercase tracking-widest">
                  {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <h4 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-2xl">
                {featuredPost.title}
              </h4>
              <p className="text-white/70 text-lg mb-0 line-clamp-2 max-w-xl">
                {featuredPost.excerpt}
              </p>
            </div>
          </Link>

          {/* Secondary Posts */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {posts.filter(p => !p.isPinned).slice(0, 3).map((post) => (
              <Link 
                key={post.id} 
                href={`/bulletin/${post.slug}`}
                className="group flex flex-col p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:premium-shadow transition-all duration-300"
              >
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-3">{post.category}</span>
                <h5 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h5>
                <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
