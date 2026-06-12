import { Link } from "wouter";
import { ROOMS } from "@/lib/data";
import { useCollectibles } from "@/lib/store";

export default function Rooms() {
  const { collected } = useCollectibles();

  return (
    <div className="min-h-screen p-6 pt-24 md:p-12 max-w-7xl mx-auto">
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="text-muted-foreground hover:text-white uppercase tracking-widest text-sm transition-colors border border-border px-4 py-2">&lt; Back</Link>
      </div>

      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white uppercase tracking-tighter mb-2">The Floor Plan</h1>
          <p className="text-muted-foreground uppercase tracking-widest">Select a feed to investigate</p>
        </div>
        
        <div className="text-right">
          <p className="text-primary font-bold text-xl">{collected.length} / 12</p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Evidence Collected</p>
          <Link href="/collect" className="inline-block mt-2 text-xs text-white border-b border-white hover:text-primary hover:border-primary transition-colors">View Evidence Board</Link>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {ROOMS.map((room) => {
          const isCollected = collected.includes(room.id);
          
          return (
            <Link 
              key={room.id} 
              href={`/room/${room.id}`}
              className="group relative border border-border bg-card overflow-hidden block"
            >
              <div className="aspect-video bg-black relative">
                {/* Simulated camera feed noise */}
                <div className="absolute inset-0 opacity-20 vhs-noise mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Camera UI overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-primary text-[10px] tracking-widest uppercase">Cam {room.id.toString().padStart(2, '0')}</span>
                </div>
                
                <div className="absolute top-3 right-3 text-[10px] text-muted-foreground tracking-widest">
                  10:4{room.id} PM
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300"></div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-sans text-xl md:text-2xl font-bold text-white uppercase tracking-wider group-hover:text-primary transition-colors">
                    {room.title}
                  </h3>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-muted-foreground">{room.duration}</span>
                    {isCollected ? (
                      <span className="text-[10px] text-primary uppercase tracking-widest border border-primary px-1">Evidence Found</span>
                    ) : (
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Unsearched</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
