(() => {
  const items = [
    {
      label: 'WhatsApp',
      href: 'https://wa.me/910000000000?text=Hi%20The%20Newton%20Clinic%2C%20I%20would%20like%20to%20know%20more%20about%20your%20treatment%20services%20and%20consultation%20options.',
      icon: 'bi-whatsapp',
      brand: '#25d366'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: 'bi-instagram',
      brand: '#e4405f'
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: 'bi-facebook',
      brand: '#1877f2'
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/',
      icon: 'bi-youtube',
      brand: '#ff0000'
    }
  ];

  const createStack = () => {
    if (document.getElementById('social-icons-left-stack')) return;

    const style = document.createElement('style');
    style.textContent = `
      .social-icons-left-stack {
        position: fixed;
        left: 18px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        z-index: 1055;
        pointer-events: auto;
      }

      .social-icons-left-link {
        --brand-color: #25d366;
        width: 54px;
        height: 54px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        border: 1px solid rgba(47, 36, 25, 0.12);
        background: rgba(255, 255, 255, 0.94);
        color: var(--brand-color);
        text-decoration: none;
        box-shadow: 0 12px 28px rgba(47, 36, 25, 0.12);
        backdrop-filter: blur(10px);
        position: relative;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        animation: socialRailFloat 3.6s ease-in-out infinite;
      }

      .social-icons-left-link:nth-child(1) { animation-delay: 0s; }
      .social-icons-left-link:nth-child(2) { animation-delay: 0.12s; }
      .social-icons-left-link:nth-child(3) { animation-delay: 0.24s; }
      .social-icons-left-link:nth-child(4) { animation-delay: 0.36s; }

      .social-icons-left-link:hover {
        transform: translateX(3px) translateY(-2px) scale(1.03);
        background: var(--brand-color);
        border-color: var(--brand-color);
        color: #fff;
        box-shadow: 0 16px 34px rgba(47, 36, 25, 0.18);
      }

      .social-icons-left-link::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0) 60%);
        pointer-events: none;
      }

      .social-icons-left-link i {
        position: relative;
        z-index: 1;
        font-size: 1.45rem;
        line-height: 1;
      }

      @keyframes socialRailFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-4px); }
      }

      @media (max-width: 575.98px) {
        .social-icons-left-stack {
          display: none;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .social-icons-left-link {
          animation: none !important;
        }
      }
    `;

    document.head.appendChild(style);

    const stack = document.createElement('div');
    stack.id = 'social-icons-left-stack';
    stack.className = 'social-icons-left-stack';
    stack.setAttribute('aria-label', 'Social media links');

    stack.innerHTML = items.map((item) => `
      <a
        class="social-icons-left-link"
        href="${item.href}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${item.label}"
        title="${item.label}"
        style="--brand-color: ${item.brand};"
      >
        <i class="bi ${item.icon}" aria-hidden="true"></i>
      </a>
    `).join('');

    document.body.appendChild(stack);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createStack, { once: true });
  } else {
    createStack();
  }
})();
