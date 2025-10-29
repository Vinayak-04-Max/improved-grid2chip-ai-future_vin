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
import Testimonials from "./pages/Testimonials";
import Leadership from "./pages/Leadership";
import Clients from "./pages/Clients";
import Careers from "./pages/Careers";
// Products Pages
import IMS from "./pages/IMS";
import PrefabContainer from "./pages/PrefabContainer";
// Data Center Pages
import EdgeDataCenter from "./pages/EdgeDataCenter";
import CustomDataCenter from "./pages/CustomDataCenter";
import AIReadyDataCenter from "./pages/AIReadyDataCenter";
import HPC from "./pages/HPC";
// BMS Pages
import BuildingManagement from "./pages/BuildingManagement";
import ELVSystems from "./pages/ELVSystems";
import FireSafety from "./pages/FireSafety";
import ControlPanels from "./pages/ControlPanels";
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
              <Route path="/about/testimonials" element={<Testimonials />} />
              <Route path="/about/leadership" element={<Leadership />} />
              <Route path="/about/clients" element={<Clients />} />
              <Route path="/about/careers" element={<Careers />} />
              
              {/* Products Routes */}
              <Route path="/products/ims" element={<IMS />} />
              <Route path="/products/prefab-container" element={<PrefabContainer />} />
              
              {/* Data Center Routes */}
              <Route path="/solutions/hpc" element={<HPC />} />
              <Route path="/solutions/ai-ready" element={<AIReadyDataCenter />} />
              <Route path="/solutions/edge" element={<EdgeDataCenter />} />
              <Route path="/solutions/prefabricated" element={<PrefabContainer />} />
              <Route path="/solutions/container" element={<PrefabContainer />} />
              <Route path="/data-center/edge" element={<EdgeDataCenter />} />
              <Route path="/data-center/custom" element={<CustomDataCenter />} />
              <Route path="/data-center/ai-ready" element={<AIReadyDataCenter />} />
              <Route path="/data-center/hpc" element={<HPC />} />
              
              {/* BMS/Service Routes */}
              <Route path="/services/bms" element={<BuildingManagement />} />
              <Route path="/services/elv" element={<ELVSystems />} />
              <Route path="/services/fire-safety" element={<FireSafety />} />
              <Route path="/services/control-panels" element={<ControlPanels />} />
              <Route path="/services/ims" element={<IMS />} />
              <Route path="/bms/building-management" element={<BuildingManagement />} />
              <Route path="/bms/elv-systems" element={<ELVSystems />} />
              <Route path="/bms/fire-safety" element={<FireSafety />} />
              <Route path="/bms/control-panels" element={<ControlPanels />} />
              
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
