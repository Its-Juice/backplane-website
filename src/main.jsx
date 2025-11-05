import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import performanceMonitor from './utils/performance.js'

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  performanceMonitor.init().catch(console.warn);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
