
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";
import ApoiosPortugal2030 from "./pages/ApoiosPortugal2030";
import DigitalizacaoPME from "./pages/DigitalizacaoPME";
import ConsultoriaEstrategica from "./pages/ConsultoriaEstrategica";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/apoios-portugal2030" element={<ApoiosPortugal2030 />} />
            <Route path="/digitalizacao-pme" element={<DigitalizacaoPME />} />
            <Route path="/consultoria-estrategica" element={<ConsultoriaEstrategica />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <FloatingWhatsappButton />
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
