const btnOpenAllEl = document.querySelector('[data-faq="open-all-faq"]');
const btnCloseAllEl = document.querySelector('[data-faq="close-all-faq"]');
const modalOverlayEl = document.querySelector('.modal-overlay-faq');
const listFaqEl = document.querySelector('[data-list="list"]');

listFaqEl.addEventListener('click', event => {
  const moreBtn = event.target.closest('[data-faq][data-action-btn-more]');
  const closeBtn = event.target.closest('.faq-btn-close');
  if (moreBtn) {
    const faqItem = moreBtn.closest('.faq-item');
    if (!faqItem) return;

    // закриття попереднього FAQ
    const openItem = listFaqEl.querySelector('.faq-item.faq-item-open');
    if (openItem && openItem !== faqItem) {
      const openedText = openItem.querySelector('.faq-text');
      const openedTitle = openItem.querySelector('.faq-title');
      const openedCloseBtn = openItem.querySelector('[data-faq-close]');
      const openedMoreBtn = openItem.querySelector('[data-action-btn-more]');

      openedText.dataset.action = 'close';
      openedMoreBtn.dataset.actionBtnMore = 'open';
      openedCloseBtn.setAttribute('data-faq-close', 'close');

      openItem.classList.remove('faq-item-open');
      openedTitle.classList.remove('faq-title-open');
      openedText.classList.remove('faq-text-open');
    }

    // відкриття нового FAQ
    const faqText = faqItem.querySelector('.faq-text');
    const faqTitle = faqItem.querySelector('.faq-title');
    const closeBtnEl = faqItem.querySelector('[data-faq-close]');

    faqText.dataset.action = 'open';
    moreBtn.dataset.actionBtnMore = 'close';
    closeBtnEl.setAttribute('data-faq-close', 'open');

    faqItem.classList.add('faq-item-open');
    faqTitle.classList.add('faq-title-open');
    faqText.classList.add('faq-text-open');

    // скролл на поточний FAQ для мобілки
    if (window.innerWidth < 1200) {
      const rect = faqItem.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect.top + scrollTop - 50;

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
    return;
  }
  // закриття поточного FAQ
  if (closeBtn) {
    const faqItem = closeBtn.closest('.faq-item');
    if (!faqItem) return;

    const faqText = faqItem.querySelector('.faq-text');
    const faqTitle = faqItem.querySelector('.faq-title');
    const closeBtnEl = faqItem.querySelector('[data-faq-close]');
    const moreBtnEl = faqItem.querySelector('[data-action-btn-more]');

    faqText.dataset.action = 'close';
    moreBtnEl.dataset.actionBtnMore = 'open';
    closeBtnEl.setAttribute('data-faq-close', 'close');

    faqItem.classList.remove('faq-item-open');
    faqTitle.classList.remove('faq-title-open');
    faqText.classList.remove('faq-text-open');
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
