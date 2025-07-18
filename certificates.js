// Modal/Lightbox logic
const modal = document.getElementById('cert-modal');
const modalImg = document.querySelector('.cert-modal-img');
const modalClose = document.querySelector('.cert-modal-close');

document.querySelectorAll('.cert-view-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const imgSrc = this.getAttribute('data-img');
    modalImg.src = imgSrc;
    modal.classList.add('active');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
  modalImg.src = '';
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    modalImg.src = '';
  }
});

// Scroll Reveal Animation (extended for vois page)
function revealOnScroll() {
  const revealEls = document.querySelectorAll('.cert-card, .cert-section-title, .cert-title, .cert-subtext, .internship-header-section, .internship-task-section, .internship-cert-section, .internship-footer-note, .vois-header-section, .vois-project-section, .vois-cert-section, .vois-footer-note');
  const windowHeight = window.innerHeight;
  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      el.classList.add('revealed');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll); 