/**
 * Contact Form & Toast Module
 * Handles safe form validation, copy-to-clipboard, and toast notifications
 */

export function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    </span>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto remove after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export function initContact() {
  const contactForm = document.getElementById('contactForm');
  const copyButtons = document.querySelectorAll('.js-copy-text');

  // Copy to clipboard buttons
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-clipboard');
      if (textToCopy) {
        try {
          await navigator.clipboard.writeText(textToCopy);
          showToast(`📋 Copied to clipboard: ${textToCopy}`);
        } catch {
          // Fallback
          const tempInput = document.createElement('input');
          tempInput.value = textToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
          showToast(`📋 Copied to clipboard: ${textToCopy}`);
        }
      }
    });
  });

  // Form submission handling
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName')?.value.trim();
      const email = document.getElementById('senderEmail')?.value.trim();
      const subject = document.getElementById('senderSubject')?.value.trim() || 'Inquiry from Portfolio';
      const message = document.getElementById('senderMessage')?.value.trim();

      if (!name || !email || !message) {
        showToast('⚠️ Please fill in all required fields.');
        return;
      }

      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('⚠️ Please provide a valid email address.');
        return;
      }

      // Open mailto link so user's client opens directly with prefilled message
      const mailtoUrl = `mailto:naomeimanishimwe7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Naome,\n\nFrom: ${name} (${email})\n\nMessage:\n${message}`)}`;
      
      showToast('🚀 Opening your email client to reach Naome directly...');
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
        contactForm.reset();
      }, 700);
    });
  }
}
