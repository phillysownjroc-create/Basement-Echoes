import { Link } from "wouter";
import { ROOMS } from "@/lib/data";
import albumCover from "@assets/file_00000000e55c71f5b5b6ea9a7b50afde_1781256092050.png";

export default function Album() {
  return (
    <div className="min-h-screen p-6 md:p-12 max-w-4xl mx-auto pt-24">
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="text-muted-foreground hover:text-white uppercase tracking-widest text-sm transition-colors border border-border px-4 py-2">&lt; Main Menu</Link>
      </div>

      <header className="mb-16 text-center border-b border-border pb-12">
        <h2 className="text-primary tracking-widest text-sm mb-4 uppercase">The Complete Archive</h2>
        <div className="mx-auto mb-8 w-48 md:w-64 relative">
          <img src={albumCover} alt="Basement Echoes Album Cover" data-testid="img-album-cover-album" className="w-full object-cover" />
          <div className="absolute inset-0 border border-primary/20 pointer-events-none"></div>
        </div>
        <h1 className="text-5xl md:text-8xl font-sans font-bold text-white uppercase tracking-tighter glitch mb-6">Basement Echoes</h1>
        <p className="text-muted-foreground uppercase tracking-widest max-w-xl mx-auto">
          Author Unknown<br/>
          Performed by AI-Generated Voices
        </p>
        
        <div className="inline-block border border-primary text-primary text-xs tracking-widest uppercase px-4 py-1 mt-6 mb-2 font-bold">
          Free Release — No Cost. No Strings. No Name.
        </div>
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <button data-testid="btn-free-download" className="border border-primary bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors px-6 py-3 uppercase tracking-widest text-sm font-bold">Free Download</button>
          <button data-testid="btn-share-x" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('BASEMENT ECHOES — author unknown. Every room holds a memory. Every echo hides the truth. ' + window.location.origin)}`,'_blank')} className="border border-border bg-card hover:bg-white hover:text-black transition-colors px-6 py-3 uppercase tracking-widest text-sm font-bold">Share on X</button>
          <button data-testid="btn-share-ig" onClick={() => window.open('https://www.instagram.com/Phillysownjroc','_blank')} className="border border-border bg-card hover:bg-white hover:text-black transition-colors px-6 py-3 uppercase tracking-widest text-sm font-bold">Instagram</button>
        </div>
      </header>

      <div className="space-y-2">
        <div className="flex text-muted-foreground text-xs uppercase tracking-widest pb-2 border-b border-border px-4">
          <div className="w-12">Trk</div>
          <div className="flex-1">Title</div>
          <div className="w-24 text-right">Time</div>
        </div>
        
        {ROOMS.map((room) => (
          <Link key={room.id} href={`/room/${room.id}`} className="flex items-center text-white p-4 hover:bg-card border border-transparent hover:border-border transition-colors group">
            <div className="w-12 text-muted-foreground group-hover:text-primary transition-colors">{room.id.toString().padStart(2, '0')}</div>
            <div className="flex-1 font-sans text-xl md:text-2xl font-bold uppercase tracking-wider group-hover:text-primary transition-colors">{room.title}</div>
            <div className="w-24 text-right text-muted-foreground">{room.duration}</div>
          </Link>
        ))}
      </div>

      <footer className="mt-24 text-center text-xs text-muted-foreground uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Phillys Own J-Roc. All rights reserved.</p>
      </footer>
    </div>
  );
}
