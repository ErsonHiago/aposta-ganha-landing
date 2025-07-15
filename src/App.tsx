
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Landing5 from "./pages/Landing5";
import Landing10 from "./pages/Landing10";
import TouroLanding1 from "./pages/TouroLanding1";
import TouroLanding5 from "./pages/TouroLanding5";
import TouroLanding10 from "./pages/TouroLanding10";
import CachorroLanding1 from "./pages/CachorroLanding1";
import CachorroLanding5 from "./pages/CachorroLanding5";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/landing-5" element={<Landing5 />} />
          <Route path="/landing-10" element={<Landing10 />} />
          <Route path="/touro-1" element={<TouroLanding1 />} />
          <Route path="/touro-5" element={<TouroLanding5 />} />
          <Route path="/touro-10" element={<TouroLanding10 />} />
          <Route path="/cachorro-1" element={<CachorroLanding1 />} />
          <Route path="/cachorro-5" element={<CachorroLanding5 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
