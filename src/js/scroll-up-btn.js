const openScrollUpBtn = document.querySelector('[data-scroll-up-btn]');

openScrollUpBtn.addEventListener('click', handleScrollBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    openScrollUpBtn.dataset.scrollUpBtn = 'open';
    openScrollUpBtn.addEventListener('click', handleScrollBtn);
  } else {
    openScrollUpBtn.dataset.scrollUpBtn = 'close';
    openScrollUpBtn.removeEventListener('click', handleScrollBtn);
  }
});

function handleScrollBtn() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
