# DESIGN STRATEGY — LIVRO DA VOVÓ ZEFA
**Lead Product Designer + Frontend Architect + UX Designer**
*Status: Estratégia e Direção Visual (Aguardando Aprovação para Implementação)*

---

## 1. Resumo do Projeto

* **Produto:** *Livro da Vovó Zefa* — Livro digital (Ebook em PDF com letra grande, contendo 15 capítulos de simpatias, rezas e ensinamentos tradicionais).
* **Preço:** R$ 39,90 (pagamento único via Kirvano).
* **Público-Alvo:** Majoritariamente adulto e mais velho (público sênior/maduro), interessado em espiritualidade popular brasileira, tradições próximas à Umbanda, rezas, simpatias, proteção contra inveja/olho gordo, bênção financeira e harmonização no amor.
* **Origem do Tráfego:** Principalmente Facebook (vídeos diários e conteúdos orgânicos/pagos) e tráfego frio.
* **Objetivo:** Conduzir o visitante que assistiu aos vídeos da Vovó Zefa até a compra consciente do livro digital, posicionando o produto como um material organizado, prático e permanente para guardar no celular e consultar sempre que precisar, sem recorrer a promessas milagrosas ou gatilhos agressivos de marketing.

---

## 2. Diagnóstico da Experiência

### A Sensação Emocional
A página não pode parecer uma página de vendas tradicional de infoproduto. Ela deve provocar a sensação de **"entrar na casa da Vovó Zefa"** — um ambiente de acolhimento, calor humano, respeito ancestral e serenidade. O usuário deve sentir:
> *"Eu estava ouvindo a Vovó Zefa contar alguma coisa no vídeo e agora ela está continuando essa conversa comigo na sala da casa dela."*

### Pilares Psicológicos da Jornada
1. **Continuidade Imediata:** O visitante que clica no link não sofre ruptura cognitiva. Ele reconhece imediatamente o rosto, o vestido branco, as guias, as velas e a voz acolhedora da Vovó.
2. **Acolhimento sem Julgamento:** Validação das angústias do dia a dia (dinheiro apertado, coração aflito, sensação de energia pesada) com o carinho de uma avó que ouve e abençoa.
3. **Valor da Permanência vs. Transitoriedade do Feed:** O diferencial racional e emocional de ter um livro digital seguro no celular em vez de torcer para reencontrar um vídeo que passou rapidamente pelo feed.
4. **Segurança e Simplicidade:** Eliminação total da ansiedade tecnológica para o público sênior (textos grandes, botões nítidos, ausência de contadores falsos de escassez e clareza total sobre o que é entregue).

---

## 3. Direção Visual

### Estilo Visual
* **Rústico Acolhedor & Editorial Afetivo:** Inspirado em livros de memórias, cadernos de receitas de família e a atmosfera tradicional de um lar brasileiro de fé e carinho.
* **Texturas e Acabamentos:** Superfícies que remetem ao linho cru, pergaminho suave, papel artesanal e madeira acolhedora, com iluminação quente de velas.
* **O que NUNCA usar:** Estética SaaS, gradientes neon, elementos futuristas, cores fluorescentes, pop-ups invasivos, contadores regressivos piscando, visual de cassino ou elementos de "Black Friday".

### Atmosfera & Iluminação
* Iluminação quente (tons âmbar e dourado suave de chama de vela).
* Ambientes com sensação de aconchego, fé serena e ancestralidade.
* Transições suaves e naturais, sem animações bruscas ou efeitos artificiais.

### Composição & Ritmo
* **Layout Centrado e Fluido:** Coluna de leitura com largura controlada (máximo 680px para parágrafos de texto), garantindo conforto visual no mobile e desktop.
* **Ritmo Editorial:** Alternância calculada entre:
  $$\text{Impacto Afetivo} \rightarrow \text{Identificação de Dores} \rightarrow \text{Desejo de Guarda} \rightarrow \text{Revelação do Livro} \rightarrow \text{Detalhamento Claro} \rightarrow \text{Oferta Honesta} \rightarrow \text{Esclarecimento de Dúvidas} \rightarrow \text{Bênção Final}$$
* **Densidade Visual:** Média para baixa, com bastante área de respiro (whitespace/espaço negativo acolhedor) para não cansar a vista do público sênior.

### Sensação de Leitura
* Leitura de livro impresso com carinho: parágrafos curtos (2 a 3 linhas), entrelinha generosa, contraste calibrado (sem preto 100% puro para evitar ofuscamento) e hierarquia tipográfica cristalina.

---

## 4. Sistema de Design (Design Tokens)

### 4.1. Paleta de Cores Conceitual

| Papel no Design | Nome Conceitual | Hex Sugerido | Descrição e Aplicação |
| :--- | :--- | :--- | :--- |
| **Fundo Principal** | *Linho Acolhedor* | `#FAF6F0` | Fundo suave, acolhedor e que descansa a vista. |
| **Fundo Secundário (Cards)** | *Papel Pergaminho* | `#FFFDF9` | Superfície de cartões, formulários e blocos de conteúdo. |
| **Fundo Profundo / Noturno** | *Café Ancestral* | `#1E1510` | Usado em seções especiais de destaque, fechamento e autoridade. |
| **Cor Primária da Marca** | *Terracota de Terreiro* | `#9E472A` | Ações principais, destaques afetuosos e títulos de seções. |
| **Acento / Luz de Vela** | *Âmbar Dourado* | `#D4A359` | Detalhes nobres, ícones de bênção, estrelas e divisores sutis. |
| **Tom de Proteção / Fé** | *Branco Puro de Guia* | `#FFFFFF` | Elementos de pureza, textos em fundos escuros e detalhes de destaque. |
| **Texto Principal** | *Café Tostado Profundo* | `#2B2118` | Altíssimo contraste acessível (WCAG AAA), sem a agressividade do preto puro. |
| **Texto Secundário** | *Argila Suave* | `#6B594D` | Subtítulos, legendas, microcopy e textos complementares. |
| **Bordas e Divisores** | *Linha Dourada Suave* | `rgba(212, 163, 89, 0.25)` | Delimitação sutil e elegante de cartões e separadores. |

### 4.2. Tipografia

* **Títulos (Headlines & Destaques):**
  * *Fonte:* **Lora** ou **Playfair Display** (Serifada clássica, elegante, com ar de livro antigo e tradição).
  * *Pesos:* SemiBold (600) e Bold (700).
  * *Escala:*
    * H1 (Hero): `32px` (Mobile) / `44px` (Desktop)
    * H2 (Seções): `26px` (Mobile) / `34px` (Desktop)
    * H3 (Subtítulos/Cards): `20px` (Mobile) / `24px` (Desktop)
* **Corpo de Texto (Leitura & Acessibilidade Sênior):**
  * *Fonte:* **Plus Jakarta Sans** ou **Inter** (Sem-serifa geométrica humanista, com abertura ampla de caracteres para máxima legibilidade).
  * *Tamanho Base:* `18px` (Mobile) / `19px` (Desktop) — dimensionada propositalmente acima da média web para atender com maestria o público sênior.
  * *Line Height (Altura de Linha):* `1.65` a `1.75` (espaçamento amplo para evitar fadiga ocular).

### 4.3. Espaçamentos e Layout
* **Grid Base:** Múltiplos de `8px` (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
* **Container Central:** Max-width de `1080px` para seções amplas e `680px` para a coluna de leitura principal.
* **Padding Lateral:** `20px` no Mobile para garantir respiro nas bordas da tela.

### 4.4. Componentes e Superfícies
* **Bordas:** Arredondamento suave (`border-radius: 12px` em cards, `border-radius: 50px` em botões principais em formato pílula).
* **Sombras:** Sombras difusas e quentes em tom âmbar/café (`box-shadow: 0 10px 30px rgba(43, 33, 24, 0.06)`), sem sombras escuras duras.
* **Divisores:** Pequenos ornamentos florais/étnicos sutis ou linhas com gradiente dourado desvanecido nas pontas.

### 4.5. Botões e CTAs
* **Botão Primário (Ação Principal):**
  * Cor de fundo: Gradiente suave Terracota para Âmbar Escuro (`#A84B2C` $\rightarrow$ `#8C3B1E`).
  * Texto: Branco Puro, Bold, `18px` a `20px`.
  * Altura mínima: `56px` a `60px` no mobile (garantindo área de toque ideal para dedos maiores e idosos).
  * Efeito Hover/Tap: Elevação sutil e brilho quente acolhedor, sem animações frenéticas.
* **Microcopy de Apoio:** Sempre posicionado logo abaixo do botão (ex: *"Pagamento 100% seguro processado pela Kirvano"*), em tom neutro e reconfortante.

### 4.6. Tratamento de Imagens e Mockups
* Tons quentes, bordas arredondadas e iluminação aconchegante.
* Mockup do livro: Representação de um livro digital/leitura no celular ou tablet com proporções acolhedoras, capa nítida e indicação visual de "Letra Grande".

---

## 5. Wireframe Textual (Hierarquia de Seções)

A estrutura visual segue rigorosamente a arquitetura aprovada (13 seções):

```
┌─────────────────────────────────────────────────────────────┐
│ [01. HERO / ABERTURA]                                       │
│ • Imagem Afetuosa da Vovó Zefa + Clima de Casa/Velas       │
│ • Headline de Reconhecimento Imediato                      │
│ • Subheadline de Acolhimento                                │
│ • Texto de Boas-Vindas ("Senta aqui comigo mais um pouco")  │
│ • [SEM CTA AGRESSIVO - FOCO TOTAL EM CONTINUIDADE]          │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│ [02. IDENTIFICAÇÃO DE DORES & SITUAÇÕES]                   │
│ • Headline Reflexiva                                        │
│ • Grid 3 Eixos Afetivos:                                    │
│   ├── Dinheiro (Abertura de caminhos, bênção financeira)    │
│   ├── Amor (Acalento do coração, união e harmonia)          │
│   └── Proteção (Inveja, olho gordo, energia pesada)         │
│ • Fechamento Empático sem Promessas Milagrosas              │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│ [03. DESEJO & VALOR DA PERMANÊNCIA]                        │
│ • Headline de Provocação ("E se você pudesse guardar?")    │
│ • Bloco Comparativo Visual:                                 │
│   ├── No Feed do Facebook: Passa rápido, se perde           │
│   └── No Livro Digital: Fica no seu celular para sempre     │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│ [04. QUEM É A VOVÓ ZEFA]                                   │
│ • Headline de Apresentação Pessoal                          │
│ • Retrato / Elemento Visual Ancestral                       │
│ • História dos Ensinamentos herdados dos mais velhos        │
│ • Tom de Acolhimento ("Você não precisa saber tudo")        │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│ [05. AUTORIDADE & PROVA DE AUDIÊNCIA]                      │
│ • Badge de Destaque: "+100 Mil Pessoas Acompanhando"        │
│ • Contexto: Crescimento orgânico em ~40 dias                │
│ • Foco: Força da comunidade e do carinho popular            │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│ [06. APRESENTAÇÃO DO PRODUTO]                               │
│ • Headline de Revelação do Ebook                            │
│ • Mockup Visual do Livro Digital (PDF em Letra Grande)      │
│ • Destaque dos 15 Capítulos                                 │
│ • Âncora Secundária: "Veja o que tem dentro" (Scroll suave) │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│ [07. O QUE VOCÊ RECEBE (4 PILARES)]                         │
│ • Grid de 4 Cards Informativos:                             │
│   ├── Card 1: 15 Capítulos Organizados                      │
│   ├── Card 2: Simpatias, Rezas e Ensinamentos Tradicionais │
│   ├── Card 3: Formato PDF com Letra Grande                  │
│   └── Card 4: Arquivo Seguro para Guardar no Celular        │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│ [08. SUMÁRIO DOS 15 CAPÍTULOS]                             │
│ • [PLACEHOLDER ESTRUTURADO: AGUARDANDO ANÁLISE DO PDF]      │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│ [09. BÔNUS]                                                 │
│ • [OCULTO / REMOVIDO ATÉ CONFIRMAÇÃO OFICIAL]               │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│ [10. BLOCO PRINCIPAL DE OFERTA & PREÇO]                    │
│ • Card Nobre em Destaque (Bordas Douradas / Pergaminho)     │
│ • Título do Produto: Livro da Vovó Zefa                     │
│ • Resumo do Formato: 15 Capítulos • PDF • Letra Grande      │
│ • Preço Claro e Sem Truques: R$ 39,90                       │
│ • CTA Principal: "Quero o Livro da Vovó Zefa"               │
│ • Selo de Confiança Kirvano                                 │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│ [11. REDUÇÃO DE RISCO / SEGURANÇA & GARANTIA]              │
│ • Box de Compra Segura Kirvano                              │
│ • [PLACEHOLDER DE GARANTIA: PRAZO E POLÍTICA A CONFIRMAR]   │
│ • CTA Secundário de Reforço                                 │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│ [12. FAQ — PERGUNTAS FREQUENTES]                           │
│ • Accordion com 6 Questões Essenciais:                      │
│   ├── 1. Preciso ser de alguma religião?                    │
│   ├── 2. O que tem dentro do livro?                         │
│   ├── 3. Já vejo os vídeos, o que muda com o livro?         │
│   ├── 4. Como recebo o livro? [CONFIRMAR MÉTODO]            │
│   ├── 5. É seguro comprar?                                  │
│   └── 6. E se eu não gostar? [CONFIRMAR GARANTIA]           │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│ [13. FECHAMENTO EMOCIONAL & CONVITE FINAL]                  │
│ • Fundo Café Ancestral / Iluminação Quente de Velas        │
│ • Mensagem Final de Bênção da Vovó Zefa                     │
│ • CTA Final: "Quero o Livro da Vovó Zefa — R$ 39,90"        │
│ • Microcopy de Segurança Kirvano                            │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. Componentes Necessários (Design System UI Kit)

Para garantir modularidade, manutenibilidade e altíssima performance, os seguintes componentes reutilizáveis serão construídos:

1. **`LayoutContainer` / `SectionWrapper`:** Container base com controle de largura, paddings responsivos e alternância de temas de fundo (Linho Claro vs. Café Noturno).
2. **`Typography` (`Heading`, `Paragraph`, `LeadText`):** Componentes tipográficos com controle de escala, entrelinha sênior e contraste rigoroso.
3. **`HeroSection`:** Bloco de abertura com apresentação integrada de imagem acolhedora e texto emocional.
4. **`ThemePillarsGrid`:** Grid dos 3 eixos (Dinheiro, Amor, Proteção) com ícones afetivos e cards acolhedores.
5. **`ComparisonCard`:** Card comparativo visual "Vídeo no Feed vs. Livro no Celular".
6. **`AuthorityBadge`:** Distintivo de audiência (+100 mil seguidores em ~40 dias) com acabamento nobre dourado.
7. **`ProductMockup`:** Representação visual do livro digital em tela de celular/tablet com detalhe de "Letra Grande".
8. **`FeatureList` / `DeliveryCard`:** Cards dos 4 pilares do produto com ícones de leitura e entrega digital.
9. **`PriceCard`:** Card central de checkout com tipografia nobre de preço (R$ 39,90), lista de benefícios e microcopy de segurança.
10. **`CTAButton`:** Botão de alta acessibilidade com estados de hover/tap tácteis e suporte a âncoras ou links diretos de checkout.
11. **`FAQAccordion`:** Accordion expansível com botões grandes, ícones claros de abrir/fechar (+) e transição suave.
12. **`TrustBadgeKirvano`:** Selo visual de ambiente seguro e pagamento processado pela Kirvano.
13. **`PlaceholderNotice`:** Componente discreto para uso interno nos itens que aguardam confirmação do cliente.

---

## 7. Plano de Implementação (Fases de Execução)

O desenvolvimento técnico será executado rigorosamente nas seguintes etapas, após a aprovação desta estratégia:

* **Etapa 1 — Fundação & Tokens:**
  * Configuração da base CSS com todas as variáveis de design tokens (cores HSL, tipografia, espaçamentos, sombras).
  * Inclusão e otimização das fontes web (*Lora* e *Plus Jakarta Sans*).
* **Etapa 2 — Estrutura Base & Seção Hero:**
  * Implementação do `LayoutContainer` e da Seção 01 (Hero), validando o reconhecimento visual imediato e o tom emocional.
* **Etapa 3 — Seções de Conexão, Identificação & Autoridade:**
  * Implementação das Seções 02 (Identificação), 03 (Desejo/Permanência), 04 (Quem é a Vovó Zefa) e 05 (Autoridade/Audiência).
* **Etapa 4 — Apresentação do Produto, Entrega & Oferta:**
  * Implementação das Seções 06 (Apresentação), 07 (O que você recebe), 08 (Placeholder do Sumário) e 10 (Card de Preço & Oferta R$ 39,90).
* **Etapa 5 — Segurança, FAQ & Fechamento:**
  * Implementação das Seções 11 (Redução de Risco), 12 (FAQ Accordion interativo) e 13 (Fechamento Emocional + CTA Final).
* **Etapa 6 — Otimização Mobile, Acessibilidade & Performance:**
  * Ajustes de touch targets para o público sênior, teste de contrastes WCAG AAA, otimização de renderização e responsividade total.

---

## 8. Pendências Oficiais do Projeto

Em conformidade estrita com o Documento Mestre e o Briefing, as seguintes informações reais permanecem como pendências oficiais e serão integradas no momento exato de sua confirmação:

1. **Sumário Real dos 15 Capítulos:** Títulos exatos e divisão de temas (aguardando envio/análise do arquivo PDF).
2. **Método Exato de Entrega pela Kirvano:** Confirmação se a entrega ocorre por e-mail direto, download imediato ou área de membros.
3. **Política de Garantia:** Prazo legal/comercial exato (7, 15 ou 30 dias) e condições de suporte.
4. **Bônus:** Confirmação se haverá algum material complementar incluso ou se a seção permanecerá suprimida.
5. **Depoimentos Reais / Provas Sociais:** Coleta de depoimentos autênticos de leitores (caso venham a existir futuramente).

---

> **Diretiva de Conclusão:** O documento de estratégia visual está consolidado. Nenhum código de produção ou componente visual será construído antes da validação e aprovação explícita da estratégia pelo Lead/Cliente.
