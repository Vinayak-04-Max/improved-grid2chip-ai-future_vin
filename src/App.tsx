import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Industries from "./pages/Industries";
import Demo from "./pages/Demo";
import NotFound from "./pages/NotFound";
// About G2C Pages
import AboutUs from "./pages/AboutUs";
import Partners from "./pages/Partners";
import Blog from "./pages/Blog";
// Products Pages
import IMS from "./pages/IMS";
// Trigger rebuild

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* About G2C Routes */}
              <Route path="/about/us" element={<AboutUs />} />
              <Route path="/about/partners" element={<Partners />} />
              <Route path="/about/testimonials" element={<About />} />
              <Route path="/about/leadership" element={<About />} />
              <Route path="/about/clients" element={<About />} />
              <Route path="/about/careers" element={<About />} />
              
              {/* Products Routes */}
              <Route path="/products/ims" element={<IMS />} />
              <Route path="/products/prefab-container" element={<Solutions />} />
              
              {/* Data Center Routes */}
              <Route path="/data-center/edge" element={<Solutions />} />
              <Route path="/data-center/custom" element={<Solutions />} />
              <Route path="/data-center/ai-ready" element={<Solutions />} />
              
              {/* BMS Routes */}
              <Route path="/bms/building-management" element={<Solutions />} />
              <Route path="/bms/elv-systems" element={<Solutions />} />
              <Route path="/bms/fire-safety" element={<Solutions />} />
              <Route path="/bms/control-panels" element={<Solutions />} />
              
              {/* Other Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/:type" element={<Solutions />} />
              <Route path="/about" element={<About />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/demo" element={<Demo />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <ChatBot />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
