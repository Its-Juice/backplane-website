import { useState, useEffect } from 'react';
import performanceMonitor from '../utils/performance.js';

// React hook for using performance monitoring in components
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({});
  const [score, setScore] = useState(0);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const updateMetrics = () => {
      setMetrics(performanceMonitor.getMetrics());
      setScore(performanceMonitor.getPerformanceScore());
      setIssues(performanceMonitor.reportIssues());
    };

    // Update metrics when component mounts
    updateMetrics();

    // Listen for performance metric updates
    const handleMetricUpdate = () => updateMetrics();
    window.addEventListener('performance-metric', handleMetricUpdate);

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    return () => {
      window.removeEventListener('performance-metric', handleMetricUpdate);
      clearInterval(interval);
    };
  }, []);

  return { metrics, score, issues };
};
