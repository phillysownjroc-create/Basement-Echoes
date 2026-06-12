import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen p-6 md:p-12 max-w-5xl mx-auto pt-24">
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="text-muted-foreground hover:text-white uppercase tracking-widest text-sm transition-colors border border-border px-4 py-2">&lt; Main Menu</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="border border-border bg-black relative overflow-hidden flex items-center justify-center min-h-64">
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-primary text-[10px] tracking-widest uppercase">REC</span>
          </div>
          <div className="absolute inset-0 vhs-noise opacity-20 mix-blend-overlay"></div>
          <div className="text-center p-8">
            <div className="text-6xl md:text-8xl font-sans font-bold text-white tracking-tighter mb-4 flicker">?</div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Identity Redacted</p>
          </div>
          <div className="absolute inset-0 border border-primary/10 pointer-events-none"></div>
        </div>

        <div className="space-y-8">
          <header>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white uppercase tracking-tighter mb-2">Unknown</h1>
            <h2 className="text-primary uppercase tracking-widest text-sm">Author Unidentified</h2>
          </header>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              No verified identity has been established for the creator of Basement Echoes. The recordings surfaced without attribution. The tapes were found. The rooms were already open.
            </p>
            <p>
              Whoever built this did not want to be found. The album speaks. The author does not.
            </p>
          </div>

          <div className="pt-8 border-t border-border">
            <h3 className="text-white font-sans text-xl uppercase tracking-wider mb-4 font-bold">What We Know</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-4 text-sm text-muted-foreground uppercase tracking-widest">
                <span className="text-primary">01</span> 12 Rooms. 12 Recordings.
              </li>
              <li className="flex items-center gap-4 text-sm text-muted-foreground uppercase tracking-widest">
                <span className="text-primary">02</span> AI-Generated Voices
              </li>
              <li className="flex items-center gap-4 text-sm text-muted-foreground uppercase tracking-widest">
                <span className="text-primary">03</span> Released Without Warning
              </li>
              <li className="flex items-center gap-4 text-sm text-muted-foreground uppercase tracking-widest">
                <span className="text-primary">04</span> No One Has Come Forward
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
