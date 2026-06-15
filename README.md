# Barbearia do Mulla - Site One-Page

Um site profissional e moderno para a Barbearia do Mulla, desenvolvido com HTML5, CSS3 e JavaScript vanilla. O site é totalmente responsivo e otimizado para conversões via WhatsApp.

## 🚀 Características

- **Design Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Performance Otimizada**: Carregamento rápido com imagens otimizadas
- **SEO Friendly**: Meta tags e dados estruturados implementados
- **Acessibilidade**: Segue as melhores práticas de acessibilidade web
- **Integração WhatsApp**: Links diretos para agendamento via WhatsApp
- **Google Maps**: Mapa interativo com localização da barbearia

## 📁 Estrutura de Arquivos

```
barbearia/
├── index.html     # Estrutura da pagina
├── styles.css     # Estilos 
├── script.js      # Logica
├── README.md      # Documentacao
└── assets/        # Pasta para imagens (criar conforme necessário)
    └──img/        # Todas imagens usadas 
```

## ⚙️ Como Editar o Conteúdo

### 1. Dados da Barbearia

Todos os dados principais estão centralizados no objeto `SITE_DATA` no arquivo `script.js`:

```javascript
const SITE_DATA = {
  nome: "Barbearia do Mulla",
  telefone: "(+258) 845384097",
  whatsappNumeroE164: "258845384097", // só dígitos com DDI
  enderecoLinha1: "Maputo, 491 — Matola",
  enderecoLinha2: "Mocambique — Moz, 1114",
  ctaMensagem: "Olá! Quero agendar um horário na barbearia.",
  horarioHoje: "Seg a Sáb: 10h–21h",
  ctaMensagem: "Olá! Quero agendar um horário na barbearia.",
  // ... outros dados
};
```

### 2. Serviços e Preços

Para alterar os serviços, edite o array `precos` no `SITE_DATA`:

```javascript
precos: [
  { nome: "Corte Adulto", preco: "R$ 35", descricao: "Descrição do serviço" },
  // Adicione mais serviços conforme necessário
]
```

### 3. Pacotes Promocionais

Edite o array `pacotes` para modificar os pacotes oferecidos:

```javascript
pacotes: [
  { titulo: "Pacote 1", desc: "Corte + Barba", preco: "R$ 60" },
  // Adicione mais pacotes conforme necessário
]
```

### 4. Galeria de Imagens

As imagens da galeria estão definidas no array `galleryImages` em `script.js`. Substitua pelas suas próprias imagens:

```javascript
const galleryImages = [
  { url: 'caminho/para/sua/imagem1.jpg', alt: 'Descrição da imagem' },
  // Adicione mais imagens (recomendado: 9 imagens para grade 3x3)
];
```

## 🎨 Personalização Visual

### Cores

As cores são definidas como variáveis CSS no arquivo `styles.css`:

```css
:root {
  --color-primary: #A37A57;        /* Marrom médio */
  --color-primary-dark: #8B6342;   /* Marrom escuro */
  --color-secondary: #F5EFE6;      /* Bege/areia */
  --color-dark: #0E0E0E;           /* Preto */
  --color-white: #FFFFFF;          /* Branco */
}
```

### Tipografia

O site usa duas fontes principais:
- **Poppins**: Para textos e interface
- **Merriweather**: Para títulos e destaques

## 📱 Como Configurar o WhatsApp

1. **Número no Formato E.164**: No `SITE_DATA`, configure o `whatsappNumeroE164` com:
   - DDI do Brasil: +258
   - DDD: +258 (Mocambique)
   - Número: 845384097
   - Resultado: "+258845384097"

2. **Mensagem Padrão**: Edite `ctaMensagem` para personalizar a mensagem inicial

## 🗺️ Configurar Google Maps

O mapa está configurado para usar um iframe do Google Maps. Para personalizar:

1. Acesse [Google Maps](https://maps.google.com)
2. Busque pelo endereço da barbearia
3. Clique em "Compartilhar" > "Incorporar um mapa"
4. Copie o código do iframe e substitua no HTML

## 🚀 Como Publicar o Site

### Opção 1: Vercel (Recomendado)

1. Crie uma conta no [Vercel](https://vercel.com)
2. Instale a CLI do Vercel: `npm i -g vercel`
3. Na pasta do projeto, execute: `vercel`
4. Siga as instruções na tela

### Opção 2: GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione a branch main como source
5. Seu site ficará disponível em: `https://seuusuario.github.io/nome-do-repo`

### Opção 3: Netlify

1. Acesse [Netlify](https://netlify.com)
2. Arraste a pasta do projeto para o deploy
3. Configure o domínio personalizado se desejar

## 🔧 Manutenção e Atualizações

### Adicionando Novos Serviços

1. Adicione o serviço no array `SITE_DATA.precos`
2. Se necessário, adicione um novo ícone na função `getServiceIcon()`

### Modificando Seções

Para adicionar/remover seções:
1. Edite o HTML da seção desejada
2. Adicione/remova links de navegação no menu
3. Atualize os estilos CSS se necessário

### Otimização de Imagens

Para melhor performance:
- Use formatos WebP quando possível
- Mantenha imagens com no máximo 1800px de largura
- Comprima as imagens para 70-80% de qualidade
- Use `loading="lazy"` para carregamento sob demanda

## 📊 SEO e Analytics

### Meta Tags

As meta tags estão configuradas no `<head>` do HTML. Personalize:
- Title
- Description  
- Open Graph tags
- JSON-LD structured data

### Google Analytics

Para adicionar o Google Analytics:

1. Crie uma conta no Google Analytics
2. Adicione o código de rastreamento antes do `</head>`

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Boas Práticas de Segurança

- Mantenha backups regulares do site
- Use HTTPS sempre que possível
- Monitore o site regularmente
- Mantenha as dependências atualizadas

## 📞 Suporte

Para dúvidas sobre customização ou problemas técnicos, consulte:

1. **HTML/CSS/JS**: [MDN Web Docs](https://developer.mozilla.org)
2. **Google Maps**: [Documentação oficial](https://developers.google.com/maps)
3. **WhatsApp Business**: [Central de Ajuda](https://faq.whatsapp.com/business)

## 📝 Licença

Este projeto foi desenvolvido para a Barbearia do Mulla. As imagens utilizadas são de bancos gratuitos (Pexels) com licenças adequadas para uso comercial.

---

**Desenvolvido para a Barbearia do Mulla**