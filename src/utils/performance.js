// Performance monitoring utility
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.analyticsEndpoint = null;
    this.isDevelopment = import.meta.env.DEV;
  }

  // Initialize performance monitoring
  async init(analyticsEndpoint = null) {
    this.analyticsEndpoint = analyticsEndpoint;
    
    try {
      // Import web-vitals dynamically to avoid SSR issues
      const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import('web-vitals');
      
      // Monitor all Core Web Vitals
      this.trackMetric(onCLS, 'CLS', 'Cumulative Layout Shift');
      this.trackMetric(onFID, 'FID', 'First Input Delay');
      this.trackMetric(onFCP, 'FCP', 'First Contentful Paint');
      this.trackMetric(onLCP, 'LCP', 'Largest Contentful Paint');
      this.trackMetric(onTTFB, 'TTFB', 'Time to First Byte');

      // Add performance observer for custom metrics
      this.observePerformanceMetrics();
      
      // Log metrics in development
      if (this.isDevelopment) {
        console.log('Performance monitoring initialized');
      }
    } catch (error) {
      console.warn('Failed to initialize performance monitoring:', error);
    }
  }

  // Track individual metric
  trackMetric(metricFunction, name, description) {
    metricFunction((metric) => {
      this.metrics[name] = {
        value: metric.value,
        rating: this.getRating(name, metric.value),
        description,
        timestamp: Date.now()
      };

      // Send to analytics if endpoint is configured
      if (this.analyticsEndpoint) {
        this.sendToAnalytics(metric, name);
      }

      // Log in development
      if (this.isDevelopment) {
        console.log(`${name} (${description}):`, metric.value, this.getRating(name, metric.value));
      }

      // Dispatch custom event for components to listen to
      window.dispatchEvent(new CustomEvent('performance-metric', {
        detail: { name, value: metric.value, rating: this.getRating(name, metric.value) }
      }));
    });
  }

  // Get performance rating based on Google's thresholds
  getRating(metricName, value) {
    const thresholds = {
      CLS: { good: 0.1, poor: 0.25 },
      FID: { good: 100, poor: 300 },
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      TTFB: { good: 800, poor: 1800 }
    };

    const threshold = thresholds[metricName];
    if (!threshold) return 'unknown';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  // Send metric to analytics endpoint
  async sendToAnalytics(metric, name) {
    try {
      await fetch(this.analyticsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: name,
          value: metric.value,
          rating: this.getRating(name, metric.value),
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          connection: navigator.connection ? {
            effectiveType: navigator.connection.effectiveType,
            downlink: navigator.connection.downlink,
            rtt: navigator.connection.rtt
          } : null
        })
      });
    } catch (error) {
      console.warn('Failed to send performance metric to analytics:', error);
    }
  }

  // Observe additional performance metrics
  observePerformanceMetrics() {
    // Navigation Timing API
    if ('performance' in window && 'getEntriesByType' in performance) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0];
          if (navigation) {
            this.metrics.navigation = {
              dns: navigation.domainLookupEnd - navigation.domainLookupStart,
              tcp: navigation.connectEnd - navigation.connectStart,
              request: navigation.responseStart - navigation.requestStart,
              response: navigation.responseEnd - navigation.responseStart,
              domProcessing: navigation.domComplete - navigation.domLoading,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart
            };
          }
        }, 0);
      });
    }

    // Resource Timing API
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 1000) { // Log slow resources
            console.warn('Slow resource detected:', entry.name, entry.duration + 'ms');
          }
        }
      });

      try {
        resourceObserver.observe({ entryTypes: ['resource'] });
      } catch {
        // Fallback for browsers that don't support resource timing
      }
    }
  }

  // Get current metrics
  getMetrics() {
    return this.metrics;
  }

  // Get performance score based on Core Web Vitals
  getPerformanceScore() {
    const vitalScores = {
      'good': 1,
      'needs-improvement': 0.5,
      'poor': 0,
      'unknown': 0.5
    };

    const vitals = ['CLS', 'FID', 'FCP', 'LCP', 'TTFB'];
    let totalScore = 0;
    let validMetrics = 0;

    vitals.forEach(vital => {
      if (this.metrics[vital] && this.metrics[vital].rating !== 'unknown') {
        totalScore += vitalScores[this.metrics[vital].rating];
        validMetrics++;
      }
    });

    return validMetrics > 0 ? Math.round((totalScore / validMetrics) * 100) : 0;
  }

  // Report performance issues
  reportIssues() {
    const issues = [];
    const metrics = this.metrics;

    if (metrics.CLS && metrics.CLS.rating === 'poor') {
      issues.push('High Cumulative Layout Shift - elements are shifting during page load');
    }

    if (metrics.FID && metrics.FID.rating === 'poor') {
      issues.push('High First Input Delay - page responds slowly to user interactions');
    }

    if (metrics.LCP && metrics.LCP.rating === 'poor') {
      issues.push('High Largest Contentful Paint - main content loads slowly');
    }

    if (this.getPerformanceScore() < 50) {
      issues.push('Overall performance score is poor - consider optimization');
    }

    return issues;
  }
}

// Create singleton instance
const performanceMonitor = new PerformanceMonitor();

export default performanceMonitor;

// Export the performance monitor instance
export { performanceMonitor };
