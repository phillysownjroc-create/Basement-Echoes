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
  const [duration, setDuration] = useState("0:00");
  const [copied, setCopied] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime("0:00");
    setDuration("0:00");
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [roomId]);

  if (!room) return <NotFound />;

  const prevRoom = ROOMS.find(r => r.id === roomId - 1);
  const nextRoom = ROOMS.find(r => r.id === roomId + 1);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

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
    const dur = audioRef.current.duration;
    if (dur > 0) setProgress((current / dur) * 100);
    setCurrentTime(formatTime(current));
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(formatTime(audioRef.current.duration));
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current || !room.audio) return;
    const seekTo = (parseFloat(e.target.value) / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTo;
    setProgress(parseFloat(e.target.value));
  };

  const shareUrl = `${window.location.origin}/room/${room.id}`;
  const shareText = `"${room.title}" — from Basement Echoes. Free album for anyone who needs it.`;

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [shareUrl]);

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-2xl mx-auto pt-16">
      {/* Back nav */}
      <div className="mb-10 flex justify-between items-center">
        <Link href="/rooms" className="text-muted-foreground hover:text-white uppercase tracking-widest text-sm transition-colors">&lt; All Tracks</Link>
        <span className="text-muted-foreground text-xs uppercase tracking-widest">{room.id} / {ROOMS.length}</span>
      </div>

      {/* Track header */}
      <header className="mb-10 border-b border-border pb-8">
        <p className="text-primary uppercase tracking-widest text-xs mb-3">Track {room.id.toString().padStart(2, '0')}</p>
        <h1 className="text-4xl md:text-6xl font-sans font-bold text-white uppercase tracking-tighter mb-4">{room.title}</h1>
        <p className="text-gray-400 text-lg leading-relaxed">{room.description}</p>
      </header>

      {/* Audio Player */}
      <div className="mb-10">
        {room.audio ? (
          <>
            <audio
              ref={audioRef}
              src={room.audio}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              className="hidden"
            />
            <div className="flex items-center gap-5">
              <button
                onClick={togglePlay}
                data-testid="btn-play-pause"
                className="w-16 h-16 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors flex-shrink-0"
              >
                {isPlaying ? (
                  <span className="flex gap-1">
                    <span className="block w-1.5 h-5 bg-current rounded-sm" />
                    <span className="block w-1.5 h-5 bg-current rounded-sm" />
                  </span>
                ) : (
                  <span className="block w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-current border-b-[10px] border-b-transparent ml-1" />
                )}
              </button>

              <div className="flex-1">
                <div className="relative w-full h-0.5 bg-border cursor-pointer mb-3 group/bar">
                  <input
                    type="range"
                    min="0" max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    data-testid="input-seek"
                  />
                  <div className="absolute top-0 left-0 h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity"
                    style={{ left: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{currentTime}</span>
                  <span>{duration}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="border border-border py-10 text-center">
            <p className="text-muted-foreground uppercase tracking-widest text-sm">Audio Coming Soon</p>
          </div>
        )}
      </div>

      {/* Share */}
      <div className="mb-12">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Share this track</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`}
            target="_blank" rel="noopener noreferrer"
            data-testid="btn-share-x"
            className="border border-border px-5 py-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-white hover:border-white transition-colors"
          >
            Share on X
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank" rel="noopener noreferrer"
            data-testid="btn-share-facebook"
            className="border border-border px-5 py-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-white hover:border-white transition-colors"
          >
            Facebook
          </a>
          <button
            onClick={copyLink}
            data-testid="btn-copy-link"
            className="border border-border px-5 py-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-white hover:border-white transition-colors"
          >
            {copied ? '✓ Copied' : 'Copy Link'}
          </button>
        </div>
      </div>

      {/* Prev / Next */}
      <div className="flex justify-between border-t border-border pt-6">
        {prevRoom ? (
          <Link href={`/room/${prevRoom.id}`} data-testid="link-prev-track" className="group text-left max-w-[45%]">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">&lt; Previous</p>
            <p className="text-sm text-white group-hover:text-primary transition-colors uppercase tracking-wide font-bold">{prevRoom.title}</p>
          </Link>
        ) : <span />}
        {nextRoom ? (
          <Link href={`/room/${nextRoom.id}`} data-testid="link-next-track" className="group text-right max-w-[45%]">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Next &gt;</p>
            <p className="text-sm text-white group-hover:text-primary transition-colors uppercase tracking-wide font-bold">{nextRoom.title}</p>
          </Link>
        ) : <span />}
      </div>

      {/* Footer nudge */}
      <div className="mt-12 pt-6 border-t border-border/40 text-center">
        <Link href="/about" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
          Mental Health Resources
        </Link>
      </div>
    </div>
  );
}
