// Create animated starfield background
function createStarfield() {
    const starsContainer = document.getElementById('stars-container');
    if (!starsContainer) return;
    
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2;
        const duration = 2 + Math.random() * 3;
        
        star.style.left = x + '%';
        star.style.top = y + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDuration = duration + 's';
        
        starsContainer.appendChild(star);
    }
}

// Role sequencing animation with typewriter effect
function roleSequenceAnimation() {
    const roles = ['SDET', 'QA Engineer', 'Test Automation Engineer'];
    const roleText = document.getElementById('role-text');
    let roleIndex = 0;
    let charIndex = 0;
    let isTyping = true;

    function typeRole() {
        const currentRole = roles[roleIndex];
        
        if (isTyping) {
            // Typing phase
            roleText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex > currentRole.length) {
                // Finished typing this role
                charIndex = 0;
                isTyping = false;
                // Wait before moving to next role
                setTimeout(typeRole, 1500);
            } else {
                // Continue typing
                setTimeout(typeRole, 80);
            }
        } else {
            // Move to next role
            roleIndex = (roleIndex + 1) % roles.length;
            isTyping = true;
            charIndex = 0;
            typeRole();
        }
    }

    typeRole();
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    createStarfield();
    roleSequenceAnimation();
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Success message
    alert(`Thank you, ${name}! I'll get back to you soon.`);
    contactForm.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('shadow-md');
    } else {
        navbar.classList.remove('shadow-md');
    }
});

// Active link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-blue-600', 'font-semibold');
        link.classList.add('text-gray-600');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.remove('text-gray-600');
            link.classList.add('text-blue-600', 'font-semibold');
        }
    });
});

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
