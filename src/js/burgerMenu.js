const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');

openBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'open';
  burgerMenuEl.addEventListener('click', handleCloseMenu);
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    document.addEventListener('click', handleClickOutside);
  });
});

closeBtnEl.addEventListener('click', closeMenu);

function handleCloseMenu(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }
  closeMenu();
}
function handleClickOutside(e) {
  if (burgerMenuEl.contains(e.target) || openBtnEl.contains(e.target)) {
    return;
  }
  closeMenu();
}

function closeMenu() {
  document.body.style.overflow = '';
  burgerMenuEl.dataset.visible = 'close';
  burgerMenuEl.removeEventListener('click', handleCloseMenu);
  document.removeEventListener('click', handleClickOutside);
}
