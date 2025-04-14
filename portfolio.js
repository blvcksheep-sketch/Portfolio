// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (!name || !email || !message) {
          alert('Please fill in all fields');
          return;
        }
        
        // In a real application, you would send this data to a server
        // For this demo, we'll just show a success message
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
      });
    }
  
    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function highlightNavOnScroll() {
      let scrollPosition = window.scrollY;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Initialize active state
    highlightNavOnScroll();
    
    // Optional: Add animation to skill bars
    function animateSkillBars() {
      const skillLevels = document.querySelectorAll('.skill-level');
      
      skillLevels.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0';
        
        setTimeout(() => {
          skill.style.transition = 'width 1s ease-in-out';
          skill.style.width = width;
        }, 300);
      });
    }
    
    // Run skill bar animation
    animateSkillBars();
  });