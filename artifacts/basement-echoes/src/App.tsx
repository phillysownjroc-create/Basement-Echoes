import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Landing from "@/pages/landing";
import Rooms from "@/pages/rooms";
import Room from "@/pages/room";
import Album from "@/pages/album";
import Collect from "@/pages/collect";
import Merch from "@/pages/merch";
import About from "@/pages/about";
import Press from "@/pages/press";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-mono">
      <div className="scanlines"></div>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/room/:id" component={Room} />
        <Route path="/album" component={Album} />
        <Route path="/collect" component={Collect} />
        <Route path="/merch" component={Merch} />
        <Route path="/about" component={About} />
        <Route path="/press" component={Press} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
