document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.textContent = '☰';
    });
  });
}
