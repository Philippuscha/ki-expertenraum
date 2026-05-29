/**
 * KI-Expertenraum - Main JavaScript
 * Handles mobile menu, navigation, and shared functionality
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

// Navigation scroll effect
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

// Initialize on DOM ready
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
    window.addEventListener('scroll', handleNavScroll);
    handleNavScroll(); // Check initial state
    
    // Add scrolled class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .nav.scrolled {
            padding: 15px 0;
            background: rgba(10, 10, 10, 0.98);
        }
        .btn.copied {
            background: #22c55e !important;
            color: white !important;
        }
    `;
    document.head.appendChild(style);
});

// Smooth scroll for anchor links
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
