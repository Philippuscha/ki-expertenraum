/**
 * KI-Expertenraum - Premium JavaScript
 * Executive-level interactions and smooth animations
 * Version: Premium Academy Edition
 */

// ============================================
// MOBILE MENU FUNCTIONS
// ============================================

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

// ============================================
// NAVIGATION SCROLL EFFECT
// ============================================

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

// ============================================
// PREMIUM SCROLL REVEAL ANIMATIONS
// ============================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

// ============================================
// SMOOTH PARALLAX EFFECTS
// ============================================

function initParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    const parallaxElements = document.querySelectorAll('.parallax-element');
    let ticking = false;
    
    function updateParallax() {
        const scrollY = window.pageYOffset;
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.1;
            const yPos = scrollY * speed;
            el.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// SUBTLE HERO PARALLAX
// ============================================

function initHeroParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 1024) return; // Disable on mobile
    
    const heroVisual = document.querySelector('.hero-visual');
    if (!heroVisual) return;
    
    let ticking = false;
    let lastScrollY = 0;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.pageYOffset;
                const rate = scrollY * 0.08;
                
                if (rate < 150) {
                    heroVisual.style.transform = `translateY(${rate}px)`;
                }
                
                lastScrollY = scrollY;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// COUNTER ANIMATION WITH EASING
// ============================================

function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
}

function animateCounter(element, target, duration = 2500) {
    const startTime = performance.now();
    const startValue = 0;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        
        const current = Math.floor(startValue + (target - startValue) * easedProgress);
        
        // Format based on original text
        const originalText = element.dataset.original || element.textContent;
        const suffix = originalText.replace(/[\d.,]/g, '');
        
        if (target >= 1000) {
            element.textContent = current.toLocaleString('de-DE') + suffix;
        } else {
            element.textContent = current + suffix;
        }
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = originalText; // Ensure final value is exact
        }
    }
    
    requestAnimationFrame(update);
}

function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number, .trust-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.textContent;
                
                // Extract number
                const match = text.match(/[\d.,]+/);
                if (match) {
                    const target = parseInt(match[0].replace(/[.,]/g, ''), 10);
                    el.dataset.original = text;
                    animateCounter(el, target, 2000);
                }
                
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// ============================================
// DASHBOARD CHART ANIMATIONS
// ============================================

function initChartAnimations() {
    const chartBars = document.querySelectorAll('.chart-bar');
    
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'chartGrow 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards';
                }, index * 100);
                chartObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    chartBars.forEach(bar => {
        bar.style.transformOrigin = 'bottom';
        bar.style.transform = 'scaleY(0)';
        chartObserver.observe(bar);
    });
}

// ============================================
// PREMIUM HOVER EFFECTS
// ============================================

function initPremiumHoverEffects() {
    // Cards with magnetic effect
    const magneticCards = document.querySelectorAll('.service-card, .course-card, .testimonial-card');
    
    magneticCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Smooth image zoom on course cards
    const courseImages = document.querySelectorAll('.course-image img');
    courseImages.forEach(img => {
        img.parentElement.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.08)';
        });
        img.parentElement.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 100;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ============================================
// COPY TO CLIPBOARD
// ============================================

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
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    });
}

// ============================================
// LAZY LOADING FOR IMAGES
// ============================================

function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                
                // Fade in effect
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 50);
                
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '100px 0px',
        threshold: 0.01
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================
// FLOATING UI ANIMATIONS
// ============================================

function initFloatingUI() {
    const floatingElements = document.querySelectorAll('.floating-ui, .course-preview, .floating-card');
    
    floatingElements.forEach((el, index) => {
        // Add staggered delay for natural feel
        el.style.animationDelay = `${index * 0.3}s`;
    });
}

// ============================================
// FOUNDER SECTION ANIMATION
// ============================================

function initFounderAnimation() {
    const founderSection = document.querySelector('.founder-section');
    if (!founderSection) return;
    
    const founderObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target.querySelector('.founder-image-wrapper');
                const content = entry.target.querySelector('.founder-content');
                
                if (image) {
                    image.style.opacity = '0';
                    image.style.transform = 'translateX(-30px)';
                    image.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                    
                    setTimeout(() => {
                        image.style.opacity = '1';
                        image.style.transform = 'translateX(0)';
                    }, 100);
                }
                
                if (content) {
                    content.style.opacity = '0';
                    content.style.transform = 'translateX(30px)';
                    content.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s';
                    
                    setTimeout(() => {
                        content.style.opacity = '1';
                        content.style.transform = 'translateX(0)';
                    }, 300);
                }
                
                founderObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    founderObserver.observe(founderSection);
}

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================

function initButtonRipple() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                left: ${x}px;
                top: ${y}px;
                width: 10px;
                height: 10px;
                margin-left: -5px;
                margin-top: -5px;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(40);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// TRUST BADGE ANIMATION
// ============================================

function initTrustBadgeAnimation() {
    const badges = document.querySelectorAll('.trust-badge');
    
    const badgeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(10px)';
                    entry.target.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                    
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 50);
                }, index * 100);
                
                badgeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    badges.forEach(badge => {
        badge.style.opacity = '0';
        badgeObserver.observe(badge);
    });
}

// ============================================
// DOCUMENT READY INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu
    const menuBtn = document.getElementById('mobileMenuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Close on escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
    
    // Navigation scroll
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();
    
    // Initialize all premium features
    initScrollReveal();
    initParallax();
    initHeroParallax();
    initCounterAnimations();
    initChartAnimations();
    initPremiumHoverEffects();
    initSmoothScroll();
    initLazyLoading();
    initFloatingUI();
    initFounderAnimation();
    initButtonRipple();
    initTrustBadgeAnimation();
    
    // Close mobile menu on outside click
    document.addEventListener('click', function(e) {
        const menu = document.getElementById('mobileMenu');
        const btn = document.getElementById('mobileMenuBtn');
        if (menu && menu.classList.contains('active')) {
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });
    
    // Log initialization
    console.log('%cKI-Expertenraum', 'color: #c9a962; font-size: 24px; font-weight: bold;');
    console.log('%cPremium Executive Academy Loaded ✓', 'color: #dcc28a; font-size: 14px;');
});

// ============================================
// GLOBAL EXPORTS
// ============================================

window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.toggleMobileMenu = toggleMobileMenu;
window.copyToClipboard = copyToClipboard;
