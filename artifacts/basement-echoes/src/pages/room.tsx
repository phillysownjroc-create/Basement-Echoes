import { useParams, Link } from "wouter";
import { ROOMS } from "@/lib/data";
import { useCollectibles } from "@/lib/store";
import { useState, useRef, useEffect } from "react";
import NotFound from "./not-found";

export default function Room() {
  const { id } = useParams();
  const roomId = parseInt(id || "0", 10);
  const room = ROOMS.find(r => r.id === roomId);
  const { collected, collect, hasCollected } = useCollectibles();
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [showCollectAnim, setShowCollectAnim] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    // Reset state when changing rooms
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime("0:00");
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [roomId]);

  if (!room) return <NotFound />;

  const isCollected = hasCollected(room.id);

  const togglePlay = () => {
    if (!audioRef.current || !room.audio) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    
    if (duration > 0) {
      setProgress((current / duration) * 100);
    }
    
    const mins = Math.floor(current / 60);
    const secs = Math.floor(current % 60);
    setCurrentTime(`${mins}:${secs.toString().padStart(2, '0')}`);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current || !room.audio) return;
    const seekTo = (parseFloat(e.target.value) / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTo;
    setProgress(parseFloat(e.target.value));
  };

  const handleCollect = () => {
    if (!isCollected) {
      collect(room.id);
      setShowCollectAnim(true);
      setTimeout(() => setShowCollectAnim(false), 2000);
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      {/* Glitch flash overlay for collectible */}
      {showCollectAnim && (
        <div className="fixed inset-0 bg-primary/20 z-50 pointer-events-none flex items-center justify-center backdrop-blur-sm animate-in fade-in duration-200">
          <div className="text-white font-sans text-5xl md:text-7xl font-bold uppercase tracking-tighter mix-blend-difference">
            Evidence Collected
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-8 flex justify-between items-center border-b border-border pb-4">
          <Link href="/rooms" className="text-muted-foreground hover:text-white uppercase tracking-widest text-sm transition-colors">&lt; Back to Floor Plan</Link>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-primary text-xs tracking-widest uppercase">CAM {room.id.toString().padStart(2, '0')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <header>
              <h2 className="text-muted-foreground uppercase tracking-widest text-sm mb-2">Subject #{room.id}</h2>
              <h1 className="text-5xl md:text-7xl font-sans font-bold text-white uppercase tracking-tighter flicker">{room.title}</h1>
            </header>

            {/* Audio Player */}
            <div className="border border-border bg-card p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              {room.audio ? (
                <>
                  <audio 
                    ref={audioRef}
                    src={room.audio}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                    className="hidden"
                  />
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={togglePlay}
                        data-testid="btn-play-pause"
                        className="w-16 h-16 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        {isPlaying ? (
                          <span className="block w-4 h-4 bg-current"></span> // Stop square
                        ) : (
                          <span className="block w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-current border-b-8 border-b-transparent ml-1"></span> // Play triangle
                        )}
                      </button>
                      
                      <div className="text-right">
                        <div className="text-2xl font-sans font-bold text-white">{currentTime} <span className="text-muted-foreground text-sm">/ {room.duration}</span></div>
                        <div className="text-xs text-primary tracking-widest uppercase">Status: Recording</div>
                      </div>
                    </div>

                    <div className="relative w-full h-2 bg-muted mt-2 cursor-pointer rounded-full overflow-hidden">
                      <input 
                        type="range" 
                        min="0" max="100" 
                        value={progress}
                        onChange={handleSeek}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        data-testid="input-seek"
                      />
                      <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-primary/20 text-primary/60">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse mb-6"></div>
                  <h3 className="font-sans text-2xl font-bold uppercase tracking-wider mb-2 text-white">Audio Coming Soon</h3>
                  <p className="text-sm tracking-widest uppercase text-center max-w-xs text-muted-foreground">This recording is free. Upload pending — check back soon.</p>
                </div>
              )}
            </div>

            {/* Lyrics */}
            <div className="space-y-4">
              <h3 className="text-muted-foreground uppercase tracking-widest border-b border-border pb-2 text-sm">Transcript</h3>
              <div className="font-mono text-sm leading-relaxed text-gray-400 opacity-80 pl-4 border-l border-primary/30">
                [STATIC NOISE]<br/><br/>
                They told me it was empty.<br/>
                They told me the cameras were off.<br/>
                But I can hear them breathing in the walls.<br/>
                <br/>
                [INDISTINCT WHISPERING]<br/>
                <br/>
                I left the tapes where you wouldn't look.<br/>
                Under the floorboards. Behind the glass.<br/>
                You're too late anyway.
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Story Notes */}
            <div className="bg-secondary/20 border border-secondary/50 p-6">
              <h3 className="text-secondary-foreground uppercase tracking-widest border-b border-secondary/50 pb-2 mb-4 text-sm font-bold">Investigator's Notes</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Subject appears highly paranoid. Constant references to being watched. The physical evidence collected from this room contradicts the audio log. Suggest reviewing the tapes again. The static... it sounds like a voice if you slow it down.
              </p>
            </div>

            {/* Collectible */}
            <div className={`border p-6 transition-all duration-500 cursor-pointer group ${isCollected ? 'border-primary bg-primary/10' : 'border-border bg-card hover:border-primary/50'}`}
                 onClick={handleCollect}
                 data-testid="btn-collect"
            >
              <h3 className="text-muted-foreground uppercase tracking-widest border-b border-border pb-2 mb-4 text-sm">Evidence Log</h3>
              
              <div className="flex items-center justify-center h-32 mb-4 relative overflow-hidden bg-black/50">
                <div className="absolute inset-0 vhs-noise opacity-30 mix-blend-overlay"></div>
                {isCollected ? (
                  <div className="text-center">
                    <div className="text-primary text-4xl mb-2">👁</div>
                    <div className="font-sans font-bold text-white uppercase tracking-wider">{room.collectible}</div>
                  </div>
                ) : (
                  <div className="text-center group-hover:scale-105 transition-transform duration-500">
                    <div className="text-muted-foreground text-4xl mb-2">?</div>
                    <div className="font-sans font-bold text-muted-foreground uppercase tracking-wider">Investigate Area</div>
                  </div>
                )}
              </div>
              
              <div className="text-center">
                {isCollected ? (
                  <span className="text-xs text-primary uppercase tracking-widest">Logged & Secured</span>
                ) : (
                  <span className="text-xs text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">Click to search room</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
