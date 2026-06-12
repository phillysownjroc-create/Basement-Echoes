import { Link } from "wouter";
import jrocLogo from "@assets/file_000000000f64722f9e6a1633aa6ec376_1781256065092.png";

export default function About() {
  return (
    <div className="min-h-screen p-6 md:p-12 max-w-5xl mx-auto pt-24">
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="text-muted-foreground hover:text-white uppercase tracking-widest text-sm transition-colors border border-border px-4 py-2">&lt; Main Menu</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="border border-border bg-black relative overflow-hidden p-6 flex items-center justify-center">
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-primary text-[10px] tracking-widest uppercase">REC</span>
          </div>
          <img
            src={jrocLogo}
            alt="J-Roc Logo"
            data-testid="img-jroc-logo"
            className="w-full max-w-xs object-contain"
          />
        </div>

        <div className="space-y-8">
          <header>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white uppercase tracking-tighter mb-2">J-Roc</h1>
            <h2 className="text-primary uppercase tracking-widest text-sm">Phillys Own</h2>
          </header>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Independent songwriter, producer, and creative director creating immersive concept albums, interactive music experiences, and AI-assisted vocal productions.
            </p>
            <p>
              Basement Echoes represents a collision of narrative storytelling and modern production techniques. It asks the listener to become an active participant in unraveling a mystery, rather than a passive consumer of audio.
            </p>
          </div>

          <div className="pt-8 border-t border-border">
            <h3 className="text-white font-sans text-xl uppercase tracking-wider mb-4 font-bold">Focus Areas</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-4 text-sm text-muted-foreground uppercase tracking-widest">
                <span className="text-primary">01</span> Concept Album Production
              </li>
              <li className="flex items-center gap-4 text-sm text-muted-foreground uppercase tracking-widest">
                <span className="text-primary">02</span> AI-Vocal Integration
              </li>
              <li className="flex items-center gap-4 text-sm text-muted-foreground uppercase tracking-widest">
                <span className="text-primary">03</span> Interactive Audio Experiences
              </li>
              <li className="flex items-center gap-4 text-sm text-muted-foreground uppercase tracking-widest">
                <span className="text-primary">04</span> Narrative Sound Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
