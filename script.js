// Site Data - Centralized configuration
const SITE_DATA = {
  nome: "Barbearia do Mulla",
  telefone: "(+258) 845384097",
  whatsappNumeroE164: "258845384097", // só dígitos com DDI
  enderecoLinha1: "Maputo, 491 — Matola",
  enderecoLinha2: "Mocambique — Moz, 1114",

  horarioHoje: "Seg a Sáb: 10h–21h",
  mapaQuery: "R.+Rangel+Pestana,+491,+Bangu,+Rio+de+Janeiro,+RJ+21820-096",
  ctaMensagem: "Olá! Quero agendar um horário na barbearia.",
  precos: [
    { nome: "Corte Adulto", preco: "R$ 35", descricao: "Corte personalizado com acabamento profissional" },
    { nome: "Corte ", preco: "R$ 15", descricao: "Corte especial para sombracelha" },
    { nome: "Corte Infantil", preco: "R$ 25", descricao: "Corte especial para crianças até 12 anos" },
    { nome: "Aparar a Barba", preco: "R$ 18", descricao: "Aparar e modelar a barba com precisão" },
    { nome: "Renovacao", preco: "R$ 10", descricao: "Renovamos o corte com precisão" },
    { nome: "Fazer a Barba", preco: "R$ 30", descricao: "Barba completa com toalha quente e produtos premium" }
  ],
  pacotes: [
    { titulo: "Pacote 1", desc: "Corte + Barba", preco: "R$ 60" },
    { titulo: "Pacote 2", desc: "Corte + Hidratação", preco: "R$ 50" },
    { titulo: "Pacote 3", desc: "Corte + Barba + Sobrancelha", preco: "R$ 75" },
    { titulo: "Pacote 4", desc: "Sobrancelha + corte", preco: "R$ 45" },
    { titulo: "Pacote 5", desc: "combo-Mulla", preco: "R$ 110" },
    { titulo: "Pacote 6", desc: "Corte mensal (4x)", preco: "R$ 120" }
  ]
};

// Gallery Images 
const galleryImages = [
  { url: './assets/img/work-img-1.png', alt: 'Barbeiro trabalhando - Profissionalismo' },
  { url: './assets/img/work-img-2.png', alt: 'Barbeiro trabalhando - Profissionalismo' },
  { url: './assets/img/work-img-3.png', alt: 'Barbeiro trabalhando - Profissionalismo' },
  { url: './assets/img/work-img-4.png', alt: 'Barbeiro trabalhando - Profissionalismo' },
  { url: './assets/img/work-img-5.png', alt: 'Barbeiro trabalhando - Profissionalismo' },
  { url: './assets/img/work-img-6.png', alt: 'Barbeiro trabalhando - Profissionalismo' },
  { url: './assets/img/work-img-7.png', alt: 'Barbeiro trabalhando - Profissionalismo' },
  { url: './assets/img/work-img-8.png', alt: 'Barbeiro trabalhando - Profissionalismo' },
  { url: './assets/img/work-img-9.png', alt: 'Barbeiro trabalhando - Profissionalismo' },
  { url: './assets/img/work-img-10.png', alt: 'Barbeiro trabalhando - Profissionalismo' },
];

// DOM Elements
const elements = {
  navToggle: document.getElementById('nav-toggle'),
  navMenu: document.getElementById('nav-menu'),
  navClose: document.getElementById('nav-close'),
  header: document.getElementById('header'),
  lightbox: document.getElementById('lightbox'),
  lightboxImage: document.getElementById('lightbox-image'),
  lightboxClose: document.getElementById('lightbox-close')
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeHeader();
  initializeWhatsAppLinks();
  initializeContent();
  initializeGallery();
  initializeLightbox();
  initializeSmoothScroll();
});

// Navigation Menu Functions
function initializeNavigation() {
  if (elements.navToggle && elements.navMenu) {
    elements.navToggle.addEventListener('click', toggleMenu);
  }
  
  if (elements.navClose) {
    elements.navClose.addEventListener('click', closeMenu);
  }
  
  // Close menu when clicking on nav links
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (elements.navMenu && 
        elements.navMenu.classList.contains('active') && 
        !elements.navMenu.contains(e.target) && 
        !elements.navToggle.contains(e.target)) {
      closeMenu();
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && elements.navMenu && elements.navMenu.classList.contains('active')) {
      closeMenu();
    }
  });
}

function toggleMenu() {
  if (elements.navMenu) {
    const isActive = elements.navMenu.classList.contains('active');
    
    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  }
}

function openMenu() {
  if (elements.navMenu && elements.navToggle) {
    elements.navMenu.classList.add('active');
    elements.navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    
    // Focus trap
    const firstFocusable = elements.navMenu.querySelector('a, button');
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }
}

function closeMenu() {
  if (elements.navMenu && elements.navToggle) {
    elements.navMenu.classList.remove('active');
    elements.navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

// Header scroll behavior
function initializeHeader() {
  if (!elements.header) return;
  
  let lastScrollTop = 0;
  const headerHeight = elements.header.offsetHeight;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > headerHeight) {
      elements.header.classList.add('is-scrolled');
    } else {
      elements.header.classList.remove('is-scrolled');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

// WhatsApp Links Setup
function initializeWhatsAppLinks() {
  const whatsappLinks = [
    'telefone-link',
    'contato-whatsapp', 
    'btn-agendar-whatsapp',
    'footer-whatsapp',
    'whatsapp-float'
  ];
  
  const whatsappUrl = `https://wa.me/${SITE_DATA.whatsappNumeroE164}?text=${encodeURIComponent(SITE_DATA.ctaMensagem)}`;
  
  whatsappLinks.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.href = whatsappUrl;
      element.setAttribute('target', '_blank');
      element.setAttribute('rel', 'noopener noreferrer');
    }
  });
  
  // Add WhatsApp click handlers to service and package buttons
  const serviceButtons = document.querySelectorAll('.service__button, .package__button');
  serviceButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  });
}

// Content Population
function initializeContent() {
  // Populate contact info
  const enderecoLinha1 = document.getElementById('endereco-linha1');
  const enderecoLinha2 = document.getElementById('endereco-linha2');
  const horarioHoje = document.getElementById('horario-hoje');
  
  if (enderecoLinha1) enderecoLinha1.textContent = SITE_DATA.enderecoLinha1;
  if (enderecoLinha2) enderecoLinha2.textContent = SITE_DATA.enderecoLinha2;
  if (horarioHoje) horarioHoje.textContent = SITE_DATA.horarioHoje;
  
  // Populate phone links
  const phoneElements = document.querySelectorAll('[id*="telefone"], [id*="whatsapp"]');
  phoneElements.forEach(element => {
    if (element.tagName === 'A') {
      element.textContent = SITE_DATA.telefone;
    }
  });
  
  // Generate services
  generateServices();
  
  // Generate packages
  generatePackages();
}

// Services Generation
function generateServices() {
  const container = document.getElementById('servicos-container');
  if (!container) return;
  
  const servicesHTML = SITE_DATA.precos.map(servico => `
    <div class="service">
      <div class="service__icon">
        ${getServiceIcon(servico.nome)}
      </div>
      <h3 class="service__title">${servico.nome}</h3>
      <div class="service__price">${servico.preco}</div>
      <p class="service__description">${servico.descricao}</p>
    </div>
  `).join('');
  
  container.innerHTML = servicesHTML;
}

// Packages Generation
function generatePackages() {
  const container = document.getElementById('pacotes-container');
  if (!container) return;
  
  const packagesHTML = SITE_DATA.pacotes.map(pacote => `
    <div class="package">
      <h3 class="package__title">${pacote.titulo}</h3>
      <p class="package__description">${pacote.desc}</p>
      <div class="package__price">${pacote.preco}</div>
      <button class="btn btn--primary package__button">Agendar</button>
    </div>
  `).join('');
  
  container.innerHTML = packagesHTML;
  
  // Re-initialize WhatsApp links for new buttons
  initializeWhatsAppLinks();
}

// Gallery Functions
function initializeGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;
  
  const galleryHTML = galleryImages.map((image, index) => `
    <div class="gallery__item" data-index="${index}">
      <img src="${image.url}" alt="${image.alt}" loading="lazy">
    </div>
  `).join('');
  
  galleryGrid.innerHTML = galleryHTML;
  
  // Add click handlers for lightbox
  const galleryItems = galleryGrid.querySelectorAll('.gallery__item');
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const index = parseInt(this.dataset.index);
      openLightbox(index);
    });
    
    // Add keyboard support
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const index = parseInt(this.dataset.index);
        openLightbox(index);
      }
    });
  });
}

// Lightbox Functions
function initializeLightbox() {
  if (elements.lightboxClose) {
    elements.lightboxClose.addEventListener('click', closeLightbox);
  }
  
  if (elements.lightbox) {
    elements.lightbox.addEventListener('click', function(e) {
      if (e.target === this) {
        closeLightbox();
      }
    });
  }
  
  // Close lightbox on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && elements.lightbox && elements.lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

function openLightbox(index) {
  if (!elements.lightbox || !elements.lightboxImage || !galleryImages[index]) return;
  
  const image = galleryImages[index];
  elements.lightboxImage.src = image.url;
  elements.lightboxImage.alt = image.alt;
  elements.lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Focus the close button
  if (elements.lightboxClose) {
    elements.lightboxClose.focus();
  }
}

function closeLightbox() {
  if (!elements.lightbox) return;
  
  elements.lightbox.classList.remove('active');
  document.body.style.overflow = '';
  
  // Clear image src to save memory
  if (elements.lightboxImage) {
    elements.lightboxImage.src = '';
    elements.lightboxImage.alt = '';
  }
}

// Smooth Scroll for anchor links
function initializeSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just # or empty
      if (!href || href === '#') {
        e.preventDefault();
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        // Close mobile menu if open
        closeMenu();
        
        // Calculate offset for fixed header
        const headerHeight = elements.header ? elements.header.offsetHeight : 0;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Service Icon Generator
function getServiceIcon(serviceName) {
  const icons = {
    'Corte Adulto': `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.76 4.84L4.96 3.04L3.12 4.88L4.92 6.68C5.33 6.27 5.81 5.97 6.35 5.82L6.76 4.84Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.5 10.5C9.88 11.88 11.62 12.5 13.5 12.5S17.12 11.88 18.5 10.5L12 4L8.5 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.24 4.84L19.04 3.04L20.88 4.88L19.08 6.68C18.67 6.27 18.19 5.97 17.65 5.82L17.24 4.84Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    'Corte Criança': `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/>
        <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    'Aparar a Barba': `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.38 8.53C20.54 8.13 19.15 6.75 18.55 6.15C17.85 5.45 16.65 5.45 15.95 6.15L5.95 16.15C5.65 16.45 5.65 16.95 5.95 17.25L6.75 18.05C7.05 18.35 7.55 18.35 7.85 18.05L17.85 8.05C18.45 7.45 19.85 6.05 20.38 8.53Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 12L12 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    'Fazer a Barba': `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.24 12.24C21.15 11.33 21.15 9.87 20.24 8.96L15.04 3.76C14.13 2.85 12.67 2.85 11.76 3.76L5.04 10.48C4.13 11.39 4.13 12.85 5.04 13.76L10.24 18.96C11.15 19.87 12.61 19.87 13.52 18.96L20.24 12.24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 15L15 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 18L6 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
  };
  
  return icons[serviceName] || icons['Corte Adulto'];
}

// Performance Optimization - Lazy Loading
function initializeLazyLoading() {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('fade-in');
          observer.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

// Error Handling for Images
document.addEventListener('error', function(e) {
  if (e.target.tagName === 'IMG') {
    e.target.style.display = 'none';
    console.warn('Failed to load image:', e.target.src);
  }
}, true);

// Accessibility Enhancements
function initializeAccessibility() {
  // Add skip link
  const skipLink = document.createElement('a');
  skipLink.href = '#main';
  skipLink.textContent = 'Pular para o conteúdo principal';
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--color-dark);
    color: var(--color-white);
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 9999;
    transition: top 0.2s;
  `;
  
  skipLink.addEventListener('focus', function() {
    this.style.top = '6px';
  });
  
  skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
  });
  
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Add main landmark
  const main = document.querySelector('main');
  if (main) {
    main.id = 'main';
  }
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initializeAccessibility);

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}