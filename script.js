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
    { nome: "Corte Criança", preco: "R$ 30", descricao: "Corte especial para crianças até 12 anos" },
    { nome: "Aparar a Barba", preco: "R$ 30", descricao: "Aparar e modelar a barba com precisão" },
    { nome: "Fazer a Barba", preco: "R$ 30", descricao: "Barba completa com toalha quente e produtos premium" }
  ],
  pacotes: [
    { titulo: "Pacote 1", desc: "Corte + Barba", preco: "R$ 60" },
    { titulo: "Pacote 2", desc: "Corte + Hidratação", preco: "R$ 50" },
    { titulo: "Pacote 3", desc: "Corte + Barba + Sobrancelha", preco: "R$ 75" },
    { titulo: "Pacote 4", desc: "Corte mensal (4x)", preco: "R$ 120" }
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