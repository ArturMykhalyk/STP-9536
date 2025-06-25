const btnOpenAllEl = document.querySelector('[data-faq="open-all-faq"]');
const btnCloseAllEl = document.querySelector('[data-faq="close-all-faq"]');
const modalOverlayEl = document.querySelector('[data-modal="faq-overlay"]');
const listFaqEl = document.querySelector('[data-list="list"]');

listFaqEl.addEventListener('click', event => {
  const moreBtn = event.target.closest('[data-faq-btn="more"][data-action-btn-more]');
  const closeBtn = event.target.closest('[data-faq-close]');

  if (moreBtn) {
    const faqItem = moreBtn.closest('[data-faq-item]');
    if (!faqItem) return;


    const openItem = listFaqEl.querySelector('[data-faq-item][data-faq-state="open"]');
    if (openItem && openItem !== faqItem) {
      const openedText = openItem.querySelector('[data-faq-text]');
      const openedTitle = openItem.querySelector('[data-faq-title]');
      const openedCloseBtn = openItem.querySelector('[data-faq-close]');
      const openedMoreBtn = openItem.querySelector('[data-faq-btn="more"]');

      openedText.setAttribute('data-action', 'close');
      openedMoreBtn.setAttribute('data-action-btn-more', 'open');
      openedCloseBtn.setAttribute('data-faq-close', 'close');
      openItem.setAttribute('data-faq-state', 'closed');
    }

    const faqText = faqItem.querySelector('[data-faq-text]');
    const faqTitle = faqItem.querySelector('[data-faq-title]');
    const closeBtnEl = faqItem.querySelector('[data-faq-close]');

    faqText.setAttribute('data-action', 'open');
    moreBtn.setAttribute('data-action-btn-more', 'close');
    closeBtnEl.setAttribute('data-faq-close', 'open');
    faqItem.setAttribute('data-faq-state', 'open');

    if (window.innerWidth < 1200) {
  const rect = faqItem.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const offset = rect.top + scrollTop - 50;

  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  });
}
    return;
  }

  if (closeBtn) {
    const faqItem = closeBtn.closest('[data-faq-item]');
    if (!faqItem) return;

    const faqText = faqItem.querySelector('[data-faq-text]');
    const faqTitle = faqItem.querySelector('[data-faq-title]');
    const closeBtnEl = faqItem.querySelector('[data-faq-close]');
    const moreBtnEl = faqItem.querySelector('[data-faq-btn="more"]');

    faqText.setAttribute('data-action', 'close');
    moreBtnEl.setAttribute('data-action-btn-more', 'open');
    closeBtnEl.setAttribute('data-faq-close', 'close');
    faqItem.setAttribute('data-faq-state', 'closed');
  }
});


btnOpenAllEl.addEventListener('click', event => {
  openModalFaq();
});

btnCloseAllEl.addEventListener('click', event => {
  closeModalFaq();
});

function openModalFaq() {
  modalOverlayEl.classList.add('is-open-modal-faq');
  document.documentElement.style.overflow = 'hidden';
  document.addEventListener('keydown', handleEscKey);
}

function closeModalFaq() {
  modalOverlayEl.classList.remove('is-open-modal-faq');
  document.documentElement.style.overflow = '';
  document.removeEventListener('keydown', handleEscKey);
}

function handleEscKey(e) {
  if (e.key === 'Escape') {
    closeModalFaq();
  }
}
