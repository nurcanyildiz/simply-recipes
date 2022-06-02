const btn = document.querySelector('.nav-btn');
btn.addEventListener('click', function() {
  const nav = document.querySelector('.nav-links');

  if (nav.classList.contains('show-links')) {
    nav.classList.remove('show-links');
  } else {
    nav.classList.add('show-links');
  }

});
const date = document.querySelector('#date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;