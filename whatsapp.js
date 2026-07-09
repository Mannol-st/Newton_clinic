(() => {
  const phoneNumber = '910000000000';
  const defaultMessage = 'Hi The Newton Clinic, I would like to know more about your treatment services and consultation options.';
  const buttonId = 'floating-whatsapp-btn';

  const createButton = () => {
    if (document.getElementById(buttonId)) return;

    const style = document.createElement('style');
    style.textContent = `
      .floating-whatsapp-btn {
        position: fixed;
        right: 18px;
        bottom: 18px;
        width: 58px;
        height: 58px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #25d366;
        color: #fff;
        text-decoration: none;
        box-shadow: 0 16px 36px rgba(37, 211, 102, 0.32);
        z-index: 1060;
        transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        animation: whatsappFloat 3.1s ease-in-out infinite, whatsappPulse 2.8s ease-out infinite;
        will-change: transform, box-shadow;
      }

      .floating-whatsapp-btn:hover {
        animation-play-state: paused;
        transform: translateY(-4px) scale(1.03);
        color: #fff;
        box-shadow: 0 18px 40px rgba(37, 211, 102, 0.4);
        filter: brightness(1.03);
      }

      .floating-whatsapp-btn::before {
        content: "";
        position: absolute;
        inset: -8px;
        border-radius: 50%;
        border: 2px solid rgba(37, 211, 102, 0.35);
        opacity: 0;
        animation: whatsappRing 2.8s ease-out infinite;
        pointer-events: none;
      }

      .floating-whatsapp-btn::after {
        content: "";
        position: absolute;
        inset: 6px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.14);
        opacity: 0.35;
        pointer-events: none;
      }

      .floating-whatsapp-btn i {
        font-size: 1.7rem;
        line-height: 1;
        position: relative;
        z-index: 1;
      }

      @keyframes whatsappFloat {
        0%, 100% { transform: translateY(0); }
        25% { transform: translateY(-7px); }
        50% { transform: translateY(0); }
        75% { transform: translateY(7px); }
      }

      @keyframes whatsappPulse {
        0%, 100% { box-shadow: 0 16px 36px rgba(37, 211, 102, 0.32); }
        50% { box-shadow: 0 18px 40px rgba(37, 211, 102, 0.45); }
      }

      @keyframes whatsappRing {
        0% {
          transform: scale(0.9);
          opacity: 0;
        }
        20% {
          opacity: 0.7;
        }
        100% {
          transform: scale(1.25);
          opacity: 0;
        }
      }

      @media (max-width: 575.98px) {
        .floating-whatsapp-btn {
          right: 14px;
          bottom: 14px;
          width: 52px;
          height: 52px;
        }

        .floating-whatsapp-btn i {
          font-size: 1.5rem;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .floating-whatsapp-btn,
        .floating-whatsapp-btn::before {
          animation: none !important;
        }
      }
    `;

    document.head.appendChild(style);

    const button = document.createElement('a');
    button.id = buttonId;
    button.className = 'floating-whatsapp-btn';
    button.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.setAttribute('aria-label', 'Chat on WhatsApp');
    button.setAttribute('title', 'Chat on WhatsApp');
    button.innerHTML = '<i class="bi bi-whatsapp" aria-hidden="true"></i>';

    document.body.appendChild(button);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createButton, { once: true });
  } else {
    createButton();
  }
})();
