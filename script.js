// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    mobileMenuButton.classList.toggle('active');
    
    // Add smooth animation
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

if (backToTopButton) {
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
    });
}

// Scroll animation for sections
const animateOnScroll = () => {
    const sections = document.querySelectorAll('.section-title');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('fade-in-up');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);



// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("d1pDcdyxqMnYcw2p0"); 
})();

// Contact Form
const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the default form submission and page reload
        console.log("📨 Intentando enviar con EmailJS...");

        // Use the service and template IDs to send the form
        emailjs.sendForm("service_rblkbse", "template_w9i6wkp", this)
            .then(() => {
                console.log("✅ Email enviado correctamente");
                statusMsg.textContent = "✅ Mensaje enviado con éxito. ¡Gracias por contactarme!";
                statusMsg.className = "text-green-600 text-center text-sm mt-4";
                statusMsg.classList.remove("hidden");
                form.reset(); // Reset form fields
            }, (error) => {
                console.error("❌ Error en EmailJS:", error);
                statusMsg.textContent = "❌ Error al enviar el mensaje. Intenta de nuevo.";
                statusMsg.className = "text-red-600 text-center text-sm mt-4";
                statusMsg.classList.remove("hidden");
            });
    });
}
