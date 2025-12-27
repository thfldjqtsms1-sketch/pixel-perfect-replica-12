import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Support from "./pages/Support";
import Media from "./pages/Media";
import Recruit from "./pages/Recruit";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/pixel-perfect-replica-12/">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:section" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/business/:category" element={<Business />} />
            <Route path="/support" element={<Support />} />
            <Route path="/support/:category" element={<Support />} />
            <Route path="/media" element={<Media />} />
            <Route path="/media/:category" element={<Media />} />
            <Route path="/recruit" element={<Recruit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
