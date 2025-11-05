import React, { useEffect, useState } from 'react';

// Mobile performance and UX optimization component
const MobileOptimizations = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [networkInfo, setNetworkInfo] = useState({});
  const [deviceInfo, setDeviceInfo] = useState({});

  useEffect(() => {
    // Monitor network status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Get network information (if available)
    if ('connection' in navigator) {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      setNetworkInfo({
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      });

      // Listen for connection changes
      connection.addEventListener('change', () => {
        setNetworkInfo({
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        });
      });
    }

    // Detect device capabilities
    setDeviceInfo({
      isMobile: /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
      hasTouch: 'ontouchstart' in window,
      pixelRatio: window.devicePixelRatio || 1,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight
    });

    // Optimize for low-end devices
    if (deviceInfo.isMobile && networkInfo.effectiveType === 'slow-2g') {
      // Reduce animation complexity for slow connections
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
    }

    // Touch optimization
    if (deviceInfo.hasTouch) {
      // Add touch-specific CSS classes
      document.body.classList.add('touch-device');
      
      // Optimize tap events
      let lastTouchEnd = 0;
      document.addEventListener('touchend', (event) => {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      }, false);
    }

    // Performance optimizations for mobile
    if (deviceInfo.isMobile) {
      // Reduce render frequency for better performance
      let ticking = false;
      
      const optimizeScrolling = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Add scroll optimization here
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', optimizeScrolling, { passive: true });

      // Lazy load images with Intersection Observer
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
              }
            }
          });
        }, {
          rootMargin: '50px 0px',
          threshold: 0.01
        });

        // Observe all lazy images
        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }

      // Preload critical resources based on connection
      if (networkInfo.saveData === false && networkInfo.downlink > 1) {
        // Preload next likely pages for fast connections
        const criticalPages = ['/services', '/about', '/contact'];
        criticalPages.forEach(page => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = page;
          document.head.appendChild(link);
        });
      }
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [networkInfo.effectiveType, deviceInfo.isMobile, deviceInfo.hasTouch]);

  // Offline indicator component
  const OfflineIndicator = () => {
    if (isOnline) return null;

    return (
      <div className="offline-indicator" style={{
        position: 'fixed',
        top: '4rem',
        left: 0,
        right: 0,
        background: '#ff6b6b',
        color: 'white',
        padding: '0.5rem',
        textAlign: 'center',
        fontSize: '0.875rem',
        zIndex: 9999
      }}>
        📱 You're offline. Some features may be limited.
      </div>
    );
  };

  // Network quality indicator
  const NetworkIndicator = () => {
    if (!networkInfo.effectiveType) return null;

    const getQualityColor = (type) => {
      switch (type) {
        case '4g': return '#4caf50';
        case '3g': return '#ff9800';
        case '2g': return '#f44336';
        case 'slow-2g': return '#d32f2f';
        default: return '#9e9e9e';
      }
    };

    const getQualityText = (type) => {
      switch (type) {
        case '4g': return 'Fast';
        case '3g': return 'Medium';
        case '2g': return 'Slow';
        case 'slow-2g': return 'Very Slow';
        default: return 'Unknown';
      }
    };

    return (
      <div className="network-indicator" style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '0.5rem',
        borderRadius: '0.5rem',
        fontSize: '0.75rem',
        zIndex: 9999,
        border: `2px solid ${getQualityColor(networkInfo.effectiveType)}`
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: getQualityColor(networkInfo.effectiveType)
          }} />
          <span>{getQualityText(networkInfo.effectiveType)}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <OfflineIndicator />
      <NetworkIndicator />
    </>
  );
};

export default MobileOptimizations;
