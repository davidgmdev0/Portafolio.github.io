






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
});<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>David | Desarrollador Web</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="text-custom-dark bg-custom-light">
    <!-- Navbar -->
    <header>
        <nav class="bg-custom-card shadow-md sticky top-0 z-50">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between items-center py-3">
                    <div class="flex items-center space-x-3">
                        <div class="text-2xl font-bold gradient-text">DGM</div>
                        <span class="hidden md:block font-semibold text-custom-dark">David | Portafolio</span>
                    </div>
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="#home" class="nav-link py-2 px-3 text-custom-dark-lighter">Inicio</a>
                        <a href="#about" class="nav-link py-2 px-3 text-custom-dark-lighter">Sobre mí</a>
                        <a href="#skills" class="nav-link py-2 px-3 text-custom-dark-lighter">Habilidades</a>
                        <a href="#projects" class="nav-link py-2 px-3 text-custom-dark-lighter">Proyectos</a>
                        <a href="#contact" class="nav-link py-2 px-3 text-custom-dark-lighter">Contacto</a>
                    </div>
                    <div class="md:hidden">
                        <button id="mobile-menu-button" class="p-2 focus:outline-none focus:ring-2 focus:ring-custom-primary rounded-md">
                            <svg class="w-6 h-6 text-custom-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Mobile menu -->
            <div id="mobile-menu" class="mobile-menu md:hidden bg-custom-card shadow-lg">
                <a href="#home" class="block py-3 px-6 text-custom-dark-lighter hover:bg-custom-primary/10 transition-colors">Inicio</a>
                <a href="#about" class="block py-3 px-6 text-custom-dark-lighter hover:bg-custom-primary/10 transition-colors">Sobre mí</a>
                <a href="#skills" class="block py-3 px-6 text-custom-dark-lighter hover:bg-custom-primary/10 transition-colors">Habilidades</a>
                <a href="#projects" class="block py-3 px-6 text-custom-dark-lighter hover:bg-custom-primary/10 transition-colors">Proyectos</a>
                <a href="#contact" class="block py-3 px-6 text-custom-dark-lighter hover:bg-custom-primary/10 transition-colors">Contacto</a>
            </div>
        </nav>
    </header>

    <main>
        <!-- Hero Section -->
        <section id="home" class="gradient-bg text-white py-20 lg:py-28">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <div class="md:w-1/2 mb-10 md:mb-0">
                        <p class="text-white/90 mb-2 font-medium">¡Hola! Bienvenido a mi portafolio</p>
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Soy <span class="text-custom-accent">David Giraldo</span></h1>
                        <div class="typewriter text-xl md:text-2xl font-semibold mb-6">
                            Desarrollador Web | Python
                        </div>
                        <p class="text-lg text-white/90 mb-8">Transformo ideas en soluciones digitales con atención al detalle y enfoque en resultados.</p>
                        <div class="flex flex-wrap gap-4">
                            <a href="#contact" class="btn-primary px-6 py-3 rounded-full font-semibold inline-flex items-center">
                                <i class="fas fa-paper-plane mr-2"></i> Contactame
                            </a>
                            <a href="#projects" class="btn-outline px-6 py-3 rounded-full font-semibold inline-flex items-center">
                                <i class="fas fa-code mr-2"></i> Ver Proyectos
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 flex justify-center">
                        <div class="relative">
                            <div class="w-64 h-64 md:w-80 md:h-80 bg-custom-primary rounded-full overflow-hidden border-4 border-white shadow-2xl floating">
                                <img src="perfilnitida.png" alt="Foto de perfil de David Giraldo" class="w-full h-full object-cover object-[30%_center]" />
                            </div>
                            <div class="absolute -bottom-2 -right-2 bg-custom-accent text-white px-4 py-2 rounded-full font-bold shadow-lg">
                                <span class="animate-pulse text-green-400">●</span> Disponible para freelance
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 bg-custom-card">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold text-custom-dark mb-4 section-title">Sobre <span class="gradient-text">Mí</span></h2>
                    <p class="text-custom-muted max-w-2xl mx-auto">Conoce más sobre mi trayectoria, experiencia y lo que me motiva</p>
                </div>
                
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-2/5 mb-8 md:mb-0 flex justify-center">
                        <div class="w-64 h-64 rounded-full overflow-hidden border-4 border-custom-primary/20 shadow-lg">
                            <div class="w-full h-full bg-gradient-to-br from-custom-light to-custom-primary/10 flex items-center justify-center">
                                <i class="fas fa-user-tie text-5xl text-custom-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-3/5 md:pl-12">
                        <h3 class="text-2xl font-semibold text-custom-dark mb-4">Profesional en Transición al Mundo Tech</h3>
                        <p class="text-custom-muted mb-6">
                            Soy tecnólogo apasionado, con una sólida experiencia como delineante de arquitectura y una base en programación. Mi atención al detalle y capacidad para resolver problemas, cultivadas en mi carrera anterior, ahora las aplico al desarrollo web y al estudio de la ciberseguridad.
                        </p>
                        <p class="text-custom-muted mb-6">
                            Poseo conocimientos en <span class="font-semibold text-custom-primary">HTML, CSS, JavaScript y Python</span>, y estoy profundizando mis habilidades en el fascinante mundo de la ciberseguridad. Mi objetivo es combinar mi experiencia con estas nuevas habilidades para contribuir en proyectos desafiantes y seguir creciendo profesionalmente.
                        </p>
                        <a href="#contact" class="btn-primary px-6 py-3 rounded-full font-semibold inline-flex items-center">
                            <i class="fas fa-comments mr-2"></i> Hablemos
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="py-20 bg-custom-light">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold text-custom-dark mb-4 section-title">Mis <span class="gradient-text">Habilidades</span></h2>
                    <p class="text-custom-muted max-w-2xl mx-auto">Tecnologías y herramientas que utilizo para crear soluciones digitales de calidad.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Frontend Skills -->
                    <div class="card p-6 shadow-md card-hover skill-card">
                        <div class="text-custom-primary text-4xl mb-4 flex items-center">
                            <i class="fas fa-laptop-code mr-3"></i>
                            <h3 class="text-xl font-semibold">Frontend</h3>
                        </div>
                        <div class="space-y-4">
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm font-medium">HTML5/CSS3</span>
                                    <span class="text-sm font-medium">85%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-value" style="width: 85%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm font-medium">JavaScript</span>
                                    <span class="text-sm font-medium">75%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-value" style="width: 75%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm font-medium">Tailwind CSS</span>
                                    <span class="text-sm font-medium">80%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-value" style="width: 80%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Backend Skills -->
                    <div class="card p-6 shadow-md card-hover skill-card">
                        <div class="text-custom-secondary text-4xl mb-4 flex items-center">
                            <i class="fas fa-server mr-3"></i>
                            <h3 class="text-xl font-semibold">Backend</h3>
                        </div>
                        <div class="space-y-4">
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm font-medium">Python</span>
                                    <span class="text-sm font-medium">70%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-value" style="width: 70%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm font-medium">Node.js</span>
                                    <span class="text-sm font-medium">65%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-value" style="width: 65%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm font-medium">APIs REST</span>
                                    <span class="text-sm font-medium">70%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-value" style="width: 70%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!--  Skills -->
                    <div class="card p-6 shadow-md card-hover skill-card">
                        <div class="text-custom-accent text-4xl mb-4 flex items-center">
                            <i class="fas fa-shield-alt mr-3"></i>
                            <h3 class="text-xl font-semibold">Bases de datos y gestión de información</h3>
                        </div>
                        <div class="space-y-4">
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm font-medium">Administración y manejo de datos</span>
                                    <span class="text-sm font-medium">60%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-value" style="width: 60%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm font-medium">Backup y restauración de bases</span>
                                    <span class="text-sm font-medium">65%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-value" style="width: 65%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm font-medium">Integración de datos desde APIs o CSV/Excel hacia la base</span>
                                    <span class="text-sm font-medium">70%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-value" style="width: 70%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-20 bg-custom-card">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold text-custom-dark mb-4 section-title">Mis <span class="gradient-text">Proyectos</span></h2>
                    <p class="text-custom-muted max-w-2xl mx-auto">Algunos de mis trabajos recientes que demuestran mis habilidades y experiencia.</p>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Project 1 -->
                    <div class="card overflow-hidden shadow-lg card-hover project-card">
                        <div class="h-48 flex items-center justify-center overflow-hidden">
                            <div class="project-image w-full h-full flex items-center justify-center">
                                <img src="musik.png" alt="Vista previa de la app de reproductor de música" class="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-custom-dark mb-2">Reproductor de Música</h3>
                            <p class="text-custom-muted mb-4">Un reproductor de música interactivo con control de listas y efectos visuales, construido con JavaScript puro.</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="skill-badge bg-custom-accent/10 text-custom-accent px-3 py-1 rounded-full text-xs">JavaScript</span>
                                <span class="skill-badge bg-custom-accent/10 text-custom-accent px-3 py-1 rounded-full text-xs">CSS</span>
                                <span class="skill-badge bg-custom-accent/10 text-custom-accent px-3 py-1 rounded-full text-xs">HTML</span>
                                <span class="skill-badge bg-custom-accent/10 text-custom-accent px-3 py-1 rounded-full text-xs">DOM</span>
                            </div>
                            <div class="flex space-x-3">
                                <a href="https://davidgmdvs.github.io/githubMusik/" target="_blank" class="text-custom-accent hover:text-custom-accent-dark font-medium flex items-center transition-colors">
                                    <i class="fas fa-external-link-alt mr-2"></i> Ver Demo
                                </a>
                                <a href="URL_DEL_REPOSITORIO_DE_GITHUB" target="_blank" class="text-custom-muted hover:text-custom-dark font-medium flex items-center transition-colors">
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project 2 -->
                    <div class="card overflow-hidden shadow-lg card-hover project-card">
                        <div class="h-48 bg-custom-secondary flex items-center justify-center overflow-hidden">
                            <div class="project-image w-full h-full flex items-center justify-center">
                                <i class="fas fa-shield-alt text-6xl text-white"></i>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-custom-dark mb-2">Automatizacion de tareas </h3>
                            <p class="text-custom-muted mb-4">Script de Python para organizar automaticamente los archivos de descarga.</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="skill-badge bg-custom-secondary/10 text-custom-secondary px-3 py-1 rounded-full text-xs">Python</span>
                            </div>
                            <div class="flex space-x-3">
                                <a href="https://davidgmdvs.github.io/Automatization/" class="text-custom-secondary hover:text-custom-secondary-dark font-medium flex items-center transition-colors">
                                    <i class="fas fa-external-link-alt mr-2"></i> Ver Demo
                                </a>
                                <a href="#" class="text-custom-muted hover:text-custom-dark font-medium flex items-center transition-colors">
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project 3 -->
                    <div class="card overflow-hidden shadow-lg card-hover project-card">
                        <div class="h-48 bg-custom-accent flex items-center justify-center overflow-hidden">
                            <div class="project-image w-full h-full flex items-center justify-center">
                                <i class="fas fa-shopping-cart text-6xl text-white"></i>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-custom-dark mb-2">E-commerce Básico</h3>
                            <p class="text-custom-muted mb-4">Tienda online con carrito de compras, construida con JavaScript puro.</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="skill-badge bg-custom-accent/10 text-custom-accent px-3 py-1 rounded-full text-xs">JavaScript</span>
                                <span class="skill-badge bg-custom-accent/10 text-custom-accent px-3 py-1 rounded-full text-xs">LocalStorage</span>
                                <span class="skill-badge bg-custom-accent/10 text-custom-accent px-3 py-1 rounded-full text-xs">DOM</span>
                                <span class="skill-badge bg-custom-accent/10 text-custom-accent px-3 py-1 rounded-full text-xs">Responsive</span>
                            </div>
                            <div class="flex space-x-3">
                                <a href="https://davidgmdvs.github.io/BiciShop/" class="text-custom-accent hover:text-custom-accent-dark font-medium flex items-center transition-colors">
                                    <i class="fas fa-external-link-alt mr-2"></i> Ver Demo
                                </a>
                                <a href="#" class="text-custom-muted hover:text-custom-dark font-medium flex items-center transition-colors">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-12">
                    <a href="#" class="btn-outline px-6 py-3 rounded-full font-medium inline-flex items-center">
                        Ver más proyectos
                        <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
        
        <!-- Contact Section (Funcional) -->
        <section id="contact" class="py-20 bg-custom-light">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold text-custom-dark mb-4 section-title">
                        Contácta<span class="gradient-text">me</span>
                    </h2>
                    <p class="text-custom-muted max-w-2xl mx-auto">
                        ¿Tienes un proyecto en mente o necesitas ayuda con tu sitio web? Envíame un mensaje y hablemos sobre cómo puedo ayudarte.
                    </p>
                </div>
                
                <div class="flex flex-col lg:flex-row gap-12">
                    <!-- FORMULARIO -->
                    <form id="contact-form" class="space-y-6 bg-custom-card p-8 rounded-xl shadow-md contact-form lg:w-1/2">
                        <div>
                            <label for="name" class="block text-sm font-medium text-custom-dark-lighter mb-2">Nombre</label>
                            <input type="text" id="name" name="from_name" class="w-full px-4 py-3 border border-custom-muted-light rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-primary" placeholder="Tu nombre" required>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-custom-dark-lighter mb-2">Email</label>
                            <input type="email" id="email" name="from_email" class="w-full px-4 py-3 border border-custom-muted-light rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-primary" placeholder="tu@email.com" required>
                        </div>
                        <div>
                            <label for="subject" class="block text-sm font-medium text-custom-dark-lighter mb-2">Asunto</label>
                            <input type="text" id="subject" name="subject" class="w-full px-4 py-3 border border-custom-muted-light rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-primary" placeholder="¿En qué puedo ayudarte?">
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-custom-dark-lighter mb-2">Mensaje</label>
                            <textarea id="message" name="message" rows="5" class="w-full px-4 py-3 border border-custom-muted-light rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-primary" placeholder="Describe tu proyecto o consulta..." required></textarea>
                        </div>
                        <button type="submit" class="btn-primary w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center">
                            <i class="fas fa-paper-plane mr-2"></i> Enviar Mensaje
                        </button>
                        <!-- Mensaje de estado -->
                        <p id="form-status" class="hidden"></p>
                    </form>
                    
                    <!-- INFO DE CONTACTO -->
                    <div class="lg:w-1/2">
                        <div class="bg-custom-card p-8 rounded-xl shadow-lg h-full">
                            <h3 class="text-xl font-semibold text-custom-dark mb-6">Información de Contacto</h3>
                            <div class="space-y-6">
                                <div class="flex items-start contact-info-item">
                                    <div class="flex-shrink-0 bg-custom-primary/10 p-3 rounded-full text-custom-primary">
                                        <i class="fas fa-envelope text-lg"></i>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-sm font-medium text-custom-muted">Email</h4>
                                        <p class="text-base text-custom-dark">davidgmdevs@gmail.com</p>
                                    </div>
                                </div>
                                <div class="flex items-start contact-info-item">
                                    <div class="flex-shrink-0 bg-custom-primary/10 p-3 rounded-full text-custom-primary">
                                        <i class="fab fa-linkedin-in text-lg"></i>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-sm font-medium text-custom-muted">LinkedIn</h4>
                                        <p class="text-base text-custom-dark">linkedin.com/in/davidgmdev</p>
                                    </div>
                                </div>
                                <div class="flex items-start contact-info-item">
                                    <div class="flex-shrink-0 bg-custom-primary/10 p-3 rounded-full text-custom-primary">
                                        <i class="fab fa-github text-lg"></i>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-sm font-medium text-custom-muted">GitHub</h4>
                                        <p class="text-base text-custom-dark">github.com/davidgmdev0</p>
                                    </div>
                                </div>
                                <div class="flex items-start contact-info-item">
                                    <div class="flex-shrink-0 bg-custom-primary/10 p-3 rounded-full text-custom-primary">
                                        <i class="fas fa-map-marker-alt text-lg"></i>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-sm font-medium text-custom-muted">Ubicación</h4>
                                        <p class="text-base text-custom-dark">Colombia</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-8 pt-6 border-t border-custom-muted-light">
                                <h3 class="text-xl font-semibold text-custom-dark mb-4">Disponibilidad para Freelance</h3>
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                                    <div class="ml-2">
                                        <p class="text-custom-muted">Actualmente disponible para nuevos proyectos</p>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <p class="text-custom-muted">Tiempo de respuesta estimado: <span class="font-medium">24-48 horas</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    <!-- Pie de página -->
    <footer class="bg-custom-dark text-white py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-6 md:mb-0 text-center md:text-left">
                    <div class="text-2xl font-bold text-custom-primary">David Giraldo Molina</div>
                    <p class="text-custom-muted-light mt-2">Desarrollador Web / python </p>
                </div>
                <div class="flex space-x-6">
                    <a href="#" class="text-custom-muted-light hover:text-white transition-colors p-2 bg-custom-dark-lighter rounded-full social-icon">
                        <i class="fab fa-linkedin-in text-xl"></i>
                    </a>
                    <a href="#" class="text-custom-muted-light hover:text-white transition-colors p-2 bg-custom-dark-lighter rounded-full social-icon">
                        <i class="fab fa-github text-xl"></i>
                    </a>
                    <a href="#" class="text-custom-muted-light hover:text-white transition-colors p-2 bg-custom-dark-lighter rounded-full social-icon">
                        <i class="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" class="text-custom-muted-light hover:text-white transition-colors p-2 bg-custom-dark-lighter rounded-full social-icon">
                        <i class="fab fa-instagram text-xl"></i>
                    </a>
                </div>
            </div>
            <div class="border-t border-custom-dark-lighter mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-custom-muted-light text-sm mb-4 md:mb-0">&copy; 2023 David Giraldo Molina. Todos los derechos reservados.</p>
                <div class="flex space-x-6">
                    <a href="#" class="text-custom-muted-light hover:text-white text-sm transition-colors">Política de Privacidad</a>
                    <a href="#" class="text-custom-muted-light hover:text-white text-sm transition-colors">Términos de Servicio</a>
                </div>
            </div>
        </div>
    </footer>
    
    <!-- Agregamos el script de EmailJS y el script personalizado aquí -->
    <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
    <script src="script.js"></script>
</body>
</html>

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
            isVal// Inicializar EmailJS
(function() {
  emailjs.init("d1pDcdyxqMnYcw2p0"); // 👈 tu Public Key
})();

const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_rblkbse", "template_7rzysiu", this)
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
}id = false;
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
  emailjs.init("d1pDcdyxqMnYcw2p0"); // 👈 reemplaza con tu Public Key
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
window.addEventListener('load', ani// Inicializar EmailJS
(function() {
  emailjs.init("d1pDcdyxqMnYcw2p0"); // 👈 tu Public Key
})();

// Contact Form
const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("📨 Intentando enviar con EmailJS...");

    emailjs.sendForm("service_rblkbse", "template_7rzysiu", this)
      .then(() => {
        console.log("✅ Email enviado correctamente");
        statusMsg.textContent = "✅ Mensaje enviado con éxito. ¡Gracias por contactarme!";
        statusMsg.className = "text-green-600 text-center text-sm mt-4";
        statusMsg.classList.remove("hidden");
        form.reset();
      }, (error) => {
        console.error("❌ Error en EmailJS:", error);
        statusMsg.textContent = "❌ Error al enviar el mensaje. Intenta de nuevo.";
        statusMsg.className = "text-red-600 text-center text-sm mt-4";
        statusMsg.classList.remove("hidden");
      });
  });
}

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove("opacity-0", "invisible");
    } else {
      backToTopBtn.classList.add("opacity-0", "invisible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
mateOnScroll);

// Inicializar EmailJS con tu Public Key
(function() {
    emailjs.init("d1pDcdyxqMnYcw2p0"); 
})();

// Formulario de Contacto
const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío predeterminado del formulario y la recarga de la página
        console.log("📨 Intentando enviar con EmailJS...");

        // Usar los IDs de servicio y plantilla para enviar el formulario
        emailjs.sendForm("service_rblkbse", "template_w9i6wkp", this)
            .then(() => {
                console.log("✅ Email enviado correctamente");
                statusMsg.textContent = "✅ Mensaje enviado con éxito. ¡Gracias por contactarme!";
                statusMsg.className = "text-green-600 text-center text-sm mt-4";
                statusMsg.classList.remove("hidden");
                form.reset(); // Restablece los campos del formulario
            }, (error) => {
                console.error("❌ Error en EmailJS:", error);
                statusMsg.textContent = "❌ Error al enviar el mensaje. Intenta de nuevo.";
                statusMsg.className = "text-red-600 text-center text-sm mt-4";
                statusMsg.classList.remove("hidden");
            });
    });
}
