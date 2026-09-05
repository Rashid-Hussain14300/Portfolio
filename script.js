
const header = document.getElementById('siteHeader');
const progress = document.getElementById('scrollProgress');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

document.getElementById('year').textContent = new Date().getFullYear();

function onScroll(){
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 25);
  const doc = document.documentElement;
  const total = doc.scrollHeight - doc.clientHeight;
  progress.style.width = (total ? (y / total) * 100 : 0) + '%';
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function openPreview(src, alt){
  lightboxImage.src = src;
  lightboxImage.alt = alt || 'Project preview';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
}
function closePreview(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  document.body.classList.remove('no-scroll');
}
document.querySelectorAll('[data-preview]').forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    openPreview(btn.dataset.preview, img ? img.alt : 'Project preview');
  });
});
lightboxClose.addEventListener('click', closePreview);
lightbox.addEventListener('click', e => { if(e.target === lightbox) closePreview(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closePreview(); });
