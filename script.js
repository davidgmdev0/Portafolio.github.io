






// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    mobileMenuButton.classList.toggle('active');
    
    // Añadir animación suave
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    } else {
        mobileMenu.style.maxHeight = '0';
    }
});

// Close mobile menu when clicking on links
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuButton.classList.remove('active');
        mobileMenu.style.maxHeight = '0';
    });
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
    
    // Añadir efecto de pulso al hacer clic
    backToTopButton.classList.add('animate-pulse');
    setTimeout(() => {
        backToTopButton.classList.remove('animate-pulse');
    }, 500);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Añadir offset para el header fijo
            const offsetTop = targetElement.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Nav link active state
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Animate progress bars when they come into view
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-value');
    
    progressBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (barPosition < screenPosition) {
            // Asegurar que la animación solo ocurra una vez
            if (!bar.classList.contains('animated')) {
                bar.style.width = bar.style.width;
                bar.classList.add('animated');
                
                // Añadir efecto de animación
                bar.style.transition = 'width 1.5s cubic-bezier(0.22, 0.61, 0.36, 1)';
            }
        }
    });
}

window.addEventListener('scroll', animateProgressBars);
// Initial call to check elements on page load
window.addEventListener('load', animateProgressBars);

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        let isValid = true;
        
        // Validar nombre
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Por favor, ingresa tu nombre');
            isValid = false;
        } else {
            clearError(nameInput);
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Por favor, ingresa un email válido');
            isValid = false;
        } else {
            clearError(emailInput);
        }
        
        // Validar mensaje
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Por favor, ingresa tu mensaje');
            isValid = false;
        } else {
            clearError(messageInput);
        }
        
        if (!isValid) return;
        
        // Simular envío del formulario
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Aquí normalmente enviarías los datos a un servidor
        setTimeout(() => {
            // Mostrar mensaje de éxito
            showNotification('¡Mensaje enviado con éxito! Te contactaré pronto.', 'success');
            
            // Restaurar botón
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Resetear formulario
            contactForm.reset();
        }, 2000);
    });
}

// Funciones auxiliares para el formulario
function showError(input, message) {
    clearError(input);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-red-500 text-xs mt-1';
    errorDiv.textContent = message;
    
    input.parentNode.appendChild(errorDiv);
    input.classList.add('border-red-500');
}

function clearError(input) {
    const errorDiv = input.parentNode.querySelector('.text-red-500');
    if (errorDiv) {
        errorDiv.remove();
    }
    input.classList.remove('border-red-500');
}

function showNotification(message, type = 'success') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-4 py-3 rounded-lg shadow-lg z-50 transform transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    notification.textContent = message;
    notification.style.transform = 'translateX(100%)';
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Animar salida después de 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Efectos de aparición para elementos al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.card, .section-title, .skill-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar opacidad y transformación para animación
document.querySelectorAll('.card, .section-title, .skill-card').forEach(element => {
    element.style.opacity = '0';
    element.style.tr@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
    --primary: #0f2b46;
    --secondary: #7c3aed;
    --accent: #f97316;
    --light: #f9fafb;
    --dark: #0f1724;
    --dark-lighter: #1e293b;
    --muted: #6b7280;
    --muted-light: #9ca3af;
    --card: #ffffff;
    --border-radius: 12px;
    --transition: all 0.3s ease;
    --shadow: 0 6px 20px rgba(2, 6, 23, 0.08);
    --shadow-hover: 0 12px 30px rgba(2, 6, 23, 0.12);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--light);
    color: var(--dark);
    scroll-behavior: smooth;
    line-height: 1.6;
}

.gradient-bg {
    background: linear-gradient(135deg, var(--primary) 85%, var(--secondary) 0%);
}

.gradient-text {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.card {
    transition: var(--transition);
    border-radius: var(--border-radius);
    overflow: hidden;
    background: var(--card);
    box-shadow: var(--shadow);
}

.card-hover:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
}

.skill-badge {
    transition: var(--transition);
    display: inline-block;
}

.skill-badge:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: var(--shadow);
}

.nav-link {
    position: relative;
    transition: color 0.3s ease;
    color: var(--dark);
}

.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    transition: width 0.3s ease;
    border-radius: 2px;
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary);
}

.typewriter {
    overflow: hidden;
    border-right: .15em solid var(--primary);
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: 
        typing 3.5s steps(40, end),
        blink-caret .75s step-end infinite;
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

@keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: var(--primary); }
}

.section-title {
    position: relative;
    display: inline-block;
    margin-bottom: 3rem;
}

.section-title::after {
    content: '';
    position: absolute;
    width: 60%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    bottom: -10px;
    left: 20%;
    border-radius: 2px;
}

.mobile-menu {
    transition: var(--transition);
    max-height: 0;
    overflow: hidden;
    background-color: var(--card);
}

.mobile-menu.active {
    max-height: 300px;
}

.project-image {
    transition: transform 0.5s ease;
}

.project-card:hover .project-image {
    transform: scale(1.05);
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    transition: var(--transition);
    box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: var(--border-radius);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.4);
}

.btn-outline {
    border: 2px solid var(--primary);
    color: var(--primary);
    transition: var(--transition);
    background: transparent;
    cursor: pointer;
    border-radius: var(--border-radius);
}

.btn-outline:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
}

input, textarea {
    transition: var(--transition);
    border: 1px solid var(--muted-light);
    border-radius: var(--border-radius);
    padding: 0.75rem;
    width: 100%;
}

input:focus, textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}

.floating {
    animation: float 6s ease-in-out infinite;
}
// Inicializar EmailJS
(function() {
  emailjs.init("TU_PUBLIC_KEY"); // 👈 reemplaza con tu Public Key
})();

// Contact Form
const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("TU_SERVICE_ID", "TU_TEMPLATE_ID", this)
      .then(() => {
        statusMsg.textContent = "✅ Mensaje enviado con éxito. ¡Gracias por contactarme!";
        statusMsg.className = "text-green-600 text-center text-sm mt-4";
        statusMsg.classList.remove("hidden");
        form.reset();
      }, (error) => {
        statusMsg.textContent = "❌ Error al enviar el mensaje. Intenta de nuevo.";
        statusMsg.className = "text-red-600 text-center text-sm mt-4";
        statusMsg.classList.remove("hidden");
        console.error("EmailJS Error:", error);
      });
  });
}

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("opacity-0", "invisible");
  } else {
    backToTopBtn.classList.add("opacity-0", "invisible");
  }
});

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
}

.progress-bar {
    height: 6px;
    border-radius: 3px;
    background-color: var(--muted-light);
    overflow: hidden;
}

.progress-value {
    height: 100%;
    border-radius: 3px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    transition: width 1s ease-in-out;
}

/* Mejoras de accesibilidad */
a:focus, button:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
}

/* Estilos para el texto con mejor contraste */
.text-gray-600 {
    color: var(--muted);
}

.text-gray-700 {
    color: var(--dark-lighter);
}

.text-gray-800 {
    color: var(--dark);
}

.bg-gray-50 {
    background-color: var(--light);
}

.bg-white {
    background-color: var(--card);
}

.bg-gray-800 {
    background-color: var(--dark);
}

.text-blue-100 {
    color: rgba(255, 255, 255, 0.9);
}

/* Mejoras para las tarjetas de habilidades */
.skill-card {
    border-left: 4px solid transparent;
    transition: var(--transition);
}

.skill-card:hover {
    border-left-color: var(--primary);
}

/* Mejora para el formulario de contacto */
.contact-info-item {
    transition: var(--transition);
    border-radius: var(--border-radius);
    padding: 1rem;
}

.contact-info-item:hover {
    background-color: rgba(249, 250, 251, 0.5);
}ansform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
// Ejecutar una vez al cargar la página
window.addEventListener('load', animateOnScroll);


// Ejecutar una vez al cargar la página
window.addEventListener('load', animateOnScroll);

// Inicializar EmailJS
(function() {
  emailjs.init("TU_PUBLIC_KEY"); // 👈 reemplaza con tu Public Key
})();

// Contact Form
const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("TU_SERVICE_ID", "TU_TEMPLATE_ID", this)
      .then(() => {
        statusMsg.textContent = "✅ Mensaje enviado con éxito. ¡Gracias por contactarme!";
        statusMsg.className = "text-green-600 text-center text-sm mt-4";
        statusMsg.classList.remove("hidden");
        form.reset();
      }, (error) => {
        statusMsg.textContent = "❌ Error al enviar el mensaje. Intenta de nuevo.";
        statusMsg.className = "text-red-600 text-center text-sm mt-4";
        statusMsg.classList.remove("hidden");
        console.error("EmailJS Error:", error);
      });
  });
}

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("opacity-0", "invisible");
  } else {
    backToTopBtn.classList.add("opacity-0", "invisible");
  }
});

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


