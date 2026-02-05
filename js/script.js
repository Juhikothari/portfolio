// ===============================================
// THEME TOGGLE FUNCTIONALITY
// Dark/Light Mode with Persistence
// ===============================================

// Get theme toggle button and create it if it doesn't exist
function initThemeToggle() {
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    
    // Set initial icon based on current theme
    const currentTheme = getCurrentTheme();
    themeToggle.innerHTML = currentTheme === 'light' ? '🌙' : '☀️';
    
    // Add button to body
    document.body.appendChild(themeToggle);
    
    // Add event listener
    themeToggle.addEventListener('click', toggleTheme);
}

// Get current theme from localStorage or default to dark
function getCurrentTheme() {
    return localStorage.getItem('theme') || 'dark';
}

// Set theme on page load
function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    }
    
    // Update button icon
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'light' ? '🌙' : '☀️';
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
}

// Toggle between light and dark themes
function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Add transition class for smooth animation
    document.body.classList.add('theme-transitioning');
    
    setTheme(newTheme);
    
    // Remove transition class after animation
    setTimeout(() => {
        document.body.classList.remove('theme-transitioning');
    }, 300);
}

// Initialize theme on page load
function initTheme() {
    const savedTheme = getCurrentTheme();
    setTheme(savedTheme);
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's a valid anchor
            if (href !== '#' && href.length > 1) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Add scroll-based animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-out');
        observer.observe(section);
    });
}

// Add active state to contact cards on click
function initContactCards() {
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add active animation
            this.classList.add('clicked');
            
            // Remove after animation
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
}

// Add typing effect to hero title (optional enhancement)
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero h1');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';
    
    let index = 0;
    const typingSpeed = 100;
    
    function type() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 500);
}

// Counter animation for stats
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Animate number counting
function animateCounter(element) {
    const target = element.textContent.trim();
    const isDecimal = target.includes('.');
    
    let current = 0;
    let targetNum = parseFloat(target);
    const increment = isDecimal ? targetNum / 50 : Math.ceil(targetNum / 30);
    const duration = 1500;
    const stepTime = duration / (targetNum / increment);
    
    element.textContent = '0';
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= targetNum) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = isDecimal 
                ? current.toFixed(2) 
                : Math.floor(current).toString() + (target.includes('+') ? '+' : '');
        }
    }, stepTime);
}

// Add ripple effect on button clicks
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');
    
    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    button.appendChild(ripple);
}

// Initialize ripple effect for buttons
function initRippleEffect() {
    const buttons = document.querySelectorAll('.cta-button, .project-card, .contact-card');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
}

// Show scroll to top button
function initScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scroll-to-top';
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = '↑';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollButton);
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Core functionality
    initTheme();
    initThemeToggle();
    
    // Enhancement features
    initSmoothScroll();
    initScrollAnimations();
    initContactCards();
    initStatsCounter();
    initRippleEffect();
    initScrollToTop();
    
    // Optional: Uncomment to enable typing effect
    // initTypingEffect();
    
    console.log('Portfolio initialized successfully! 🚀');
});

// Handle theme preference changes from system
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}
