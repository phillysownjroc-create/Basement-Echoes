import { Link } from "wouter";
import { ROOMS } from "@/lib/data";

export default function Rooms() {
  return (
    <div className="min-h-screen p-6 pt-20 md:p-12 max-w-3xl mx-auto">
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="text-muted-foreground hover:text-white uppercase tracking-widest text-sm transition-colors">&lt; Back</Link>
      </div>

      <header className="mb-12 border-b border-border pb-8">
        <h1 className="text-5xl md:text-7xl font-sans font-bold text-white uppercase tracking-tighter mb-2">Basement Echoes</h1>
        <p className="text-muted-foreground uppercase tracking-widest text-sm">12 Tracks &nbsp;·&nbsp; Author Unknown &nbsp;·&nbsp; Free Release</p>
      </header>

      <div className="space-y-0">
        {ROOMS.map((room) => (
          <Link
            key={room.id}
            href={`/room/${room.id}`}
            data-testid={`link-track-${room.id}`}
            className="flex items-start gap-6 px-4 py-5 hover:bg-card border-b border-border/40 hover:border-border transition-all duration-200 group"
          >
            <span className="text-muted-foreground group-hover:text-primary transition-colors text-sm w-6 flex-shrink-0 pt-1">
              {room.id.toString().padStart(2, '0')}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-sans text-lg md:text-xl font-bold text-white uppercase tracking-wide group-hover:text-primary transition-colors mb-1">
                {room.title}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{room.description}</p>
            </div>
            <span className="text-muted-foreground text-sm flex-shrink-0 pt-1">
              {room.audio ? room.duration : '—'}
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-10 text-center space-y-4">
        <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
          This album was made for anyone navigating difficult thoughts, isolation, or mental health challenges. You are not alone.
        </p>
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          Share it with someone who needs it. It's free.
        </p>
        <div className="pt-2">
          <Link href="/about" className="text-xs text-primary hover:text-white transition-colors uppercase tracking-widest border-b border-primary/40 hover:border-white pb-px">
            Mental Health Resources →
          </Link>
        </div>
      </div>
    </div>
  );
}
