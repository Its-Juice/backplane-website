import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import GlobalDarkVeil from './components/effects/GlobalDarkVeil';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileOptimizations from './components/MobileOptimizations';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const CloudService = lazy(() => import('./pages/CloudService'));
const InfrastructureService = lazy(() => import('./pages/InfrastructureService'));
const NetworkService = lazy(() => import('./pages/NetworkService'));
const SecurityService = lazy(() => import('./pages/SecurityService'));
const DataService = lazy(() => import('./pages/DataService'));
const ManagementService = lazy(() => import('./pages/ManagementService'));
const ManagedServicesService = lazy(() => import('./pages/ManagedServicesService'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

// Loading component for better UX
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <>
      <GlobalDarkVeil />
      <MobileOptimizations />
      <Router>
        <div className="App">
          <Header />
          <main id="main-content" className="main" role="main">
            <Suspense fallback={<PageLoader />}>
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
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
