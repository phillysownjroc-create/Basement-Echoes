import { Link, useLocation } from "wouter";
import { useState } from "react";
import albumCover from "@assets/file_00000000e55c71f5b5b6ea9a7b50afde_1781256092050.png";

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
        <div className="inline-block border border-primary text-primary text-xs tracking-widest uppercase px-4 py-1 mb-6 font-bold">
          Free Release — Stream &amp; Download
        </div>
        <h2 className="text-muted-foreground tracking-widest text-sm mb-8">Written and Produced by Phillys Own J-Roc / Performed by AI-Generated Voices</h2>

        <div className="mx-auto mb-10 w-64 md:w-80 relative group">
          <img
            src={albumCover}
            alt="Basement Echoes — Album Cover"
            data-testid="img-album-cover"
            className="w-full h-full object-cover glitch"
          />
          <div className="absolute inset-0 border border-primary/20 pointer-events-none"></div>
        </div>

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
