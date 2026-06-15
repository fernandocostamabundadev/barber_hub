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