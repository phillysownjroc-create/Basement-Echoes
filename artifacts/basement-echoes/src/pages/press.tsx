import { Link } from "wouter";

export default function Press() {
  return (
    <div className="min-h-screen p-6 md:p-12 max-w-4xl mx-auto pt-24">
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="text-muted-foreground hover:text-white uppercase tracking-widest text-sm transition-colors border border-border px-4 py-2">&lt; Main Menu</Link>
      </div>

      <header className="mb-16 border-b border-border pb-12">
        <h1 className="text-5xl md:text-8xl font-sans font-bold text-white uppercase tracking-tighter mb-4">Press Kit</h1>
        <p className="text-muted-foreground uppercase tracking-widest">Official Assets & Information</p>
      </header>

      <div className="space-y-16">
        <section>
          <h2 className="text-primary font-sans text-2xl uppercase tracking-wider mb-6 font-bold border-l-4 border-primary pl-4">About the Project</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            "Basement Echoes" is a psychological thriller concept album by an unknown author. The project blends narrative sound design with AI vocal generation to create an unsettling, immersive experience. No identity has been verified.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Presented not as a standard album stream but as a digital investigation — listeners navigate an abandoned basement's security feeds to uncover the truth hidden within 12 tracks. The tapes were found. The rooms were already open.
          </p>
        </section>

        <section>
          <h2 className="text-primary font-sans text-2xl uppercase tracking-wider mb-6 font-bold border-l-4 border-primary pl-4">Downloadable Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="border border-border bg-card p-6 hover:border-white transition-colors group flex items-center justify-between">
              <div>
                <h3 className="text-white font-sans text-xl uppercase font-bold mb-1">Hi-Res Cover Art</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">JPG / 4.2 MB</p>
              </div>
              <span className="text-primary group-hover:translate-y-1 transition-transform">↓</span>
            </a>
            <a href="#" className="border border-border bg-card p-6 hover:border-white transition-colors group flex items-center justify-between">
              <div>
                <h3 className="text-white font-sans text-xl uppercase font-bold mb-1">Press Photos</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">ZIP / 18.5 MB</p>
              </div>
              <span className="text-primary group-hover:translate-y-1 transition-transform">↓</span>
            </a>
            <a href="#" className="border border-border bg-card p-6 hover:border-white transition-colors group flex items-center justify-between">
              <div>
                <h3 className="text-white font-sans text-xl uppercase font-bold mb-1">Official Bio</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">PDF / 1.1 MB</p>
              </div>
              <span className="text-primary group-hover:translate-y-1 transition-transform">↓</span>
            </a>
          </div>
        </section>

        <section className="bg-secondary/10 border border-secondary p-8">
          <h2 className="text-secondary-foreground font-sans text-2xl uppercase tracking-wider mb-6 font-bold">Contact</h2>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Press Inquiries</p>
              <p className="text-white text-lg tracking-widest uppercase">Contact Via Social</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Social</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/Phillysownjroc" target="_blank" rel="noopener noreferrer" data-testid="link-press-ig" className="text-white hover:text-primary transition-colors uppercase tracking-widest text-sm">Instagram</a>
                <a href="https://x.com/Phillysownjroc" target="_blank" rel="noopener noreferrer" data-testid="link-press-x" className="text-white hover:text-primary transition-colors uppercase tracking-widest text-sm">X / Twitter</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
