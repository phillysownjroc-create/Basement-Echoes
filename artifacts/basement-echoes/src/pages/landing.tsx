import { useLocation } from "wouter";
import { useState } from "react";

export default function Landing() {
  const [, setLocation] = useLocation();
  const [transitioning, setTransitioning] = useState(false);

  const handleEnter = () => {
    setTransitioning(true);
    setTimeout(() => {
      setLocation("/rooms");
    }, 800);
  };

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center p-6 transition-opacity duration-700 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center max-w-2xl z-10">
        <p className="text-muted-foreground tracking-widest text-xs mb-6 uppercase">A Free Album Release</p>

        <h1 className="text-6xl md:text-9xl font-sans font-bold text-white mb-4 uppercase tracking-tighter">
          Basement<br />Echoes
        </h1>

        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Author Unknown</p>
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-10">Performed by AI-Generated Voices</p>

        <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
          12 tracks. Written for anyone who has felt lost,<br />
          unheard, or alone in their own mind.
        </p>

        <button
          onClick={handleEnter}
          data-testid="btn-listen"
          className="px-10 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest font-bold text-lg"
        >
          Listen Free
        </button>
      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center text-xs text-muted-foreground uppercase tracking-widest space-y-1">
        <p>Every room holds a memory. Every echo hides the truth.</p>
        <p className="text-primary/60">Free. No account. No cost.</p>
      </div>
    </div>
  );
}
