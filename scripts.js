/**
 * Backplane - Professional Corporate JavaScript
 * Lightweight | Accessible | Performance Optimized
 * No frameworks, pure vanilla JavaScript
 */

(function() {
    'use strict';

    // ===============================================
    // Configuration and Utilities
    // ===============================================

    /**
     * Check if user prefers reduced motion
     * @returns {boolean}
     */
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /**
     * Throttle function to limit function calls
     * @param {Function} func - Function to throttle
     * @param {number} delay - Delay in milliseconds
     * @returns {Function}
     */
    function throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;
        return function (...args) {
            const currentTime = Date.now();
            
            if (currentTime - lastExecTime > delay) {
                func.apply(this, args);
                lastExecTime = currentTime;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                    lastExecTime = Date.now();
                }, delay - (currentTime - lastExecTime));
            }
        };
    }

    /**
     * Debounce function to delay function execution
     * @param {Function} func - Function to debounce
     * @param {number} delay - Delay in milliseconds
     * @returns {Function}
     */
    function debounce(func, delay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // ===============================================
    // Mobile Navigation
    // ===============================================

    /**
     * Initialize mobile navigation
     */
    function initMobileNavigation() {
        const navToggle = document.querySelector('.nav__toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-nav__link');

        if (!navToggle || !mobileMenu) return;

        /**
         * Toggle mobile menu
         */
        function toggleMobileMenu() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            const newState = !isExpanded;

            // Update button state
            navToggle.setAttribute('aria-expanded', newState);
            
            // Toggle menu visibility
            if (newState) {
                mobileMenu.removeAttribute('hidden');
                // Focus first link for accessibility
                setTimeout(() => {
                    const firstLink = mobileMenu.querySelector('.mobile-nav__link');
                    if (firstLink) firstLink.focus();
                }, 100);
            } else {
                mobileMenu.setAttribute('hidden', '');
                // Return focus to toggle button
                navToggle.focus();
            }

            // Prevent body scroll when menu is open
            document.body.style.overflow = newState ? 'hidden' : '';
        }

        /**
         * Close mobile menu
         */
        function closeMobileMenu() {
            navToggle.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('hidden', '');
            document.body.style.overflow = '';
        }

        // Event listeners
        navToggle.addEventListener('click', toggleMobileMenu);

        // Close menu when clicking on links
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
                closeMobileMenu();
            }
        });

        // Close menu on window resize to desktop size
        window.addEventListener('resize', debounce(() => {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        }, 250));

        // Close menu if clicking outside
        document.addEventListener('click', (e) => {
            if (navToggle.getAttribute('aria-expanded') === 'true' && 
                !mobileMenu.contains(e.target) && 
                !navToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }

    // ===============================================
    // Smooth Scrolling
    // ===============================================

    /**
     * Initialize smooth scrolling for anchor links
     */
    function initSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Skip if href is just "#"
                if (href === '#') {
                    e.preventDefault();
                    return;
                }

                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;

                    if (!prefersReducedMotion) {
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    } else {
                        window.scrollTo(0, targetPosition);
                    }

                    // Update URL without triggering scroll
                    if (history.pushState) {
                        history.pushState(null, '', href);
                    }
                }
            });
        });
    }

    // ===============================================
    // Header Scroll Effects
    // ===============================================

    /**
     * Initialize header scroll effects
     */
    function initHeaderEffects() {
        const header = document.querySelector('.header');
        if (!header) return;

        let lastScrollY = window.scrollY;
        let ticking = false;

        /**
         * Update header on scroll
         */
        function updateHeader() {
            const scrollY = window.scrollY;
            
            if (!prefersReducedMotion) {
                if (scrollY > 100) {
                    header.style.background = 'rgba(0, 0, 0, 0.98)';
                } else {
                    header.style.background = 'rgba(0, 0, 0, 0.95)';
                }
            }

            lastScrollY = scrollY;
            ticking = false;
        }

        /**
         * Request update on scroll
         */
        function requestUpdate() {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestUpdate, { passive: true });
    }

    // ===============================================
    // Scroll Animations
    // ===============================================

    /**
     * Initialize scroll-triggered animations
     */
    function initScrollAnimations() {
        if (prefersReducedMotion) return;

        const animatedElements = document.querySelectorAll('.solution-card');
        
        if (!('IntersectionObserver' in window) || animatedElements.length === 0) {
            // Fallback: add visible class to all elements
            animatedElements.forEach(element => {
                element.classList.add('visible');
            });
            return;
        }

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(element => {
            element.classList.add('animate-on-scroll');
            observer.observe(element);
        });

        // Add CSS for scroll animations via JavaScript
        const style = document.createElement('style');
        style.textContent = `
            .animate-on-scroll {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            
            .animate-on-scroll.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            @media (prefers-reduced-motion: reduce) {
                .animate-on-scroll {
                    opacity: 1;
                    transform: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ===============================================
    // Lazy Loading Images
    // ===============================================

    /**
     * Initialize lazy loading for images
     */
    function initLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if (!('IntersectionObserver' in window) || images.length === 0) {
            // Fallback: mark all images as loaded
            images.forEach(img => img.classList.add('loaded'));
            return;
        }

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===============================================
    // Focus Management
    // ===============================================

    /**
     * Initialize focus management for accessibility
     */
    function initFocusManagement() {
        // Skip link functionality
        const skipLink = document.querySelector('.skip-link');
        if (skipLink) {
            skipLink.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(skipLink.getAttribute('href'));
                if (target) {
                    target.focus();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        // Manage focus for keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    // ===============================================
    // Button Enhancement
    // ===============================================

    /**
     * Enhance button interactions
     */
    function initButtonEnhancements() {
        const buttons = document.querySelectorAll('.btn');

        buttons.forEach(button => {
            // Add ripple effect on click
            button.addEventListener('click', function(e) {
                if (prefersReducedMotion) return;

                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;

                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add ripple animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
            
            @media (prefers-reduced-motion: reduce) {
                .btn::before {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ===============================================
    // Performance Monitoring
    // ===============================================

    /**
     * Initialize performance monitoring
     */
    function initPerformanceMonitoring() {
        // Monitor page load performance
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                        const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                        if (loadTime > 3000) {
                            console.warn(`Page load time: ${loadTime}ms - Consider optimization`);
                        }
                    }
                }, 0);
            });
        }

        // Monitor scroll performance
        let scrollStartTime = 0;
        window.addEventListener('scroll', throttle(() => {
            if (scrollStartTime === 0) {
                scrollStartTime = performance.now();
            }
        }, 100), { passive: true });
    }

    // ===============================================
    // Error Handling
    // ===============================================

    /**
     * Global error handler
     */
    window.addEventListener('error', (e) => {
        console.error('JavaScript error:', e.error);
        // Could send to analytics service in production
    });

    /**
     * Handle unhandled promise rejections
     */
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
        e.preventDefault();
    });

    // ===============================================
    // Initialization
    // ===============================================

    /**
     * Initialize all functionality when DOM is ready
     */
    function init() {
        try {
            initMobileNavigation();
            initSmoothScrolling();
            initHeaderEffects();
            initScrollAnimations();
            initLazyLoading();
            initFocusManagement();
            initButtonEnhancements();
            initPerformanceMonitoring();
            
            // Mark JavaScript as loaded for CSS hooks
            document.documentElement.classList.add('js-loaded');
            
            console.log('Backplane website initialized successfully');
        } catch (error) {
            console.error('Error initializing website:', error);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Also initialize on DOMContentLoaded as backup
    document.addEventListener('DOMContentLoaded', init);

})();
