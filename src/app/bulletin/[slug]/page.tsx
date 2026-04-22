import { DataService } from "@/services/data.service";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await DataService.getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-24 min-h-screen">
      {/* Article Header */}
      <header className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/bulletin" 
              className="inline-flex items-center text-slate-400 hover:text-accent mb-8 text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              The Bulletin
            </Link>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">{post.category}</span>
              <span className="w-1 h-1 bg-slate-200 rounded-full" />
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-slate-900 mb-10 italic leading-[1.1]">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden relative">
                <Image src={`https://i.pravatar.cc/100?u=${post.author}`} alt={post.author} fill />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-900">{post.author}</p>
                <p className="text-xs text-slate-400">Contributor</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container mx-auto px-4 md:px-6 -mt-12 mb-20">
        <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden premium-shadow">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg md:prose-xl prose-slate max-w-none">
            <p className="lead text-2xl text-slate-500 font-serif italic mb-12 border-l-4 border-accent pl-8 py-2">
              {post.excerpt}
            </p>
            <div className="text-slate-700 leading-relaxed space-y-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
              <h3 className="font-serif italic font-bold text-3xl mt-12 mb-6">A New Perspective</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <blockquote className="bg-slate-50 p-8 rounded-3xl border-l-4 border-primary text-slate-900 font-serif italic text-2xl my-12">
                "The strength of the community lies not in the number of people, but in the depth of their connections."
              </blockquote>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <div className="grid grid-cols-2 gap-6 my-12">
                 <div className="relative aspect-square rounded-3xl overflow-hidden">
                   <Image src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=800&q=80" alt="Detail" fill className="object-cover" />
                 </div>
                 <div className="relative aspect-square rounded-3xl overflow-hidden">
                   <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f951?auto=format&fit=crop&w=800&q=80" alt="Detail" fill className="object-cover" />
                 </div>
              </div>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>

            {/* Footer / Tags */}
            <footer className="mt-20 pt-10 border-t border-slate-100">
               <div className="flex flex-wrap gap-2">
                 {post.tags.map(tag => (
                   <span key={tag} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-md">
                     #{tag}
                   </span>
                 ))}
               </div>
            </footer>
          </div>
        </div>
      </div>
    </article>
  );
}
