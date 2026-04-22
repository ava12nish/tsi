import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-primary font-serif">TSI</span>
              <span className="font-semibold text-slate-800">The Sanga Initiative</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              A youth-powered organization focused on connecting youth, empowering leadership, and building community through retreats, resources, and spiritual relationships.
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholders */}
              <a href="#" className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span className="sr-only">Instagram</span>
                <i className="text-slate-600 text-xs">IG</i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span className="sr-only">Facebook</span>
                <i className="text-slate-600 text-xs">FB</i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span className="sr-only">YouTube</span>
                <i className="text-slate-600 text-xs">YT</i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Community</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="text-slate-600 hover:text-primary transition-colors">Our Mission</Link></li>
              <li><Link href="/retreats" className="text-slate-600 hover:text-primary transition-colors">Retreats</Link></li>
              <li><Link href="/join" className="text-slate-600 hover:text-primary transition-colors">Join Us</Link></li>
              <li><Link href="/bulletin" className="text-slate-600 hover:text-primary transition-colors">Bulletin</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/merch" className="text-slate-600 hover:text-primary transition-colors">Shop Merch</Link></li>
              <li><Link href="/resources" className="text-slate-600 hover:text-primary transition-colors">Materials</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/donate" className="text-slate-600 hover:text-primary transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-white p-6 rounded-2xl premium-shadow border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Stay Connected</h4>
            <p className="text-slate-500 text-xs mb-4">Get updates on retreats and community news.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <button className="w-full bg-slate-900 text-white py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© 2024 The Sanga Initiative. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
