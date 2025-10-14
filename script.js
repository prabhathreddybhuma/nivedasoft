// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        mobileToggle.setAttribute('aria-expanded', isActive);
    });
}

// Active link highlighting based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// Testimonials Carousel
document.addEventListener('DOMContentLoaded', () => {
    const testimonialsTrack = document.querySelector('.testimonials-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonialsTrack && prevBtn && nextBtn) {
        let currentIndex = 0;
        const testimonials = document.querySelectorAll('.testimonial-card');
        const totalTestimonials = testimonials.length;
        
        const updateCarousel = () => {
            const translateX = -currentIndex * (400 + 30); // card width + gap
            testimonialsTrack.style.transform = `translateX(${translateX}px)`;
        };
        
        const nextTestimonial = () => {
            currentIndex = (currentIndex + 1) % totalTestimonials;
            updateCarousel();
        };
        
        const prevTestimonial = () => {
            currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
            updateCarousel();
        };
        
        nextBtn.addEventListener('click', nextTestimonial);
        prevBtn.addEventListener('click', prevTestimonial);
        
        // Auto-play carousel
        setInterval(nextTestimonial, 5000);
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .work-card, .stats-card, .training-card, .course-card, .about-visual-card, .founder-section, .timeline-item, .value-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Counter Animation with easing and requestAnimationFrame
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const animateCounter = (element, target, duration = 1800, delay = 0) => {
    const start = 0;
    const startTime = performance.now() + delay;

    const step = (now) => {
        if (now < startTime) {
            requestAnimationFrame(step);
            return;
        }
        const elapsed = Math.min(now - startTime, duration);
        const progress = easeOutCubic(elapsed / duration);
        const value = Math.floor(start + (target - start) * progress);
        element.textContent = value.toLocaleString() + (element.dataset.suffix || '');
        if (elapsed < duration) {
            requestAnimationFrame(step);
        } else {
            element.textContent = target.toLocaleString() + (element.dataset.suffix || '');
        }
    };
    requestAnimationFrame(step);
};

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            console.log('Stats section is visible, triggering animation for:', entry.target);
            entry.target.classList.add('counted');
            entry.target.classList.add('revealed');
            const number = entry.target.querySelector('.stat-number');
            
            // Get target from data-target attribute
            const target = parseInt(number.getAttribute('data-target')) || 0;
            console.log('Animating to target:', target);
            
            // Get suffix from current text content
            const suffix = number.textContent.replace(/[0-9,]/g, '');
            number.dataset.suffix = suffix;
            
            // stagger based on position in grid
            const delay = (Array.from(document.querySelectorAll('.stat-card')).indexOf(entry.target) % 3) * 120;
            animateCounter(number, target, 1800, delay);
        }
    });
}, { 
    threshold: 0.2, 
    rootMargin: '0px 0px -100px 0px' 
});

// Initialize stats observer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const statCards = document.querySelectorAll('.stat-card');
    const statsSection = document.querySelector('.landing-stats');
    
    // Only observe stats cards, don't trigger immediately
    statCards.forEach((stat) => {
        statsObserver.observe(stat);
    });
    
    // Also observe the entire stats section for better detection
    if (statsSection) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Stats section is in view');
                    // The individual stat cards will be handled by their own observer
                }
            });
        }, { threshold: 0.1 });
        
        sectionObserver.observe(statsSection);
    }
    
    console.log(`Observing ${statCards.length} stat cards for animation`);
});

// Parallax light effect on hover for stat cards
document.querySelectorAll('.landing-stats .stat-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 100;
        const my = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mx', mx + '%');
        card.style.setProperty('--my', my + '%');
    });
});


// Page load animation sequence
document.addEventListener('DOMContentLoaded', () => {
    const pageLoader = document.getElementById('pageLoader');
    const heroSection = document.querySelector('.hero');
    const heroElements = document.querySelectorAll('.hero .reveal-up');
    
    // Hide the hero section initially
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        heroSection.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        // Ensure hero background and shapes are also hidden initially
        const heroBackground = heroSection.querySelector('.hero-background');
        const heroShapes = heroSection.querySelectorAll('.hero-shapes .shape');
        
        if (heroBackground) {
            heroBackground.style.opacity = '0';
        }
        
        heroShapes.forEach(shape => {
            shape.style.opacity = '0';
        });
    }
    
    // Start the animation sequence after a short delay
    setTimeout(() => {
        // Fade out the loader
        if (pageLoader) {
            pageLoader.classList.add('fade-out');
        }
        
        // Show the hero section
        if (heroSection) {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
            
            // Trigger background and shapes animations
            const heroBackground = heroSection.querySelector('.hero-background');
            const heroShapes = heroSection.querySelectorAll('.hero-shapes .shape');
            
            if (heroBackground) {
                heroBackground.style.opacity = '1';
            }
            
            // Trigger shapes animations with staggered timing
            heroShapes.forEach((shape, index) => {
                setTimeout(() => {
                    shape.style.opacity = '0.6';
                }, 300 + (index * 200));
            });
        }
        
        // Trigger hero text animations with staggered timing
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('revealed');
            }, 200 + (index * 100)); // 200ms base delay + 100ms per element
        });
        
        // Remove the loader from DOM after animation
        setTimeout(() => {
            if (pageLoader) {
                pageLoader.remove();
            }
        }, 500);
        
    }, 800); // Initial delay before starting animations
});

// Synchronize testimonial animations - More aggressive approach
document.addEventListener('DOMContentLoaded', function() {
    const tracks = document.querySelectorAll('.testimonials-track');
    
    if (tracks.length >= 2) {
        // Remove all animations first
        tracks.forEach(track => {
            track.style.animation = 'none';
        });
        
        // Force a reflow
        tracks[0].offsetHeight;
        
        // Restart animations with synchronized keyframes
        setTimeout(() => {
            tracks.forEach((track, index) => {
                if (track.classList.contains('track-right')) {
                    track.style.animation = 'scroll-right-sync 450s linear infinite';
                } else {
                    track.style.animation = 'scroll-left-sync 450s linear infinite';
                }
            });
        }, 50);
    }
});
const hero = document.querySelector('.hero');
const shapes = document.querySelectorAll('.hero-shapes .shape');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroRect = hero.getBoundingClientRect();
    const inView = Math.max(0, 1 - Math.abs(heroRect.top) / (window.innerHeight));
    
    // Parallax shapes with different depths
    shapes.forEach((shape, i) => {
        const depth = (i + 1) * 8;
        const speed = 0.5 + (i * 0.1);
        shape.style.transform = `translateY(${-(scrollY * speed / depth)}px) rotate(${scrollY * 0.1}deg)`;
    });
    
    // Navbar background transition
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hero opacity based on view
    hero.style.setProperty('--heroOpacity', (0.9 + inView * 0.1).toFixed(2));
});

// Button Ripple Effect
document.querySelectorAll('.primary-btn, .secondary-btn, .cta-btn, a.cta-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: translate(-50%, -50%) scale(0);
            animation: ripple 0.6s ease-out;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(10);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Prevent body scroll when mobile menu is open
navMenu.addEventListener('transitionend', () => {
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Manual trigger function for testing stats animation
window.triggerStatsAnimation = () => {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((stat) => {
        const number = stat.querySelector('.stat-number');
        const target = parseInt(number.getAttribute('data-target')) || 0;
        const suffix = number.textContent.replace(/[0-9,]/g, '');
        number.dataset.suffix = suffix;
        stat.classList.add('counted');
        stat.classList.add('revealed');
        animateCounter(number, target, 1800, 0);
    });
    console.log('Stats animation triggered manually');
};


// Contact Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Validate form before submission
            if (!validateContactForm(this)) {
                showFormMessage('error', 'Please fill in all required fields correctly.');
                return;
            }
            
            // Get form data
            const formData = new FormData(this);
            const submitBtn = this.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            try {
                // Simulate form submission (replace with actual endpoint)
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Show success message
                showFormMessage('success', 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
                
                // Reset form
                this.reset();
                
            } catch (error) {
                // Show error message
                showFormMessage('error', 'Sorry, there was an error sending your message. Please try again.');
            } finally {
                // Reset button state
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
});

// Form validation
function validateContactForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        const value = field.value.trim();
        const fieldGroup = field.closest('.form-group');
        
        // Remove existing error styling
        field.classList.remove('error');
        const existingError = fieldGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Check if field is empty
        if (!value) {
            field.classList.add('error');
            const errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            errorMsg.textContent = 'This field is required';
            fieldGroup.appendChild(errorMsg);
            isValid = false;
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('error');
                const errorMsg = document.createElement('span');
                errorMsg.className = 'error-message';
                errorMsg.textContent = 'Please enter a valid email address';
                fieldGroup.appendChild(errorMsg);
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Show form feedback messages
function showFormMessage(type, message) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Insert message at the top of the form
    const contactForm = document.getElementById('contactForm');
    contactForm.insertBefore(messageDiv, contactForm.firstChild);
    
    // Auto-remove success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Mobile-specific enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Add touch-friendly interactions
    addTouchSupport();
    
    // Optimize for mobile performance
    optimizeForMobile();
    
    // Add mobile-specific event listeners
    addMobileEventListeners();
});

// Touch support for better mobile interaction
function addTouchSupport() {
    // Add touch class to body for CSS targeting
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        document.body.classList.add('touch-device');
    }
    
    // Improve touch targets
    const touchTargets = document.querySelectorAll('button, a, .service-card, .course-card, .testimonial-card');
    touchTargets.forEach(target => {
        target.style.minHeight = '44px';
        target.style.minWidth = '44px';
    });
    
    // Add touch feedback
    document.querySelectorAll('.service-card, .course-card, .testimonial-card, .benefit-item, .why-choose-item').forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// Mobile performance optimizations
function optimizeForMobile() {
    // Reduce animation complexity on mobile
    if (window.innerWidth <= 768) {
        // Disable heavy animations on mobile
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .hero-shapes .shape {
                    animation-duration: 30s !important;
                }
                .hero-mesh {
                    animation-duration: 40s !important;
                }
                * {
                    animation-duration: 0.3s !important;
                    transition-duration: 0.3s !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Lazy load images on mobile
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Mobile-specific event listeners
function addMobileEventListeners() {
    // Handle orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            // Recalculate layouts after orientation change
            window.dispatchEvent(new Event('resize'));
        }, 100);
    });
    
    // Prevent zoom on double tap for buttons
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Improve scroll performance on mobile
    let ticking = false;
    function updateScrollPosition() {
        // Update scroll-dependent elements
        const scrollY = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            hero.style.setProperty('--scrollY', scrollY + 'px');
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    });
    
    // Add swipe support for testimonials carousel on mobile
    if (window.innerWidth <= 768) {
        const testimonialsTrack = document.querySelector('.testimonials-track');
        if (testimonialsTrack) {
            let startX = 0;
            let currentX = 0;
            let isDragging = false;
            
            testimonialsTrack.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                isDragging = true;
            });
            
            testimonialsTrack.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                currentX = e.touches[0].clientX;
                const diffX = currentX - startX;
                testimonialsTrack.style.transform = `translateX(${diffX}px)`;
            });
            
            testimonialsTrack.addEventListener('touchend', () => {
                if (!isDragging) return;
                isDragging = false;
                
                const diffX = currentX - startX;
                if (Math.abs(diffX) > 50) {
                    if (diffX > 0) {
                        // Swipe right - previous
                        document.querySelector('.prev-btn')?.click();
                    } else {
                        // Swipe left - next
                        document.querySelector('.next-btn')?.click();
                    }
                }
                
                testimonialsTrack.style.transform = '';
            });
        }
    }
    
    // Add pull-to-refresh prevention for better UX
    let startY = 0;
    document.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchmove', (e) => {
        const currentY = e.touches[0].clientY;
        const diffY = currentY - startY;
        
        // Prevent pull-to-refresh when scrolling down from top
        if (window.pageYOffset === 0 && diffY > 0) {
            e.preventDefault();
        }
    });
}

// Enhanced mobile navigation
function enhanceMobileNavigation() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        // Add haptic feedback for mobile devices
        mobileToggle.addEventListener('click', () => {
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.focus();
            }
        });
    }
}

// Initialize mobile enhancements
document.addEventListener('DOMContentLoaded', () => {
    enhanceMobileNavigation();
});

// Add CSS for touch devices
const touchStyles = document.createElement('style');
touchStyles.textContent = `
    .touch-device .service-card:hover,
    .touch-device .course-card:hover,
    .touch-device .testimonial-card:hover {
        transform: none;
    }
    
    .touch-device .service-card:active,
    .touch-device .course-card:active,
    .touch-device .testimonial-card:active {
        transform: scale(0.98);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
        }
        
        .nav-menu.active {
            max-height: 500px;
        }
        
        .nav-menu li {
            opacity: 0;
            transform: translateY(-10px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .nav-menu.active li {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav-menu.active li:nth-child(1) { transition-delay: 0.1s; }
        .nav-menu.active li:nth-child(2) { transition-delay: 0.2s; }
        .nav-menu.active li:nth-child(3) { transition-delay: 0.3s; }
        .nav-menu.active li:nth-child(4) { transition-delay: 0.4s; }
        .nav-menu.active li:nth-child(5) { transition-delay: 0.5s; }
    }
`;
document.head.appendChild(touchStyles);

console.log('Nivedasoft Website Loaded Successfully ✨');
console.log('Mobile optimizations applied');
console.log('To manually trigger stats animation, run: triggerStatsAnimation()');