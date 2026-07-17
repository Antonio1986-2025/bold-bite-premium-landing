# UI UX Pro Max — Design System Skill

## ⚠️ REGRA DE OURO

Evite a estética genérica de IA. Todo componente deve parecer feito por uma agência premium.
Nada de layouts simétricos previsíveis, cores pastel genéricas ou tipografia sem personalidade.
Use contraste, movimento e hierarquia visual agressiva.

---

## 🎨 TOKENS DE COR

### Modo Luxury (restaurantes, premium, moda)
```
primary:     #FDB515 (Gold)   ou #4CAF50 (Verde premium)
secondary:   #FF8A00 (Orange) ou #1B5E20 (Verde escuro)
dark:        #111111 ou #0A0A0A
darker:      #5B0017 ou #0D3B0F
light:       #FFFFFF
gray:        #D8D8D8
```

### Modo Tech/SaaS (startups, produtos)
```
primary:     #6366F1 (Indigo) ou #3B82F6 (Blue)
secondary:   #8B5CF6 (Purple) ou #06B6D4 (Cyan)
dark:        #0F172A
darker:      #020617
light:       #F8FAFC
gray:        #94A3B8
```

### Regras:
- 1 cor primária de destaque (uso em < 20% dos elementos)
- 1 cor secundária (uso em < 5%)
- Fundo sempre escuro ou sempre claro — nunca misturar 50/50
- Gradientes só em botões CTA e hero backgrounds
- Nunca usar cores puras do Tailwind sem customizar

---

## 🔤 ESCALA DE TIPOGRAFIA

### Display (Hero Headlines)
```
text-display:  clamp(3.5rem, 8vw, 8rem)
font-family:   'Bebas Neue' ou 'Inter Tight'
line-height:   0.88–1.05
letter-spacing: -0.02em
weight:        700–900
```

### Headings (Section Titles)
```
text-h1:       clamp(2.5rem, 5vw, 4rem)   // Section title
text-h2:       clamp(2rem, 3vw, 2.5rem)   // Card title
font-family:   same as display
line-height:   1.1
```

### Body
```
text-body:     1rem–1.125rem
text-small:    0.875rem
font-family:   'Poppins' ou 'Inter'
line-height:   1.6–1.7
color:         gray (nunca #FFF puro em texto longo)
```

### Regras:
- Máximo 2 fontes por projeto
- Headlines sempre em display font (bold, condensada)
- Body sempre em font legível (sans-serif)
- Nunca usar a fonte padrão do browser
- Contraste mínimo 4.5:1 para body text

---

## 📐 SISTEMA DE ESPAÇAMENTO (Grid 8px)

```
Base: 8px

xs:   4px    (0.5 × base)
sm:   8px    (1 × base)
md:   16px   (2 × base)
lg:   24px   (3 × base)
xl:   32px   (4 × base)
2xl:  48px   (6 × base)
3xl:  64px   (8 × base)
4xl:  96px   (12 × base)
5xl:  128px  (16 × base)
```

### Regras:
- Padding de seção: py-24 ou py-32 (96px–128px)
- Gap entre cards: gap-8 (32px)
- Margem abaixo de headings: mb-16 (64px)
- Espaço entre título e subtítulo: gap-4 (16px)
- Padding interno de cards: p-8 (32px)
- Nunca usar valores arbitrários sem relação com 8px

---

## 🧩 PADRÕES DE COMPONENTE

### Hero Section
```
Estrutura:
- 100vh, overflow-hidden
- Background: gradiente diagonal OU imagem/vídeo full-bleed
- Overlay escuro no lado do texto (gradient 90deg)
- Texto: max-w-[500px], alinhado à esquerda
- CTA: 2 botões (primary filled + secondary outlined)
- Partículas ou elementos geométricos animados

Timing de animação:
- Badge: 0.1s delay
- Headline: 0.2s delay, blur reveal
- Subtitle: 0.4s delay
- Buttons: 0.6s delay
```

### Navbar
```
- Sticky, z-50
- Transparente → sólido (backdrop-blur) após 50px de scroll
- Logo esquerda, links centro, CTA direita
- Mobile: hamburguer → overlay full-screen
- Links com underline animado no hover
- Transição de 500ms no background
```

### Cards
```
- Glassmorphism: bg-white/[0.03], backdrop-blur-sm, border-white/10
- Border radius: rounded-3xl (1.5rem)
- Hover: translateY(-8px) + shadow-card-hover
- Imagem: aspect-square, group-hover:scale-110
- Tags no topo esquerdo com bg da cor primary
- Preço em destaque com cor primary
- Transição: duration-500 em tudo
```

### Botões
```
Primary:
- bg-gradient-to-r from-primary to-secondary
- rounded-full
- shadow-[primary]-glow
- hover:scale-105
- text-dark (contraste máximo)

Secondary:
- bg-transparent
- border-2 border-primary
- text-primary
- hover:bg-primary/10

Efeito magnético (mouse tracking):
- useMotionValue + useSpring
- Deslocamento máximo: 14–18px
- stiffness: 300, damping: 20
```

### Seções
```
- Container: max-w-7xl mx-auto px-6 lg:px-8
- Heading centralizado com subtitle pequeno em primary
- Animação: fadeUp nos cards com stagger 0.15s
- Grid: 4 cols desktop → 2 tablet → 1 mobile
- Background alternado: bg-black → bg-[darker] → bg-black
```

### Depoimentos
```
- Card com aspas visíveis ou avatar grande
- 5 estrelas com fill na cor primary
- Avatar circular com borda primary
- Drag carousel com Framer Motion
- Autoplay 4s com pause no hover
```

---

## 🎬 ANIMAÇÕES (Framer Motion)

### Scroll Reveals
```tsx
// fadeUp — padrão para seções
hidden: { opacity: 0, y: 60 }
visible: { opacity: 1, y: 0 }

// fadeLeft — conteúdo textual
hidden: { opacity: 0, x: -60 }
visible: { opacity: 1, x: 0 }

// fadeRight — imagens/ilustrações
hidden: { opacity: 0, x: 60 }
visible: { opacity: 1, x: 0 }

// blurReveal — headlines importantes
hidden: { opacity: 0, filter: 'blur(10px)', y: 30 }
visible: { opacity: 1, filter: 'blur(0px)', y: 0 }
```

### Timing
```
duration: 0.6–0.8s
ease: [0.76, 0, 0.24, 1]  // cubic-bezier premium
stagger: 0.12–0.15s entre cards
viewport: once: true, margin: '-80px'
```

### Hover
```
Cards: y: -8, shadow ampliado, duração 500ms
Imagens: scale: 1.1, duração 700ms
Botões: scale: 1.05, duração 300ms
Links: underline animado (width 0 → 100%)
```

### Hero Burger/Produto
```
Floating: y: [-6, 6, -6], duração 3.8–4s
Breathing: scale: [0.94, 0.97, 0.94], duração 5s
Rotation: rotate: [-0.5, 0.5, -0.5], duração 7s
Parallax: mouse tracking ±14px
```

---

## 📱 RESPONSIVO

```
Desktop (>1024px):
- Grid 12 colunas
- Texto 40%, imagem 60%
- Hero 100vh fixo

Tablet (768–1024px):
- Grid 2 colunas → empilhar
- Headline: 80px
- Hero com scroll natural

Mobile (<768px):
- 1 coluna
- Headline: 56px
- Cards empilhados
- Menu hamburguer
- Touch targets ≥ 44px
- Partículas removidas
```

---

## 🚀 PERFORMANCE

```
- next/image com lazy loading e placeholder blur
- dynamic() import para seções abaixo da dobra
- Fontes com next/font/google (display: swap, preload)
- Sem animações em prefers-reduced-motion
- Lighthouse target: 90+ performance, 95+ accessibility
```

---

## ❌ NUNCA FAZER

```
- Usar cores padrão do Tailwind sem customizar
- Centralizar todo texto (só headings ou mobile)
- Usar mais de 2 fontes
- Deixar animações sem ease customizado
- Usar opacity pura sem blur no glassmorphism
- Cards sem hover state
- Botões sem feedback visual
- Imagens sem lazy load
- Texto branco puro em backgrounds claros
- Section sem heading
- Espaçamento inconsistente entre seções
```

---

## ✅ CHECKLIST PRÉ-ENTREGA

```
[ ] Build passa sem erros (npm run build)
[ ] Hero ocupa 100vh exato (não invade seção seguinte)
[ ] Todas as seções têm SectionHeading
[ ] Cores seguem os tokens definidos
[ ] Animações disparam no scroll (useInView)
[ ] Mobile: layout não quebra em 375px
[ ] Touch targets ≥ 44px no mobile
[ ] Imagens têm alt text
[ ] Links WhatsApp/Delivery/Instagram funcionam
[ ] Meta tags OG e Twitter preenchidas
[ ] Fontes carregam sem layout shift
```

---

## 🔌 CAMADA 4 — 21st.dev (Componentes Premium)

21st.dev é um marketplace de componentes **shadcn/ui** — React + Tailwind + Radix UI.
Componentes prontos e bem desenhados: heroes, pricing, depoimentos, navbars, FAQ.

### Setup (primeira vez no projeto)
```bash
# Inicializa shadcn/ui (base do 21st.dev)
npx shadcn@latest init -d

# Instalar componente do 21st.dev
npx shadcn@latest add "https://21st.dev/r/shadcn/nome-do-componente"
```

### Componentes recomendados
```
Heroes:        https://21st.dev/r/shadcn/hero-1
Pricing:       https://21st.dev/r/shadcn/pricing-1
Testimonials:  https://21st.dev/r/shadcn/testimonial-1
FAQ:           https://21st.dev/r/shadcn/faq-1
Navbar:        https://21st.dev/r/shadcn/navbar-1
Features:      https://21st.dev/r/shadcn/feature-1
Footer:        https://21st.dev/r/shadcn/footer-1
```

### Fluxo de uso
1. Navegue em https://21st.dev e encontre o componente desejado
2. Copie o comando `npx shadcn@latest add "https://21st.dev/r/..."`
3. Execute no terminal do projeto
4. O componente é baixado para `@/components/ui/`
5. Customize cores, textos e conteúdo para sua marca
6. Integre com Framer Motion para animações premium

### Regra de ouro
NUNCA use o componente 21st.dev "como veio". Sempre:
- Adapte as cores para os tokens do projeto
- Adicione animações Framer Motion (scroll reveal, hover)
- Troque textos placeholder por conteúdo real
- Ajuste espaçamento para o grid de 8px
```
