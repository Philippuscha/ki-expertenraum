/**
 * KI-Expertenraum - Premium JavaScript
 * Executive-level interactions and smooth animations
 */

// Mobile Menu Functions
function openMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('mobileMenuBtn');
    if (menu && btn) {
        menu.classList.add('active');
        btn.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('mobileMenuBtn');
    if (menu && btn) {
        menu.classList.remove('active');
        btn.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu && menu.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

// Navigation scroll effect with premium styling
function handleNavScroll() {
    const nav = document.getElementById('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
}

// Intersection Observer for fade-in animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.service-card, .course-card, .testimonial-card, .article-item, .trust-item'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Add CSS class for visible animated elements
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        /* Smooth nav transition */
        .nav.scrolled {
            padding: 16px 0;
            background: rgba(10, 10, 10, 0.95) !important;
            border-bottom-color: rgba(255, 255, 255, 0.1) !important;
        }
        
        /* Copy button state */
        .btn.copied {
            background: #22c55e !important;
            color: white !important;
        }
        
        /* Premium hover effects for cards */
        .service-card, .course-card, .testimonial-card {
            will-change: transform, box-shadow;
        }
        
        /* Subtle parallax effect on scroll */
        @media (prefers-reduced-motion: no-preference) {
            .hero-visual {
                will-change: transform;
            }
        }
    `;
    document.head.appendChild(style);
}

// Parallax effect for hero visual
function initParallax() {
    const heroVisual = document.querySelector('.hero-visual');
    if (!heroVisual || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * 0.15;
                if (rate < 200) {
                    heroVisual.style.transform = `translateY(${rate}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// Copy to clipboard function
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = '✓ Kopiert!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    });
}

// Initialize smooth scroll behavior
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Initialize all functionality on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobileMenuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
    
    // Navigation scroll effect
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll(); // Check initial state
    
    // Add animation styles
    addAnimationStyles();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize parallax effect
    initParallax();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const menu = document.getElementById('mobileMenu');
        const btn = document.getElementById('mobileMenuBtn');
        if (menu && menu.classList.contains('active')) {
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });
});

// Counter Animation for Statistics
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number with dots for thousands
        if (target >= 1000) {
            element.textContent = Math.floor(current).toLocaleString('de-DE');
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Initialize Counter Animations
function initCounterAnimations() {
    const counters = document.querySelectorAll('.trust-number, .stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.textContent;
                
                // Extract number from text (e.g., "22+" -> 22, "2.500+" -> 2500)
                const match = text.match(/[\d.]+/);
                if (match) {
                    const target = parseInt(match[0].replace(/\./g, ''), 10);
                    const suffix = text.replace(match[0], '');
                    
                    el.textContent = '0' + suffix;
                    animateCounter(el, target, 2000);
                    
                    // Restore suffix after animation
                    setTimeout(() => {
                        el.textContent = target.toLocaleString('de-DE') + suffix;
                    }, 2000);
                }
                
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Lazy Loading for Images
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Initialize video player on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    initCounterAnimations();
    initLazyLoading();
});

// Expose functions globally
window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.toggleMobileMenu = toggleMobileMenu;
window.copyToClipboard = copyToClipboard;
