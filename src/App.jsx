import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Services from './pages/Services';
import CloudService from './pages/CloudService';
import InfrastructureService from './pages/InfrastructureService';
import NetworkService from './pages/NetworkService';
import SecurityService from './pages/SecurityService';
import DataService from './pages/DataService';
import ManagementService from './pages/ManagementService';
import ManagedServicesService from './pages/ManagedServicesService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { useSmoothScrolling, useScrollAnimations, useHeaderEffects } from './utils/hooks';

function App() {
  // Initialize hooks for smooth scrolling, animations, and header effects
  useSmoothScrolling();
  useScrollAnimations();
  useHeaderEffects();

  return (
    <Router>
      <div className="App">
        <Header />
        <main id="main-content" className="main" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/cloud" element={<CloudService />} />
            <Route path="/services/infrastructure" element={<InfrastructureService />} />
            <Route path="/services/network" element={<NetworkService />} />
            <Route path="/services/security" element={<SecurityService />} />
            <Route path="/services/data" element={<DataService />} />
            <Route path="/services/management" element={<ManagementService />} />
            <Route path="/services/managed-services" element={<ManagedServicesService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/tos" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
