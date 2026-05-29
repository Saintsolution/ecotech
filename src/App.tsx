import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop"; // <-- Adicione esse import
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatbotSection from "@/components/ChatbotSection";
import Index from "./pages/Index";
import ProductsAirPage from "./pages/ProductsAir";
import ProductsDieselPage from "./pages/ProductsDiesel";
import PartnerPage from "./pages/Partner";
import AdminPage from "./pages/Admin";
import VideoLanding from "./pages/VideoLanding"; // 👈 Adicionado o import da sua página de vídeo
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* <-- Ele entra aqui, dentro do BrowserRouter */}
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produtos/ar" element={<ProductsAirPage />} />
          <Route path="/produtos/diesel" element={<ProductsDieselPage />} />
          <Route path="/parceiro" element={<PartnerPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/apresentacao" element={<VideoLanding />} /> {/* 👈 Adicionada a sua rota aqui */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <ChatbotSection />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;