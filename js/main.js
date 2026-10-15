/**
 * Main Application Orchestrator
 * Naome Imanishimwe Portfolio
 */
import { initTheme } from './modules/theme.js';
import { initNavigation } from './modules/navigation.js';
import { initCvModal } from './modules/cv-modal.js';
import { initProjects } from './modules/projects-filter.js';
import { initStatsCounter } from './modules/stats-counter.js';
import { initGlowCards } from './modules/glow-effect.js';
import { initContact } from './modules/contact-form.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Modules
  initTheme();
  initNavigation();
  initCvModal();
  initProjects();
  initStatsCounter();
  initGlowCards();
  initContact();

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // Back to top button smooth scroll
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
