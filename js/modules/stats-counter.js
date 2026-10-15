/**
 * Stats Counter Animation Module
 * Counts up numbers dynamically when scrolled into viewport
 */
export function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const observerOptions = {
    threshold: 0.5
  };

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target') || '0');
          const prefix = counter.getAttribute('data-prefix') || '';
          const suffix = counter.getAttribute('data-suffix') || '';
          const isDecimal = target % 1 !== 0;
          const duration = 1800; // ms
          const startTime = performance.now();

          const updateCount = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Ease-out cubic curve
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOutProgress * target;

            if (isDecimal) {
              counter.textContent = `${prefix}${currentVal.toFixed(1)}${suffix}`;
            } else {
              counter.textContent = `${prefix}${Math.floor(currentVal)}${suffix}`;
            }

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              counter.textContent = `${prefix}${isDecimal ? target.toFixed(1) : target}${suffix}`;
            }
          };

          requestAnimationFrame(updateCount);
        });
        obs.disconnect();
      }
    });
  }, observerOptions);

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) {
    observer.observe(statsSection);
  }
}
