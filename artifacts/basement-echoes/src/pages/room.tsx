import { useParams, Link } from "wouter";
import { ROOMS } from "@/lib/data";
import { useState, useRef, useEffect, useCallback } from "react";
import NotFound from "./not-found";

export default function Room() {
  const { id } = useParams();
  const roomId = parseInt(id || "0", 10);
  const room = ROOMS.find(r => r.id === roomId);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [copied, setCopied] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime("0:00");
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [roomId]);

  if (!room) return <NotFound />;

  const prevRoom = ROOMS.find(r => r.id === roomId - 1);
  const nextRoom = ROOMS.find(r => r.id === roomId + 1);

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
    if (duration > 0) setProgress((current / duration) * 100);
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

  const shareUrl = `${window.location.origin}/room/${room.id}`;
  const shareText = `"${room.title}" — from Basement Echoes. Author unknown. Free album for anyone who needs it.`;

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [shareUrl]);

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-2xl mx-auto pt-20">
      <div className="mb-8 flex justify-between items-center">
        <Link href="/rooms" className="text-muted-foreground hover:text-white uppercase tracking-widest text-sm transition-colors">&lt; All Tracks</Link>
        <span className="text-muted-foreground text-xs uppercase tracking-widest">{room.id} / {ROOMS.length}</span>
      </div>

      <header className="mb-10">
        <p className="text-muted-foreground uppercase tracking-widest text-xs mb-2">Track {room.id.toString().padStart(2, '0')}</p>
        <h1 className="text-4xl md:text-6xl font-sans font-bold text-white uppercase tracking-tighter">{room.title}</h1>
      </header>

      {/* Audio Player */}
      <div className="border border-border bg-card p-6 mb-10">
        {room.audio ? (
          <>
            <audio
              ref={audioRef}
              src={room.audio}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className="hidden"
            />
            <div className="flex items-center gap-6 mb-4">
              <button
                onClick={togglePlay}
                data-testid="btn-play-pause"
                className="w-14 h-14 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors flex-shrink-0"
              >
                {isPlaying ? (
                  <span className="block w-4 h-4 bg-current" />
                ) : (
                  <span className="block w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-current border-b-8 border-b-transparent ml-1" />
                )}
              </button>
              <div className="flex-1">
                <div className="relative w-full h-1 bg-muted cursor-pointer mb-2">
                  <input
                    type="range"
                    min="0" max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    data-testid="input-seek"
                  />
                  <div className="absolute top-0 left-0 h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
                </div>
                <span className="text-xs text-muted-foreground">{currentTime}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground uppercase tracking-widest text-sm">Audio Coming Soon</p>
          </div>
        )}
      </div>

      {/* Share */}
      <div className="flex flex-wrap gap-3 mb-12">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`}
          target="_blank" rel="noopener noreferrer"
          data-testid="btn-share-x"
          className="border border-border px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-white hover:border-white transition-colors"
        >
          Share on X
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank" rel="noopener noreferrer"
          data-testid="btn-share-facebook"
          className="border border-border px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-white hover:border-white transition-colors"
        >
          Share on Facebook
        </a>
        <button
          onClick={copyLink}
          data-testid="btn-copy-link"
          className="border border-border px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-white hover:border-white transition-colors"
        >
          {copied ? 'Link Copied' : 'Copy Link'}
        </button>
      </div>

      {/* Prev / Next */}
      <div className="flex justify-between border-t border-border pt-6">
        {prevRoom ? (
          <Link href={`/room/${prevRoom.id}`} data-testid="link-prev-track" className="text-muted-foreground hover:text-white transition-colors text-sm uppercase tracking-widest">
            &lt; {prevRoom.title}
          </Link>
        ) : <span />}
        {nextRoom ? (
          <Link href={`/room/${nextRoom.id}`} data-testid="link-next-track" className="text-muted-foreground hover:text-white transition-colors text-sm uppercase tracking-widest text-right">
            {nextRoom.title} &gt;
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}
