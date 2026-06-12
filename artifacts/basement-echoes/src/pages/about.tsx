import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen p-6 md:p-12 max-w-2xl mx-auto pt-20">
      <div className="mb-10">
        <Link href="/" className="text-muted-foreground hover:text-white uppercase tracking-widest text-sm transition-colors">&lt; Back</Link>
      </div>

      <header className="mb-12 border-b border-border pb-10">
        <p className="text-primary uppercase tracking-widest text-xs mb-4">About This Album</p>
        <h1 className="text-5xl md:text-7xl font-sans font-bold text-white uppercase tracking-tighter mb-4">Basement<br />Echoes</h1>
        <p className="text-muted-foreground uppercase tracking-widest text-sm">Author Unknown &nbsp;·&nbsp; Free Release</p>
      </header>

      <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
        <p>
          This album was made for the people who feel things that are hard to explain to others. The 3am hours. The weight that doesn't have a name. The rooms inside your mind that you don't want anyone to see.
        </p>
        <p>
          These 12 tracks don't offer answers. They offer company. Someone else put these feelings into words so you don't have to feel alone in them.
        </p>
        <p>
          The author's name doesn't matter. The voice is AI-generated. None of that changes what the music is trying to say — or whether it reaches you.
        </p>
      </div>

      <div className="mt-16 border-t border-border pt-10 space-y-6">
        <h2 className="text-white font-sans text-xl uppercase tracking-wider font-bold">If You're Struggling</h2>
        <p className="text-gray-400 leading-relaxed">
          You don't have to navigate this alone. These resources are free and available right now:
        </p>
        <ul className="space-y-4 text-sm">
          <li className="flex gap-4">
            <span className="text-primary font-bold uppercase tracking-widest w-36 flex-shrink-0">Crisis Line</span>
            <span className="text-gray-300">Call or text <strong className="text-white">988</strong> (Suicide & Crisis Lifeline — US)</span>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold uppercase tracking-widest w-36 flex-shrink-0">Crisis Text</span>
            <span className="text-gray-300">Text <strong className="text-white">HOME</strong> to <strong className="text-white">741741</strong></span>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold uppercase tracking-widest w-36 flex-shrink-0">International</span>
            <span className="text-gray-300"><strong className="text-white">findahelpline.com</strong> — resources in 80+ countries</span>
          </li>
        </ul>
        <p className="text-xs text-muted-foreground uppercase tracking-widest pt-4">
          Listening to this album and talking to someone are not mutually exclusive. Do both.
        </p>
      </div>

      <div className="mt-16 text-center">
        <Link href="/rooms" className="border border-border px-8 py-3 text-sm uppercase tracking-widest text-muted-foreground hover:text-white hover:border-white transition-colors">
          Listen to the Album
        </Link>
      </div>
    </div>
  );
}
