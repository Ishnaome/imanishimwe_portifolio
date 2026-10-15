/**
 * Glow Effect Module
 * Tracks mouse position on cards for smooth radial lighting highlights
 */
export function initGlowCards() {
  const cards = document.querySelectorAll('.glow-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}
