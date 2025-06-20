const savedCookie = localStorage.getItem('cookies');
if (savedCookie === null) {
  setTimeout(openNodal, 2000);
}
const modalEl = document.querySelector('[data-cookie="close"]');
function openNodal() {
  modalEl.dataset.cookie = 'open';
  document.body.style.overflow = 'hidden';
  modalEl.addEventListener('click', handleCookieBtn);
}

function handleCookieBtn(e) {
  if (!e.target.dataset.info) {
    return;
  }
  const cookie = e.target.dataset.info;
  localStorage.setItem(
    'cookies',
    JSON.stringify(cookie === 'accept' ? true : false)
  );
  document.body.style.overflow = '';
  modalEl.dataset.cookie = 'close';
  modalEl.removeEventListener('click', handleCookieBtn);
}
