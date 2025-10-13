// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
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
            entry.target.classList.add('counted');
            entry.target.classList.add('revealed');
            const number = entry.target.querySelector('.stat-number');
            const targetText = number.textContent.replace(/[^0-9]/g, '');
            const target = parseInt(targetText);
            const suffix = number.textContent.replace(/[0-9,]/g, '');
            number.dataset.suffix = suffix;
            // stagger based on position in grid
            const delay = (Array.from(document.querySelectorAll('.stat-item')).indexOf(entry.target) % 3) * 120;
            animateCounter(number, target, 1800, delay);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// Parallax light effect on hover for stat cards
document.querySelectorAll('.landing-stats .stat-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 100;
        const my = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mx', mx + '%');
        card.style.setProperty('--my', my + '%');
    });
});

// Reveal hero content on load and apply subtle parallax
window.addEventListener('load', () => {
    document.querySelectorAll('.hero .reveal-up').forEach(el => {
        requestAnimationFrame(() => el.classList.add('revealed'));
    });
});

// Enhanced hero parallax and navbar integration
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
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(25px)';
        navbar.style.borderBottomColor = 'rgba(37, 99, 235, 0.2)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottomColor = 'rgba(37, 99, 235, 0.1)';
    }
    
    // Hero opacity based on view
    hero.style.setProperty('--heroOpacity', (0.9 + inView * 0.1).toFixed(2));
});

// Button Ripple Effect
document.querySelectorAll('.primary-btn, .secondary-btn, .cta-btn').forEach(button => {
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

console.log('Nivedasoft Website Loaded Successfully ✨');