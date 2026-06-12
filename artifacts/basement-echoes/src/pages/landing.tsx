import { Link, useLocation } from "wouter";
import { useState } from "react";

export default function Landing() {
  const [, setLocation] = useLocation();
  const [transitioning, setTransitioning] = useState(false);

  const handleEnter = () => {
    setTransitioning(true);
    setTimeout(() => {
      setLocation("/rooms");
    }, 1500);
  };

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center p-6 ${transitioning ? 'glitch opacity-0 transition-opacity duration-1000' : ''}`}>
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
        <span className="text-primary text-sm tracking-widest uppercase">REC</span>
      </div>

      <div className="text-center max-w-4xl z-10">
        <h2 className="text-muted-foreground tracking-widest text-sm mb-4">Written and Produced by Phillys Own J-Mac / Performed by AI-Generated Voices</h2>
        <h1 className="text-6xl md:text-9xl font-sans font-bold text-white mb-6 uppercase tracking-tighter glitch flicker">
          Basement<br/>Echoes
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 uppercase tracking-wider">
          Every Room Holds a Memory.<br/>Every Echo Hides the Truth.
        </p>

        <button 
          onClick={handleEnter}
          data-testid="btn-enter"
          className="group relative px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest font-bold text-xl overflow-hidden"
        >
          <span className="relative z-10">Enter The Basement</span>
          <div className="absolute inset-0 bg-primary/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 text-sm text-muted-foreground uppercase tracking-widest">
        <Link href="/album" className="hover:text-white transition-colors" data-testid="link-album">Album</Link>
        <Link href="/about" className="hover:text-white transition-colors" data-testid="link-about">About</Link>
        <Link href="/press" className="hover:text-white transition-colors" data-testid="link-press">Press</Link>
      </div>
    </div>
  );
}
