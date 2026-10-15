/**
 * CV Modal & Download Module
 * Handles fast CV download triggers, live modal preview, and toast notifications
 */
import { showToast } from './contact-form.js';

export function initCvModal() {
  const openModalBtns = document.querySelectorAll('.js-open-cv-modal');
  const closeModalBtns = document.querySelectorAll('.js-close-cv-modal');
  const cvModal = document.getElementById('cvModal');
  const cvIframe = document.getElementById('cvIframe');
  const downloadBtns = document.querySelectorAll('.js-download-cv');

  const cvPath = 'assets/docs/Naome_Imanishimwe_CV.pdf';

  // Open CV preview modal
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cvModal) {
        cvModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Lazy load iframe source
        if (cvIframe && !cvIframe.getAttribute('src')) {
          cvIframe.setAttribute('src', `${cvPath}#toolbar=0&navpanes=0&scrollbar=1`);
        }
      }
    });
  });

  // Close CV modal
  const closeModal = () => {
    if (cvModal) {
      cvModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  // Close on backdrop click
  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) {
        closeModal();
      }
    });
  }

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal?.classList.contains('active')) {
      closeModal();
    }
  });

  // Track & notify on CV download
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('📄 Naome Imanishimwe\'s CV downloaded successfully!');
    });
  });
}
