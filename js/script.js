/**
 * ==========================================================================
 * SCRIPT — LIVRO DA VOVÓ ZEFA (ETAPA 2: DIREÇÃO DE ARTE & FINALIZAÇÃO)
 * Interatividade leve, acessível, suave e performática (Zero frameworks)
 * ==========================================================================
 */

/**
 * CONFIGURAÇÃO DO CHECKOUT DA HOTMART
 * Link oficial de checkout para compra do Livro da Vovó Zefa
 */
const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/Q106767117O?checkoutMode=10&bid=1788380022421";

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initSmoothScroll();
  initCheckoutFlow();
  initScrollReveal();
});

/**
 * FAQ Accordion com acessibilidade (WAI-ARIA)
 */
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-button');

  faqButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const answerId = button.getAttribute('aria-controls');
      const answerEl = document.getElementById(answerId);

      if (!answerEl) return;

      // Fechar outros itens suavemente para manter a tela limpa no mobile
      faqButtons.forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.setAttribute('aria-expanded', 'false');
          const otherAnswerId = otherButton.getAttribute('aria-controls');
          const otherAnswer = document.getElementById(otherAnswerId);
          if (otherAnswer) {
            otherAnswer.setAttribute('data-open', 'false');
          }
        }
      });

      // Alternar estado do item atual
      button.setAttribute('aria-expanded', !isExpanded);
      answerEl.setAttribute('data-open', !isExpanded ? 'true' : 'false');
    });
  });
}

/**
 * Rolagem suave para links âncora internos
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#checkout"])');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function getFinalCheckoutUrl() {
  if (!HOTMART_CHECKOUT_URL || HOTMART_CHECKOUT_URL.trim() === '') return '';

  try {
    const hotmartUrl = new URL(HOTMART_CHECKOUT_URL);
    const currentParams = new URLSearchParams(window.location.search);

    // Repassa parâmetros da URL atual (UTMs, SRC, SCK) para a Hotmart
    currentParams.forEach((value, key) => {
      if (!hotmartUrl.searchParams.has(key)) {
        hotmartUrl.searchParams.set(key, value);
      }
    });

    return hotmartUrl.toString();
  } catch (err) {
    return HOTMART_CHECKOUT_URL;
  }
}

/**
 * Gerenciamento inteligente de clique nos botões de Checkout
 */
function initCheckoutFlow() {
  const finalUrl = getFinalCheckoutUrl();
  const checkoutButtons = document.querySelectorAll('.btn-checkout, a[href="#checkout"]');

  checkoutButtons.forEach((btn) => {
    if (finalUrl) {
      // Atualiza o atributo href nativo para acessibilidade e abertura limpa
      btn.setAttribute('href', finalUrl);
      btn.setAttribute('target', '_self');
    }

    btn.addEventListener('click', (e) => {
      const urlToOpen = getFinalCheckoutUrl();
      if (urlToOpen) {
        // Navegação direta com preservação de tracking
        window.location.href = urlToOpen;
        e.preventDefault();
        return;
      }

      // Se ainda não houver URL configurada, rola até o box de oferta e aplica pulso luminoso
      e.preventDefault();
      const offerCard = document.querySelector('.offer-card');
      const offerSection = document.getElementById('oferta');

      if (offerSection) {
        offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      if (offerCard) {
        offerCard.classList.remove('highlight-focus');
        void offerCard.offsetWidth; // Força reflow para reiniciar animação
        offerCard.classList.add('highlight-focus');

        setTimeout(() => {
          offerCard.classList.remove('highlight-focus');
        }, 2500);
      }
    });
  });
}

/**
 * Animação sutil de reveal ao rolar a página (Scroll Reveal)
 */
function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback para navegadores sem suporte
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }
}
