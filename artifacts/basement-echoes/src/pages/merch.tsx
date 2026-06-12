import { Link } from "wouter";

const PRODUCTS = [
  { id: 1, name: "Basement Echoes Heavy Hoodie", price: "$65.00", type: "Apparel" },
  { id: 2, name: "The Floor Plan T-Shirt", price: "$35.00", type: "Apparel" },
  { id: 3, name: "Limited Edition Vinyl (Red Splatter)", price: "$40.00", type: "Music" },
  { id: 4, name: "Evidence Log Cassette Tape", price: "$15.00", type: "Music" },
  { id: 5, name: "Surveillance Poster Set", price: "$25.00", type: "Art" },
];

export default function Merch() {
  return (
    <div className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto pt-24">
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="text-muted-foreground hover:text-white uppercase tracking-widest text-sm transition-colors border border-border px-4 py-2">&lt; Main Menu</Link>
      </div>

      <header className="mb-16 border-b border-border pb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-5xl md:text-8xl font-sans font-bold text-white uppercase tracking-tighter mb-2">Supply Room</h1>
          <p className="text-muted-foreground uppercase tracking-widest">Official Basement Echoes Merchandise</p>
        </div>
        <div className="text-xs text-primary border border-primary px-3 py-1 uppercase tracking-widest bg-primary/10">
          Store Integration Pending
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="border border-border bg-card group flex flex-col">
            <div className="aspect-[4/5] bg-black/50 relative overflow-hidden flex items-center justify-center p-8">
              <div className="absolute inset-0 vhs-noise opacity-10 mix-blend-overlay"></div>
              {/* Placeholder image representation */}
              <div className="w-full h-full border border-dashed border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <span className="text-muted-foreground text-xs uppercase tracking-widest rotate-[-45deg] opacity-50">{product.type}</span>
              </div>
              <div className="absolute top-4 right-4 text-white font-sans text-xl font-bold">{product.price}</div>
            </div>
            
            <div className="p-6 border-t border-border flex-1 flex flex-col justify-between">
              <h3 className="font-sans text-2xl font-bold text-white uppercase tracking-wider mb-6 group-hover:text-primary transition-colors">{product.name}</h3>
              
              <button 
                data-testid={`btn-buy-${product.id}`}
                className="w-full border border-border bg-transparent text-white hover:bg-white hover:text-black py-4 uppercase tracking-widest text-sm transition-colors font-bold"
                onClick={() => alert("Shopify integration coming soon. The store is currently locked.")}
              >
                Pre-Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
