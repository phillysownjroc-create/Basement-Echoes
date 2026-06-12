import { Link } from "wouter";
import { ROOMS } from "@/lib/data";
import { useCollectibles } from "@/lib/store";

export default function Collect() {
  const { collected } = useCollectibles();
  
  const allFound = collected.length === ROOMS.length;

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-6xl mx-auto pt-24">
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="text-muted-foreground hover:text-white uppercase tracking-widest text-sm transition-colors border border-border px-4 py-2">&lt; Main Menu</Link>
      </div>

      <header className="mb-12 border-b border-border pb-8">
        <h1 className="text-5xl md:text-7xl font-sans font-bold text-white uppercase tracking-tighter mb-4">Evidence Board</h1>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground uppercase tracking-widest">Items recovered from the site</p>
          <div className="text-right">
            <span className="text-primary text-3xl font-sans font-bold">{collected.length}</span>
            <span className="text-muted-foreground text-xl"> / {ROOMS.length}</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-1 bg-card mt-6">
          <div 
            className="h-full bg-primary transition-all duration-1000"
            style={{ width: `${(collected.length / ROOMS.length) * 100}%` }}
          ></div>
        </div>
      </header>

      {allFound && (
        <div className="mb-12 border border-primary bg-primary/10 p-6 text-center animate-in fade-in duration-1000">
          <h2 className="text-primary font-sans text-2xl font-bold uppercase tracking-wider mb-2">The Truth Revealed</h2>
          <p className="text-white text-sm tracking-widest max-w-2xl mx-auto">
            You've found everything. The complete picture is terrifying. [BONUS LORE UNLOCKED - coming soon]
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {ROOMS.map((room) => {
          const isFound = collected.includes(room.id);
          
          return (
            <div key={room.id} className={`aspect-square border flex flex-col relative overflow-hidden ${isFound ? 'border-white/20 bg-card' : 'border-border/50 bg-black/50'}`}>
              <div className="absolute top-2 left-2 text-[10px] text-muted-foreground uppercase tracking-widest">#{room.id.toString().padStart(2, '0')}</div>
              
              <div className="flex-1 flex items-center justify-center p-4">
                {isFound ? (
                  <div className="text-center group">
                    <div className="text-white font-sans text-xl uppercase tracking-wider font-bold mb-2">{room.collectible}</div>
                    <div className="text-[10px] text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Found in: {room.title}</div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-muted-foreground/30 text-5xl mb-2">?</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Missing</div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
