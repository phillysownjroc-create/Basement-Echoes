import { Link } from "wouter";

const HANDLE = "Phillysownjroc";

const SOCIALS = [
  {
    id: "x",
    label: "X / Twitter",
    handle: `@${HANDLE}`,
    url: `https://x.com/${HANDLE}`,
    description: "Updates, drops, and transmissions",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: `@${HANDLE}`,
    url: `https://www.instagram.com/${HANDLE}`,
    description: "Behind-the-scenes and visual evidence",
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: `@${HANDLE}`,
    url: `https://www.tiktok.com/@${HANDLE}`,
    description: "Clips, previews, and basement footage",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: `@${HANDLE}`,
    url: `https://www.youtube.com/@${HANDLE}`,
    description: "Music videos and visual projects",
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: `@${HANDLE}`,
    url: `https://www.facebook.com/${HANDLE}`,
    description: "Community and event updates",
  },
];

export default function Social() {
  return (
    <div className="min-h-screen p-6 md:p-12 max-w-2xl mx-auto pt-24">
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="text-muted-foreground hover:text-white uppercase tracking-widest text-sm transition-colors border border-border px-4 py-2" data-testid="link-back">&lt; Main Menu</Link>
      </div>

      <header className="mb-16 text-center">
        <h2 className="text-primary tracking-widest text-sm mb-3 uppercase">Find The Signal</h2>
        <h1 className="text-5xl md:text-7xl font-sans font-bold text-white uppercase tracking-tighter mb-4">
          Social
        </h1>
        <p className="text-muted-foreground uppercase tracking-widest text-sm">
          Follow the investigation across all platforms
        </p>
      </header>

      <div className="space-y-3">
        {SOCIALS.map((s) => (
          <a
            key={s.id}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`link-social-${s.id}`}
            className="flex items-center justify-between p-5 border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
          >
            <div className="flex items-center gap-5">
              <div className="w-2 h-2 rounded-full bg-primary group-hover:animate-pulse flex-shrink-0"></div>
              <div>
                <div className="font-sans font-bold text-white uppercase tracking-wider text-lg group-hover:text-primary transition-colors">{s.label}</div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase mt-1">{s.description}</div>
              </div>
            </div>
            <div className="text-primary text-sm tracking-widest uppercase font-bold flex-shrink-0">{s.handle}</div>
          </a>
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-8 text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">Share The Investigation</p>
        <button
          data-testid="btn-share-tweet"
          onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`BASEMENT ECHOES — author unknown. 12 rooms. 12 recordings. Every room holds a memory. Every echo hides the truth.\n${window.location.origin}`)}`, '_blank')}
          className="border border-primary bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors px-8 py-3 uppercase tracking-widest text-sm font-bold"
        >
          Post on X
        </button>
      </div>
    </div>
  );
}
